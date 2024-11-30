/**
 *
 * @param {Job} job
 * @returns {[Job, Promise<[Job, boolean, number]>]}
 */
function execute(job) {
  const start = Date.now();
  return [
    job,
    job.execute().then(
      () => [job, true, Date.now() - start],
      () => [job, false, Date.now() - start]
    ),
  ];
}

/**
 * @typedef Job
 * @property {string} id Уникальный идентификатор задачи, 1 ≤ id.length ≤ 10.
 * @property {number} priority Приоритет задачи, 1 ≤ priority ≤ 10^9. Чем выше число, тем выше приоритет.
 * @property {() => Promise<undefined>} execute Функция, выполняющая задание.
 * Может быть resolved или rejected через длительное время.
 */

/**
 * @typedef JobReport
 * @property {number} qcPassed Общее количество выполненных успешно задач.
 * @property {number} qcFailed Общее количество невыполненных задач.
 * @property {string[]} jobIds Идентификаторы взятых в работу заказов.
 * @property {number} timeSpent Количество проведённых в работе миллисекунд.
 */

class AssemblyLineScheduler {
  /**
   * @param {number} n Число сборочных линий, 1 ≤ n ≤ 1024
   */
  constructor(n) {
    /**
     * @type {number}
     */
    this.n = n;
    /**
     * @type {Job[]}
     */
    this.jobs = [];
    /**
     * @type {Array<Promise<Report>>}
     */
    this.reports = [];
  }

  /**
   * Добавляет задачу в пул задач следующего дня.
   * В рамках одного теста может быть не более 10^5 вызовов этого метода.
   * @param {Job} job
   */
  appendJob(job) {
    this.jobs.push(job);
  }

  /**
   * Запускает обработку задач из пула и выдаёт список отчётов.
   * В рамках одного теста может быть не более 10 вызовов этого метода.
   * @returns {Promise<JobReport[]>}
   */
  start() {
    const jobs = this.jobs.splice(0).sort((a, b) => a.priority - b.priority);
    /**
     * @type {Report}
     */
    const report = {
      qcPassed: 0,
      qcFailed: 0,
      jobIds: [],
      timeSpent: 0,
    };
    /**
     *
     * @param {Array<[Job, Promise<[Job, boolean, number]>]>} queue
     * @returns {Promise<Report>}
     */
    async function runLoop(queue) {
      if (queue.length === 0) {
        return report;
      }

      const [job, passed, time] = await Promise.race(queue.map(([, promise]) => promise));
      if (passed) {
        report.qcPassed += 1;
      } else {
        report.qcFailed += 1;
      }
      report.timeSpent += time;
      report.jobIds.push(job.id);

      return runLoop(queue.filter(([val]) => !(val === job)).concat(jobs.splice(-1, 1).map(execute)));
    }

    this.reports.push(runLoop(jobs.splice(-this.n, this.n).map(execute)));

    return Promise.all(this.reports);
  }
}

module.exports = { AssemblyLineScheduler };

(async () => {
  const generateJob = () =>
    function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.8 ? resolve() : reject();
        }, 1 + Math.floor(Math.random() * 100));
      });
    };

  const scheduler = new AssemblyLineScheduler(5);
  const reports = [];
  for (let day = 0; day < 2; day += 1) {
    for (let i = 0; i < 10; i += 1) {
      // это лишь примерный код, задачи могут также быть добавлены прямо во время работы (в процессе исполнения start асинхронно)
      scheduler.appendJob({
        id: String(i),
        priority: 10,
        execute: generateJob(),
      });
    }

    reports.push(await scheduler.start());
  }

  console.log(JSON.stringify(reports, null, 4));
})();

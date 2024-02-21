const { performance } = require("perf_hooks");

function throttle(fn, time) {
  let isThrottled = false;
  let lastArgs = null;
  let ctx = null;

  function throttled() {
    if (isThrottled) {
      lastArgs = arguments;
      ctx = this;
      return;
    } else {
      fn.apply(this, arguments);
      isThrottled = true;
    }
    setTimeout(function timeoutCallback() {
      isThrottled = false;
      if (lastArgs === null) return;
      throttled.apply(ctx, lastArgs);
      lastArgs = ctx = null;
    }, time);
  }

  return throttled;
}

module.exports = { throttle };

const fn = throttle((str) => {
  console.log(str);
  console.log(performance.now());
}, 1000);

setTimeout(() => {
  fn("0"); // 0
}, 0);

setTimeout(() => {
  fn("500"); // 1000
}, 500);

setTimeout(() => {
  fn("1300"); // 2000
}, 1300);

setTimeout(() => {
  fn("2500"); // 3000
}, 2500);

setTimeout(() => {
  fn("3100"); // -
}, 3100);

setTimeout(() => {
  fn("3200"); // -
}, 3200);

setTimeout(() => {
  fn("3400"); // 4000
}, 3400);

// const fn = throttle(
//   function getName() {
//     console.log(this.name);
//   },
//   1000
// );

// fn.apply({ name: 'Bob' });

// fn.apply({ name: 'Alice' });

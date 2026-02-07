export function debounce(fn, delayTime) {
  let timerId;
  return function () {
    clearTimeout(timerId);

    setTimeout(() => {
      fn();
    }, delayTime);
  };
}

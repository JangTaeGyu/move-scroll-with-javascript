const scrollNode = document.scrollingElement || document.documentElement;

export function scroll(target, delay) {
  const current = scrollNode.scrollTop;
  const fpsInterval = parseInt(delay / 60, 10);

  let scrollInterval = parseInt((current - target) / fpsInterval, 10);
  if (scrollInterval < 0) {
    scrollInterval = Math.abs(scrollInterval);
  }

  const action = () => {
    let nextAction = true;

    if (current === target) {
      return;
    }

    if (current > target) {
      // scroll up
      scrollNode.scrollTop -= scrollInterval;

      nextAction = !(scrollNode.scrollTop <= target);
    } else {
      // scroll down
      scrollNode.scrollTop += scrollInterval;

      nextAction = !(scrollNode.scrollTop >= target);
    }

    const callScroll = requestAnimationFrame(action);

    // scroll move cancel
    if (!nextAction) {
      scrollNode.scrollTop = target;
      cancelAnimationFrame(callScroll);
    }
  };

  action();
}
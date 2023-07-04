document.addEventListener("DOMContentLoaded", initApplication);

async function initApplication() {
  const currentDate = new Date();
  const endDate = new Date(currentDate.setDate(currentDate.getDate() + 7));

  endDate.setHours(23, 59, 59);
  changeCountdownValue(endDate);
  initCountDown(endDate);
}

function initCountDown(endDate) {
  setInterval(() => {
    changeCountdownValue(endDate);
  }, 1000);
}

function changeCountdownValue(endDate) {
  const currentDate = new Date();
  const diffTime = endDate.getTime() - currentDate.getTime();
  const date = new Date(diffTime);

  const diffDays = parseInt(
    (endDate - currentDate) / (1000 * 60 * 60 * 24),
    10
  );
  const diffHours = date.getHours();
  const diffMinutes = date.getMinutes();
  const diffSeconds = date.getSeconds();

  if (diffDays === 0) {
    hideElement("day");
  }

  if (diffDays === 0 && diffHours === 0) {
    hideElement("hour");
  }

  setItemValue("day", diffDays);
  setItemValue("hour", diffHours);
  setItemValue("minute", diffMinutes);
  setItemValue("second", diffSeconds);
}

function setItemValue(className, value) {
  const element = document.querySelector(`.${className}`);
  const elementValue = element.querySelector(".value");
  elementValue.textContent = twoDigitsFormat(value);
}

function twoDigitsFormat(value) {
  return Intl.NumberFormat(navigator.language, {
    minimumIntegerDigits: 2,
  }).format(value);
}

function hideElement(className) {
  const element = document.querySelector(`.${className}`);
  element.setAttribute("hidden", true);
}

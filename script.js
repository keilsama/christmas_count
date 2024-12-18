const nextXmasDate = (currentTime) => {
  let xmasDate = new Date(currentTime.getFullYear() + "-12-25T00:00:00");
  if (currentTime.getTime() > xmasDate.getTime()) {
    let nextYear = currentTime.getFullYear() + 1;
    xmasDate = new Date(nextYear + "-12-25T00:00:00");
  }
  return xmasDate;
};

document.addEventListener("DOMContentLoaded", () => {
  let nextXmas = nextXmasDate(new Date()).getTime() / 1000;

  let flipdown = new FlipDown(nextXmas)


    .start()


    .ifEnded(() => {
      console.log("The countdown has ended!");
    });
});

//Create a Countdown Timer

let count = 5;

const countDown = (count) => {
  while (count >= 0) {
    console.log(count--);
  }
};

countDown(count);

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start() {
    const time = setInterval(() => {
      console.log(this.currentTime); 
      this.currentTime++
    },1000)
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let twoDigits = "";
    let zero = "0";
    if (value < 10) {
      twoDigits = zero + value.toString();
    } else {
      twoDigits = value.toString();
    }
    return twoDigits;
  }

  stop() { 
    clearInterval(this.intervalId)
  }

  reset() {
    clearInterval(this.intervalId);
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let result = `${minutes}:${seconds}`;
    return result
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

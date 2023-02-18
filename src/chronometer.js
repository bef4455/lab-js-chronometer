class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }


  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)

    // ... your code goes here
  }

  getMinutes() {
    const total = Math.floor(this.currentTime % 60)
    const resultFloor = Math.floor(total)
    return resultFloor
    // ... your code goes here
  }

  getSeconds() {
    const totalSeconds = this.currentTime % 60
    return totalSeconds
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {

    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

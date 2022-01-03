function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(700, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('counter').innerText = formattedNumber
    })
    
  })

  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(120, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('counter1').innerText = formattedNumber
    })
  
  })

  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(1050, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('counter2').innerText = formattedNumber
    })
  
  })
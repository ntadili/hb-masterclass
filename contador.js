      // // Set the date we're counting down to
      // var countDownDate = new Date(Date.UTC(2025, 5, 8, 21, 59, 0)).getTime();

  
      // // Update the count down every 1 second
      // var x = setInterval(function() {
  
      //   // Get today's date and time
      //   var now = new Date().getTime();
          
      //   // Find the distance between now and the count down date
      //   var distance = countDownDate - now;
          
      //   // Time calculations for days, hours, minutes and seconds
      //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
      //   // Output the result in an element with id="demo"
      //   document.getElementById("contador").innerHTML = days + "d" + hours + "h "
      //   + minutes + "m " + seconds + "s ";
          
      //   // If the count down is over, write some text 
      //   if (distance < 0) {
      //     clearInterval(x);
      //     document.getElementById("contador").innerHTML = "EXPIRED";
      //   }
      // }, 1000);



      // // CONTANDOR HEADER

      // // Set the date we're counting down to
      // var countDownDate = new Date(Date.UTC(2025, 5, 8, 21, 59, 0)).getTime();
  
      // // Update the count down every 1 second
      // var x = setInterval(function() {
  
      //   // Get today's date and time
      //   var now = new Date().getTime();
          
      //   // Find the distance between now and the count down date
      //   var distance = countDownDate - now;
          
      //   // Time calculations for days, hours, minutes and seconds
      //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
      //   // Output the result in an element with id="demo"
      //   document.getElementById("contador-header").innerHTML = days + "d " + hours + "h "
      //   + minutes + "m " + seconds + "s ";
          
      //   // If the count down is over, write some text 
      //   if (distance < 0) {
      //     clearInterval(x);
      //     document.getElementById("contador-header").innerHTML = "EXPIRED";
      //   }
      // }, 1000);





// JavaScript corregido
function getSpainTimeDate() {
  // Hora objetivo: 8 de junio 2025, 23:59 hora de España (CEST, UTC+2)
  const targetDate = new Date(Date.UTC(2025, 5, 12, 21, 59, 0)); // 23:59 CEST = 21:59 UTC
  return targetDate.getTime();
}

const countDownDate = getSpainTimeDate();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Cálculos de tiempo
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Formatear con ceros iniciales
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Actualizar contador
  document.getElementById("countdown-days").textContent = formatTime(days);
  document.getElementById("countdown-hours").textContent = formatTime(hours);
  document.getElementById("countdown-minutes").textContent = formatTime(minutes);
  document.getElementById("countdown-seconds").textContent = formatTime(seconds);

  // Si el contador ha terminado
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-container").innerHTML = "¡TERMINADO!";
  }
}

// Actualizar cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar inmediatamente
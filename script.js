    function updateTimer() {
      // Get the current date and time
      var currentDateTime = new Date();      
      var formattedDateTime = currentDateTime.toLocaleString();   
      document.getElementById("timer").innerText = formattedDateTime;
    }
  
    setInterval(updateTimer, 1000);
    updateTimer()

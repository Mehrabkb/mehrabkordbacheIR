AOS.init();

$(function(){
    let myInterval;

    // شروع interval
    function startInterval() {
        if (myInterval) clearInterval(myInterval);
        myInterval = setInterval(() => {
            $("#typer1").empty();
          $("#typer1").typing({
            sourceElement: $("#typer1-content")
          });
          setTimeout(stopInterval,4000);
        }, 3000);
    }

    // توقف interval
    function stopInterval() {
        // $("#typer1").empty();
        clearInterval(myInterval);
        startInterval();
    }

    // استفاده:
    startInterval();              // شروع میشه
    setTimeout(stopInterval, 500); // بعد از 5 ثانیه متوقف میشه
    setTimeout(startInterval, 800); // بعد از 8 ثانیه دوباره شروع میشه
})
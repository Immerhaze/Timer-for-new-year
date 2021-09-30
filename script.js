  const monthsEl = document.getElementById("months");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");


const newYears = "1 Jan 2022"; 


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds =(newYearsDate -  currentDate) / 1000;


    const days = Math.floor (totalSeconds / 3600 / 24);

    const months = Math.floor(days / 30);

    const hours = Math.floor (totalSeconds / 3600) % 24;
    
    const minutes = Math.floor(totalSeconds/ 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;
    
    
  monthsEl.innerHTML = months;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML =  formatTime(seconds);

}


 function formatTime(time) {

    return time < 10 ? `0${time}` : time;
 }

 
//initial call
countdown()


setInterval(countdown, 1000);




window.addEventListener('mousemove', function(e) {
let Xva = e.x;
let Yva = e.y;
var hex_numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
 
var hexcode ='';

for(i=0; i<6; i++){
    var random_index = Math.floor(Math.random()* hex_numbers.length);

    hexcode += hex_numbers[random_index]
}

  if( Xva <= 465 && Yva >= 365){
  document.getElementById('mes').style.color = `#${hexcode}`;
  document.getElementById('dia').style.color = `#${hexcode}`;;
  document.getElementById('hora').style.color = `#${hexcode}`;;
  document.getElementById('minuto').style.color = `#${hexcode}`;;
  document.getElementById('segundo').style.color = `#${hexcode}`;;
} else{
  document.getElementById('mes').style.color = "whitesmoke";
  document.getElementById('dia').style.color = "whitesmoke";
  document.getElementById('hora').style.color = "whitesmoke";
  document.getElementById('minuto').style.color = "whitesmoke";
  document.getElementById('segundo').style.color = "whitesmoke";
  }
});

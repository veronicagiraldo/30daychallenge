
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const min = now.getMinutes();
  const minsDegrees = ((min / 60)* 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour =now.getHour();
  const hourDegrees = ((hour / 12)* 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);

setDate();


var leadingZero = function leadingZero(num) {
  return num < 10 ? "0" + num : num;
};

module.exports = function tohhmmss(input) {
  var sec_num,
      hours,
      minutes,
      seconds;

  input = parseInt(input, 10);
  hours = leadingZero(Math.floor(input / 3600));
  minutes = leadingZero(Math.floor((input - hours * 3600) / 60));
  seconds = leadingZero(input - hours * 3600 - minutes * 60);

  return hours + ':' + minutes + ':' + seconds;
};
var $addEntryBtn = document.querySelector('.add-entry');
var $modalBox = document.querySelector('.modal');
var $buttonSelect = document.querySelector('.button-select');
var $scheduleTable = document.querySelector('table');
var $allDays = document.querySelectorAll(".day-container");

$addEntryBtn.addEventListener('click', function (event) {
  $modalBox.classList.remove('hidden');
});

$buttonSelect.addEventListener('click', function (event) {
  $modalBox.classList.add('hidden');
});

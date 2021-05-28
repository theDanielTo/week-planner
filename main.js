var $addEntryBtn = document.querySelector('.add-entry');
var $modalBox = document.querySelector('.modal');
var $buttonSelect = document.querySelector('.button-select');
var $allDays = document.querySelectorAll('.day-container');
var $currentDay = document.querySelector("#current-day");
var $tableData1 = document.querySelectorAll(".tableData1");
var $tableData2 = document.querySelectorAll(".tableData2");
var $daySelect = document.querySelector(".day-select");
var $timeSelect = document.querySelector(".time-select");
var $descSelect = document.querySelector(".desc-select")

var entries = {
  Sunday: [],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
};

$addEntryBtn.addEventListener('click', function (event) {
  $modalBox.classList.remove('hidden');
});

$buttonSelect.addEventListener('click', function (event) {
  $modalBox.classList.add('hidden');
  console.log($daySelect.value);
  console.log($timeSelect.value);
  entries[$daySelect.value].time = $timeSelect.value;
  entries[$daySelect.value].description = $descSelect.value;
  console.log(entries);
});

for (const day of $allDays) {
  day.addEventListener('click', function (event) {
    for (let i = 0; i < entries.length; i++) {
      $tableData1[i].innerHTML = entries[i].time;
      $tableData2[i].innerHTML = entries[i].description;
    }
    $currentDay.innerHTML = event.target.textContent;
  });
}

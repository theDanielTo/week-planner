var $addEntryBtn = document.querySelector('.add-entry');
var $modalBox = document.querySelector('.modal');
var $buttonSelect = document.querySelector('.button-select');
var $allDays = document.querySelectorAll('.day-container');
var $currentDay = document.querySelector('#current-day');
var $tableData1 = document.querySelectorAll('.tableData1');
var $tableData2 = document.querySelectorAll('.tableData2');
var $daySelect = document.querySelector('.day-select');
var $timeSelect = document.querySelector('.time-select');
var $descSelect = document.querySelector('.desc-select');
var $modalHeading = document.querySelector(".modal-heading");

$addEntryBtn.addEventListener('click', function (event) {
  $modalBox.classList.remove('hidden');
  $modalHeading.textContent = "Add Entry";
  entries.editing = "adding";
});

$buttonSelect.addEventListener('click', function (event) {
  if (entries.editing === "adding") {
    $modalBox.classList.add('hidden');
    entries[$daySelect.value].push({ time: $timeSelect.value, description: $descSelect.value });

    for (const data of $tableData1) {
      data.innerHTML = '&ThinSpace;';
    }
    for (const data of $tableData2) {
      data.innerHTML = '&ThinSpace;';
    }
    for (let i = 0; i < entries[$daySelect.value].length; i++) {
      $tableData1[i].innerHTML = entries[$daySelect.value][i].time;
      $tableData2[i].innerHTML = entries[$daySelect.value][i].description;
    }
  } else if (entries.editing === "updating") {
    $modalBox.classList.add('hidden');

    for (const data of $tableData1) {
      data.innerHTML = '&ThinSpace;';
    }
    for (const data of $tableData2) {
      data.innerHTML = '&ThinSpace;';
    }
      var $updateButton =
      var currentIndex = $updateButton.getAttribute("data-entry-id");
      entries[$currentDay.textContent][currentIndex].time = $timeSelect.value;
      entries[$currentDay.textContent][currentIndex].description = $descSelect.value;
      $tableData1[currentIndex].innerHTML = entries[$currentDay.textContent][currentIndex].time;
      $tableData2[currentIndex].innerHTML = entries[$currentDay.textContent][currentIndex].description;
  }
  $currentDay.innerHTML = $daySelect.value;
  $daySelect.value = '';
  $timeSelect.value = '';
  $descSelect.value = '';
});

for (const day of $allDays) {
  day.addEventListener('click', function (event) {
    for (const data of $tableData1) {
      data.innerHTML = '&ThinSpace;';
    }
    for (const data of $tableData2) {
      data.innerHTML = '&ThinSpace;';
    }
    for (let i = 0; i < entries[event.target.textContent].length; i++) {
      $tableData1[i].innerHTML = entries[event.target.textContent][i].time;
      $tableData2[i].innerHTML = entries[event.target.textContent][i].description;
      const $updateButton = document.createElement('button');
      $updateButton.textContent = "Update";
      $updateButton.className = "update-button right";
      $updateButton.setAttribute('data-entry-id', i);
      $tableData2[i].appendChild($updateButton);
      $updateButton.addEventListener('click', function (e) {
        $modalBox.classList.remove("hidden");
        $modalHeading.textContent = "Update Entry";
        $daySelect.value = $currentDay.textContent;
        $timeSelect.value = entries[$currentDay.textContent][i].time;
        $descSelect.value = entries[$currentDay.textContent][i].description;
        entries.editing = "updating";
      })
    }
    $currentDay.innerHTML = event.target.textContent;
  });
}

// window.addEventListener('DOMContentLoaded', function (event) {
//   for (const day in entries) {
//     for (const data of $tableData1) {
//       data.innerHTML = '&ThinSpace;';
//     }
//     for (const data of $tableData2) {
//       data.innerHTML = '&ThinSpace;';
//     }
//     for (let i = 0; i < entries[day].length; i++) {
//       console.log(entries[day][i]);
//       $tableData1[i].innerHTML = entries[day][i].time;
//       $tableData2[i].innerHTML = entries[day][i].description;
//     }
//     $currentDay.innerHTML = 'Monday';
//   }
// });

var $addEntryBtn = document.querySelector('.add-entry');
var $modalBox = document.querySelector('.modal');
var $buttonSelect = document.querySelector('.button-select');
var $table1 = document.querySelector('.table1');
var $table2 = document.querySelector('.table2');
var $tbody1 = document.querySelector('#tbody1');
var $tbody2 = document.querySelector('#tbody2');
var $allDays = document.querySelectorAll('.day-container');
var entries = [
  {
    time: '1:00',
    description: 'description'
  },
  {
    time: '2:00',
    description: 'description'
  }
];

$addEntryBtn.addEventListener('click', function (event) {
  $modalBox.classList.remove('hidden');
});

$buttonSelect.addEventListener('click', function (event) {
  $modalBox.classList.add('hidden');
});

for (const day of $allDays) {
  day.addEventListener('click', function (event) {
    for (let i = 0; i < entries.length; i++) {
      const $tableRow1 = document.createElement('tr');
      const $tableData1 = document.createElement('td');
      const $tableRow2 = document.createElement('tr');
      const $tableData2 = document.createElement('td');
      $tableData1.innerHTML = 'entries.time';
      $tableData2.innerHTML = 'entries.desc';
      $tableRow1.append($tableData1);
      $tableRow2.append($tableData2);
      $tbody1.append($tableRow1);
      $tbody2.append($tableRow2);
    }
  });
}

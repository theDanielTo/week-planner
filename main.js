var $addEntryBtn = document.querySelector('.add-entry');
var $modalBox = document.querySelector('.modal');

$addEntryBtn.addEventListener('click', function (event) {
  $modalBox.classList.remove('hidden');
});

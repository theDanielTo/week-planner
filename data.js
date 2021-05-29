var entries = {
  Sunday: [],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  editing: null
};

const prevEntriesJSON = window.localStorage.getItem('schedule-local-storage');
if (prevEntriesJSON !== null) entries = JSON.parse(prevEntriesJSON);

window.addEventListener('beforeunload', function () {
  const entriesJSON = JSON.stringify(entries);
  window.localStorage.setItem('schedule-local-storage', entriesJSON);
});

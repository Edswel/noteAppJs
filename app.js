const addSection = document.querySelector('.add-section');
const addNew = document.querySelector('.add-new');
const closeIcon = addNew.querySelector('header i');
const noteTitle = addNew.querySelector('input');
const noteBody = addNew.querySelector('textarea');
const addBtn = addNew.querySelector('button');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Get notes from local storage
const notes = JSON.parse(localStorage.getItem("notes") || []);

// Add class to show form
addSection.addEventListener("click", () => {
  addNew.classList.add("show");
});

// Remove close to close form
closeIcon.addEventListener("click", () => {
  addNew.classList.remove("show");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newTitle = noteTitle.value;
  let newBody = noteBody.value;

  // Get current date
  if (newTitle, newBody) {
    let newDate = new Date();
    let month = months[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();

    // New note object
    let newNote = {
      title: newTitle,
      body: newBody,
      date: `${month} ${day}, ${year}`
    }

    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
});
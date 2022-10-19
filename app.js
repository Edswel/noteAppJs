const addSection = document.querySelector('.add-section');
const addNew = document.querySelector('.add-new');
const closeIcon = addNew.querySelector('header i');
const noteTitle = addNew.querySelector('input');
const noteBody = addNew.querySelector('textarea');
const addBtn = addNew.querySelector('button');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Get notes from local storage
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

// Add class to show form
addSection.addEventListener("click", () => {
  addNew.classList.add("show");
});

// Show notes from local storage
function getNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note) => {
    let noteList = `
    <li class="section">
      <div class="contents">
        <p>${note.title}</p>
        <span>${note.body}</span>
      </div>
      <div class="sub-section">
        <span>${note.date}</span>
        <div class="action-buttons">
          <i class="fas fa-edit"></i>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </li>
    `;
    addSection.insertAdjacentHTML("afterend", noteList);
  });
}
getNotes();

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
    closeIcon.click();
    getNotes();
  }
});
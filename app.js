const addSection = document.querySelector('.add-section');
const addNew = document.querySelector('.add-new');
const closeIcon = addNew.querySelector('header i');

// Add class to show form
addSection.addEventListener("click", () => {
  addNew.classList.add("show");
});

// Remove close to close form
closeIcon.addEventListener("click", () => {
  addNew.classList.remove("show");
});
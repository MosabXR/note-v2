import Note from './note.module.js';

let notes = [];
let addNoteButton = document.querySelector('#add-note');
let notesContainer = document.querySelector('.row');
let colors = document.querySelectorAll('nav .btn');
let textArea = document.querySelector('textarea');
let currentColor = 'primary';
colors.forEach(color=>{
  color.addEventListener('click',(e)=>{
    currentColor = e.target.id;
    textArea.classList.replace(`${textArea.classList[textArea.classList.length-1]}`,`bg-${currentColor}-subtle`);
  });
});

// Example of adding a console log to check the values being passed to addNote
addNoteButton.addEventListener('click', (e) => {
  addNote(notes.length, textArea.value, currentColor, '7/6/2024');
});

function addNote(id, text, color, date_created) {
  notes.push(new Note(id, text, color, date_created));
  displayNotes(notes);
}

function displayNotes(notes) {
  let container = ``;
  notes.forEach(note=>{
    container+= `
    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
    <div class="note rounded-2 bg-${note.color}-subtle p-2">
      <div class="note-options d-flex justify-content-between align-items-center">
        <div class="note-date text-danger">
          <span>7/6/2024</span>
        </div>
        <div class="note-actions bg-${note.color} rounded-4">
          <div class="btn btn-${note.color}">
            <i class="fa-solid fa-pen"></i>
          </div>
          <div class="btn btn-${note.color}">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="btn btn-${note.color}">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      <p>${note.text}</p>
    </div>
  </div>
    `;
  });
  notesContainer.innerHTML += container;
  console.log("t4st");

}



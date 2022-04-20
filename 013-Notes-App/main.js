const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  popupTitle = popupBox.querySelector("header p"),
  closeIcon = popupBox.querySelector("header i"),
  titleTag = popupBox.querySelector("input"),
  descTag = popupBox.querySelector("textarea"),
  addBtn = popupBox.querySelector("button");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//? Getting Localstorage Notes if Exist and Parsing Them
//? to js Object else passing an empty array to notes

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  //* Make these inputs blank when user close popup
  titleTag.value = "";
  descTag.value = "";
  popupBox.classList.remove("show");
});

function showNotes() {
  //* Removing All Previous notes before adding new
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note, index) => {
    let liTag = `
     <li class="note">
         <div class="details">
            <p> ${note.title}</p>
            <span>${note.description}</span>
        </div>
        <div class="bottom-content">
            <span>${note.date}</span>
            <div class="settings">
                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="menu">
                    <li><i class="uil uil-pen"></i> Edite</li>

                    <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i> Delete</li>
                </ul>
            </div>
        </div>
    </li>`;

    addBox.insertAdjacentHTML("afterend", liTag);
  });
}

showNotes();

function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}

function deleteNote(noteId) {
  console.log(noteId);
  notes.splice(noteId, 1); // remove selected note from array/tasks

  localStorage.setItem("notes", JSON.stringify(notes));

  showNotes();
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let noteTitle = titleTag.value.trim(),
    noteDesc = descTag.value.trim();

  if (noteTitle || noteDesc) {
    let dateObj = new Date(),
      month = months[dateObj.getMonth()],
      day = dateObj.getDate(),
      year = dateObj.getFullYear();

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day}, ${year}`,
    };

    notes.push(noteInfo); // adding new note to notes
    localStorage.setItem("notes", JSON.stringify(notes));

    closeIcon.click();
    showNotes();
  }
});

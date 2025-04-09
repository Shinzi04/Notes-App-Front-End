// Data
import { notesData } from "./js/data/note-data.js";

// Components
import "./js/components/note-list.js";
import "./js/components/note-item.js";
import "./js/components/note-form.js";
import "./js/components/navigation-item.js";

// Scripts And Handlers
import "./js/scripts/formHandler.js"

const noteList = document.querySelector("note-list");
noteList.setNotes(notesData);
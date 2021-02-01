const textElSkills = document.getElementById('skills');
const textElProjects = document.getElementById('textElProjects');
const textElContacts = document.getElementById('textElContacts');

const textEl = document.getElementById('text');

const textSkills = 'i build with...';
const textProjects = 'a few of my projects...';
const textContacts = 'here is how to reach me...';
let idxSkills = 1;
let idxProjects = 1;
let idxContacts = 1;
let speed = 300;

writeSkillsText();
writeProjectsText();
writeContactsText();
// writeSkillsText();

function writeSkillsText() {
  textElSkills.innerText = textSkills.slice(0, idxSkills);

  idxSkills++;

  if (idxSkills > textSkills.length) {
    idxSkills = 1;
  }

  setTimeout(writeSkillsText, speed);
}

function writeProjectsText() {
  textElProjects.innerText = textProjects.slice(0, idxProjects);

  idxProjects++;

  if (idxProjects > textProjects.length) {
    idxProjects = 1;
  }

  setTimeout(writeProjectsText, speed);
}

function writeContactsText() {
  textElContacts.innerText = textContacts.slice(0, idxContacts);

  idxContacts++;

  if (idxContacts > textContacts.length) {
    idxContacts = 1;
  }

  setTimeout(writeContactsText, speed);
}

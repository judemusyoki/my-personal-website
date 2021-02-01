const textElUserName = document.getElementById('username');
const textElAboutMe = document.getElementById('aboutMe');
const textElSkills = document.getElementById('skills');

const textElContacts = document.getElementById('contacts');

const textEl = document.getElementById('text');

const textUserName = 'Hi, I am Jude Musyoki...';
const textAboutMe = 'a little about me...';
const textSkills = 'i build with...';
const textContacts = 'here is how to reach me...';
let idxUserName = 1;
let idxAboutMe = 1;
let idxSkills = 1;
let idxContacts = 1;
let speed = 300;

console.log(textElUserName, textElAboutMe, textElSkills);

writeUserName();
writeAboutMeText();
writeSkillsText();
// writeContactsText();
// writeSkillsText();

function writeUserName() {
  textElUserName.innerText = textUserName.slice(0, idxUserName);

  idxUserName++;

  if (idxUserName > textUserName.length) {
    idxUserName = 1;
  }

  setTimeout(writeUserName, speed);
}

function writeSkillsText() {
  textElSkills.innerText = textSkills.slice(0, idxSkills);

  idxSkills++;

  if (idxSkills > textSkills.length) {
    idxSkills = 1;
  }

  setTimeout(writeSkillsText, speed);
}

function writeAboutMeText() {
  textElAboutMe.innerText = textAboutMe.slice(0, idxAboutMe);

  idxAboutMe++;

  if (idxAboutMe > textAboutMe.length) {
    idxAboutMe = 1;
  }

  setTimeout(writeAboutMeText, speed);
}

function writeContactsText() {
  textElContacts.innerText = textContacts.slice(0, idxContacts);

  idxContacts++;

  if (idxContacts > textContacts.length) {
    idxContacts = 1;
  }

  setTimeout(writeContactsText, speed);
}

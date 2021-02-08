const textElIntro = document.getElementById('intro');
const textElAboutMe = document.getElementById('aboutMe');
const textElSkills = document.getElementById('skills');

const textIntro = 'Hi, I am Jude Musyoki...';
const textAboutMe = 'A little about me...';
const textSkills = 'i build with...';

let idxIntro = 1;
let idxAboutMe = 1;
let idxSkills = 1;
speed = 150;

writeIntro();
writeAboutMe();
writeSkills();

function writeIntro() {
  textElIntro.innerText = textIntro.slice(0, idxIntro);

  idxIntro++;

  if (idxIntro > textIntro.length) {
    idxIntro = 1;
  }

  setTimeout(writeIntro, speed);
}

function writeAboutMe() {
  textElAboutMe.innerText = textAboutMe.slice(0, idxAboutMe);

  idxAboutMe++;

  if (idxAboutMe > textAboutMe.length) {
    idxAboutMe = 1;
  }

  setTimeout(writeAboutMe, speed);
}

function writeSkills() {
  textElSkills.innerText = textSkills.slice(0, idxSkills);

  idxSkills++;

  if (idxSkills > textSkills.length) {
    idxSkills = 1;
  }

  setTimeout(writeSkills, speed);
}

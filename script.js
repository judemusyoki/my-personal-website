const textElIntro = document.getElementById('intro');
const textElAboutMe = document.getElementById('aboutMe');

const textIntro = 'Hi, I am Jude Musyoki...';
const textAboutMe = 'A little about me...';

let idxIntro = 1;
let idxAboutMe = 1;
speed = 100;

writeIntro();
writeAboutMe();

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

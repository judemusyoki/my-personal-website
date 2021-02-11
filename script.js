const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
  nav.forEach((navEl) => navEl.classList.add('visible'));
});
closeBtn.addEventListener('click', () => {
  nav.forEach((navEl) => navEl.classList.remove('visible'));
});

const textElIntro = document.getElementById('intro');
const textElAboutMe = document.getElementById('aboutMe');
const textElSkills = document.getElementById('skills');
const textElTestimonials = document.getElementById('testimonials');
const textElProjects = document.getElementById('projects');

const textIntro = 'Hi, I am Jude Musyoki...';
const textAboutMe = 'A little about me...';
const textSkills = 'i build with...';
const textTestimonials = 'working with me...';
const textProjects = 'my portfolio...';

let idxIntro = 1;
let idxAboutMe = 1;
let idxSkills = 1;
let idxTestimonials = 1;
let idxProjects = 1;
speed = 150;

if (screen.width > 500) {
  writeIntro();
  writeAboutMe();
  writeSkills();
  writeTestimonials();
  writeProjects();
}

function writeProjects() {
  textElProjects.innerText = textProjects.slice(0, idxProjects);

  idxProjects++;

  if (idxProjects > textProjects.length) {
    idxProjects = 1;
  }

  setTimeout(writeProjects, speed);
}

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

  if (idxSkills > textTestimonials.length) {
    idxSkills = 1;
  }

  setTimeout(writeSkills, speed);
}

function writeTestimonials() {
  textElTestimonials.innerText = textTestimonials.slice(0, idxTestimonials);

  idxTestimonials++;

  if (idxTestimonials > textTestimonials.length) {
    idxTestimonials = 1;
  }

  setTimeout(writeTestimonials, speed);
}

/* Testimoinals */

const testimonialsContainer = document.querySelector('.testimonials');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.userImage');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
const companyWebsite = document.querySelector('.companyWebsite');

const testimonials = [
  {
    name: 'Anders Hinrichs',
    image: './images/user_images/anders.png',
    position: 'Director Business Development',
    company: 'WasteHero',
    website: 'https://www.wastehero.io/en/',
    text:
      'Jude quickly learned and adapted to our tech stack, which meant that already after a couple of weeks Jude was ready to push code to production. As a person, Jude is very social and outgoing. This was essential to his excellent collaboration with both technical and commercial-minded colleagues.',
  },
  {
    name: 'Vincentius Mathius Nielsen',
    image: './images/user_images/vinc.jpg',
    position: 'Managing Director',
    company: 'Cafe Smaglos',
    website: 'https://xn--cafesmagls-8cb.com/',
    text:
      'Working with Jude has been a real pleasure. He has helped me develop a good and smooth homepage for my café. We have had a few, but very constructive meetings, where we discussed the project, and how the work-process would work out. I am not a tech geek, therefore I expressed what I felt was important in the homepage as a café owner. Jude listened to my needs, and created a functional and good looking website that appeals to the café’s theme and vibe.',
  },
  {
    name: 'Nuru Lema',
    image: './images/user_images/nuru.jpg',
    position: 'Founder & MD',
    company: 'Active Lemafit',
    website: 'https://activelemafit.com/',
    text:
      'As a client I love how my ideas were polished and translated into a user friendly and aesthetically pleasing web page.',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, image, position, company, website, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = image;
  username.innerHTML = name;
  role.innerHTML = position;
  companyWebsite.innerHTML = company;
  companyWebsite.href = website;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 7000);

/* Copyright date */

const textElCopyright = document.getElementById('copyright');

const year = new Date().getFullYear();

const textCopyright = '© ' + year + ' Jude Musyoki';

textElCopyright.innerHTML = textCopyright;

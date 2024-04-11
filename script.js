let data= [
    {
      "name": "Mercedes Maybach",
      "img": "src/maybach.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Bugatti Veyron",
      "img": "src/veyron.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Audi RS6",
      "img": "src/rs6.jpg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Porsche 911",
      "img": "src/porsche911.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Ferrari812",
      "img": "src/ferrari812.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Toyota Camry",
      "img": "src/camry.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Audi A8",
      "img": "src/a8.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "BMV M8",
      "img": "src/m8.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

let n=0;
let petList=document.getElementById('pets__list');
let petss=document.querySelectorAll('div.pets__item');
let image1=document.querySelector('img.img1');
let image2=document.querySelector('img.img2');
let image3=document.querySelector('img.img3');
let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let t3=document.getElementById('t3');
let prevt1,prevt2,prevt3;
let last1,last2;
let next=0,prev=0;

function Anim(){
    petList.style.opacity=0;
    petList.style.opacity=100;
  }

function getRandomArbitrary(n) {
    let r= Math.floor(Math.random() * (8 - 0) + 0);
    let i,t;
    if(n==0) {i=image1;t=t1;}
    if(n==1) {i=image2;t=t2;}
    if(n==2) {i=image3;t=t3;}

        if (data[r].name==prevt1 || data[r].name==prevt2 || data[r].name==prevt3 || data[r].name==last1 || data[r].name==last2) getRandomArbitrary(n);
        else {
            i.src=data[r].img;
            t.innerHTML=data[r].name;
            if (n==0) last1=data[r].name;
            if (n==1) last2=data[r].name;
        }
  }

function Next(){
    if(prev==1){
        let y1=t1.textContent,y2=t2.textContent,y3=t3.textContent;
        t1.textContent=prevt1;t2.textContent=prevt2;t3.textContent=prevt3;
        for (let i=0;i<8;i++){
            console.log(data[i].name);
            console.log(prevt1);
            if (data[i].name==prevt1) image1.src=data[i].img;
            if (data[i].name==prevt2) image2.src=data[i].img;
            if (data[i].name==prevt3) image3.src=data[i].img;
        }
        prev=0;
        next=1;
        prevt1=y1;prevt2=y2;prevt3=y3;
        Anim();
        return;
    }
    prevt1=t1.textContent;prevt2=t2.textContent;prevt3=t3.textContent;
    last1="";last2="";
    for (let i=0;i<3;i++){
        let r=getRandomArbitrary(n);
        n++;
    }
    Anim()
    n=0;
    next=1;

}

function Prev(){
    if(next==1){
        let y1=t1.textContent,y2=t2.textContent,y3=t3.textContent;
        t1.textContent=prevt1;t2.textContent=prevt2;t3.textContent=prevt3;
        for (let i=0;i<8;i++){
            if (data[i].name==prevt1) image1.src=data[i].img;
            if (data[i].name==prevt2) image2.src=data[i].img;
            if (data[i].name==prevt3) image3.src=data[i].img;
        }
        next=0;
        prev=1;
        prevt1=y1;prevt2=y2;prevt3=y3;
        Anim()
        return;
        
    }
    prevt1=t1.textContent;prevt2=t2.textContent;prevt3=t3.textContent;
    last1="";last2="";
    for (let i=0;i<3;i++){
        let r=getRandomArbitrary(n);
        n++;
    }
    Anim()
    n=0;
    prev=1;

}

Next();
let menu=document.getElementById("menu");
let menuItems=document.querySelectorAll(".nav__item")
let burger=document.getElementById("burger");

function burgerClick(){
  if (menu.classList.contains("showMenu")) {
    menu.style.transform="translateX(100%)";
    burger.style.transform='rotate(0deg)';
    menu.classList.remove("showMenu");
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
  } else {
    menu.classList.add("showMenu");
    menu.style.transform="translateX(0%)";
    burger.style.transform='rotate(-90deg)';
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
  }
}



const callButton = document.querySelector('.popup-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');
let popupttittle=document.querySelector('.popup__title');
let popupimg=document.querySelector('.popup__image');
let popuptype=document.querySelector('.popup__type');
let popuptext=document.querySelector('.popup__text');
let popupage=document.querySelector('.popup__agep');
let popupinoc=document.querySelector('.popup__inoculationsp');
let popupdiseases=document.querySelector('.popup__diseasesp');
let popupparasite=document.querySelector('.popup__parasitesp');


popupToggle = (t) => {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')){
    popupttittle.innerHTML=t.innerHTML;
    for (let i=0;i<8;i++){
      if (data[i].name==t.innerHTML) {
        popupimg.src=data[i].img;
        popuptype.innerHTML=data[i].type + " - " + data[i].breed;
        popuptext.innerHTML=data[i].description;
        popupage.innerHTML= " " + data[i].age;
        popupinoc.innerHTML= " " + data[i].inoculations;
        popupdiseases.innerHTML= " " + data[i].diseases;
        popupparasite.innerHTML= " " + data[i].parasites;
      }
  }
  }
}

closeButton.addEventListener('click', popupToggle);

closeOnBlack = (event) => {
  if (event.target === event.currentTarget) popupToggle();
}
popup.addEventListener('click', closeOnBlack);

function menuClick(){
  menu.style.transform="translateX(100%)";
  burger.style.transform='rotate(0deg)';
  menu.classList.remove("showMenu");
  document.body.style.overflow = "auto";
  document.body.style.userSelect = "auto";
}
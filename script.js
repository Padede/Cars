let data= [
  {
    "name": "Mercedes Maybach",
    "img": "src/maybach.jpg",
    "type": "Car",
    "breed": "Premium",
    "description": "A car for successful people.",
    "age": "2 months",
    "inoculations": ["300$"],
    "diseases": ["250 km/h"],
    "parasites": ["4.8 sec"]
  },
  {
    "name": "Bugatti Veyron",
    "img": "src/veyron.jpg",
    "type": "Car",
    "breed": "Sport",
    "description": "A car for speed lovers.",
    "age": "1000$",
    "inoculations": ["409 km/h"],
    "diseases": ["2.7 sec"]
  },
  {
    "name": "Audi RS6",
    "img": "src/rs6.jpg",
    "type": "Car",
    "breed": "Sport",
    "description": "A car for speed lovers.",
    "age": "350$",
    "inoculations": ["250 km/h"],
    "diseases": ["3.6 sec"]
  },
  {
    "name": "Porsche 911",
    "img": "src/porsche911.jpg",
    "type": "Car",
    "breed": "Sport",
    "description": "A car for speed lovers.",
    "age": "200$",
    "inoculations": ["291 km/h"],
    "diseases": ["4.5 sec"]
  },
  {
    "name": "Ferrari812",
    "img": "src/ferrari812.jpg",
    "type": "Car",
    "breed": "Sport",
    "description": "A car for speed lovers.",
    "age": "600$",
    "inoculations": ["340 km/h"],
    "diseases": ["2.9 sec"]
  },
  {
    "name": "Toyota Camry",
    "img": "src/camry.jpg",
    "type": "Car",
    "breed": "Classic",
    "description": "This is classic car for chill with family.",
    "age": "50$",
    "inoculations": ["210 km/h"],
    "diseases": ["9.5 sec"]
  },
  {
    "name": "Audi A8",
    "img": "src/a8.jpg",
    "type": "Car",
    "breed": "Classic",
    "description": "This is classic car for chill with family.",
    "age": "90$",
    "inoculations": ["210 km/h"],
    "diseases": ["6.5 sec"]
  },
  {
    "name": "BMV M8",
    "img": "src/m8.jpg",
    "type": "Car",
    "breed": "Premium",
    "description": "A car for successful people.",
    "age": "300$",
    "inoculations": ["250 km/h"],
    "diseases": ["3.3 sec"]
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
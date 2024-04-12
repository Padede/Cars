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
    console.log("123")
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
        }
    }
    }
  }
  
  closeButton.addEventListener('click', popupToggle);
  closeOnBlack = (event) => {
    if (event.target === event.currentTarget) popupToggle();
  }
  popup.addEventListener('click', closeOnBlack);
  
  let totalPages=8,page=1;
  let screenWidth=window.screen.width;
  let currentPage=document.querySelector(".current");
  let arr=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],
  arr9=[],arr10=[],arr11=[],arr12=[],arr13=[],arr14=[],arr15=[],arr16=[];
  function Random(mas){
    while(mas.length < 8){
      let r= Math.floor(Math.random() * (8 - 0) + 0);
      if(mas.indexOf(r) === -1) mas.push(r);
  }
  return mas;
  }
  Random(arr);
  Random(arr2);
  Random(arr3);
  Random(arr4);
  Random(arr5);
  Random(arr6);
  Random(arr7);
  Random(arr8);
  Random(arr9);
  Random(arr10);
  Random(arr11);
  Random(arr12);
  Random(arr13);
  Random(arr14);
  Random(arr15);
  Random(arr16);
  Completion(arr);
  function Completion(mas){
    for (let i=0;i<mas.length;i++){
      let text,imageC;
      if (i==0) {text=document.querySelector('.t1');imageC=document.querySelector('.img1');}
      if (i==1) {text=document.querySelector('.t2');imageC=document.querySelector('.img2');}
      if (i==2) {text=document.querySelector('.t3');imageC=document.querySelector('.img3');}
      if (i==3) {text=document.querySelector('.t4');imageC=document.querySelector('.img4');}
      if (i==4) {text=document.querySelector('.t5');imageC=document.querySelector('.img5');}
      if (i==5) {text=document.querySelector('.t6');imageC=document.querySelector('.img6');}
      if (i==6) {text=document.querySelector('.t7');imageC=document.querySelector('.img7');}
      if (i==7) {text=document.querySelector('.t8');imageC=document.querySelector('.img8');}
      text.innerHTML=data[mas[i]].name;
      imageC.src=data[mas[i]].img;
    }
  }
  
  let o;
  let butNext=document.getElementById('next');
  let butPrev=document.getElementById('prev');
  let butLast=document.getElementById('next__next');
  let butFirst=document.getElementById('prev__prev');
  function Test(){
    if (screenWidth>=1280){
      if (page==1) o=arr;
      if (page==2) o=arr2;
      if (page==3) o=arr3;
      if (page==4) o=arr4;
      if (page==5) o=arr5;
      if (page==6) o=arr6;
      if (page==1) {butPrev.style.pointerEvents='none';butFirst.style.pointerEvents='none'} else {butPrev.style.pointerEvents='all';butFirst.style.pointerEvents='all'}
      if (page==6) {butNext.style.pointerEvents='none';butLast.style.pointerEvents='none'} else {butNext.style.pointerEvents='all';butLast.style.pointerEvents='all'}
      return;
    }
  
    if (screenWidth>=751 && screenWidth<=1160){
      if (page==1) o=arr;
      if (page==2) o=arr2;
      if (page==3) o=arr3;
      if (page==4) o=arr4;
      if (page==5) o=arr5;
      if (page==6) o=arr6;
      if (page==7) o=arr7;
      if (page==8) o=arr8;
      if (page==1) {butPrev.style.pointerEvents='none';butFirst.style.pointerEvents='none'} else {butPrev.style.pointerEvents='all';butFirst.style.pointerEvents='all'}
      if (page==8) {butNext.style.pointerEvents='none';butLast.style.pointerEvents='none'} else {butNext.style.pointerEvents='all';butLast.style.pointerEvents='all'}
      return;
    }
  
    if (screenWidth<751){
      if (page==1) o=arr;
      if (page==2) o=arr2;
      if (page==3) o=arr3;
      if (page==4) o=arr4;
      if (page==5) o=arr5;
      if (page==6) o=arr6;
      if (page==7) o=arr7;
      if (page==8) o=arr8;
      if (page==9) o=arr9;
      if (page==10) o=arr10;
      if (page==11) o=arr11;
      if (page==12) o=arr12;
      if (page==13) o=arr13;
      if (page==14) o=arr14;
      if (page==15) o=arr15;
      if (page==16) o=arr16;
      if (page==1) {butPrev.style.pointerEvents='none';butFirst.style.pointerEvents='none'} else {butPrev.style.pointerEvents='all';butFirst.style.pointerEvents='all'}
      if (page==16) {butNext.style.pointerEvents='none';butLast.style.pointerEvents='none'} else {butNext.style.pointerEvents='all';butLast.style.pointerEvents='all'}
      return;
    }
  
    
  }
  
  
  function First(){
    page=1;
    Test();
    Completion(o);
    currentPage.innerHTML=page;
  }
  
  function Next(){
    page++;
    Test();
    Completion(o);
    currentPage.innerHTML=page;
  }
  
  function Prev(){
    page--;
    Test();
    Completion(o);
    currentPage.innerHTML=page;
  }
  
  function Last(){
    if (screenWidth>=1280){
      page=6;
    }
    if (screenWidth>=751 && screenWidth<=1160){
      page=8
    }
    if (screenWidth<751){
      page=16
    }
    Test();
    Completion(o);
    currentPage.innerHTML=page;
  }
  
  function updateWidth(){
    screenWidth=window.screen.width;
  }
  
  setInterval(updateWidth, 1);
  
  function menuClick(){
    menu.style.transform="translateX(100%)";
    burger.style.transform='rotate(0deg)';
    menu.classList.remove("showMenu");
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
  }
  
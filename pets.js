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
      "name": "Ferrari 812",
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
  
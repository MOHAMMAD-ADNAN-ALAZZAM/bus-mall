'use strict';

let leftImag = document.getElementById('leftImag');
let middleImag = document.getElementById('middleImag');
let rightImag = document.getElementById('rightImag');

let maximumClicks = 25;
let attempts = 0;
let arrOfobjects =[];

function Busmall(name, imgURL){
    this.name = name;
    this.imgURL = imgURL;
    this.clickCtr = 0;
    this.shownCtr = 0;

    // Product.all.push(this);
    arrOfobjects.push(this);



}



    new Busmall('bag', 'img/bag.jpg');
    new Busmall('banana', 'img/banana.jpg');
    new Busmall('bathroom', 'img/bathroom.jpg');
    new Busmall('boots', 'img/boots.jpg');
    new Busmall('breakfast', 'img/breakfast.jpg');
    new Busmall('bubblegum', 'img/bubblegum.jpg');
    new Busmall('chair', 'img/chair.jpg');
    new Busmall('cthulhu', 'img/cthulhu.jpg');
    new Busmall('dog-duck', 'img/dog-duck.jpg');
    new Busmall('dragon', 'img/dragon.jpg');
    new Busmall('pen', 'img/pen.jpg');
    new Busmall('pet-sweep', 'img/pet-sweep.jpg');
    new Busmall('scissors', 'img/scissors.jpg');
    new Busmall('shark', 'img/shark.jpg');
    new Busmall('sweep', 'img/sweep.png');
    new Busmall('tauntaun', 'img/tauntaun.jpg');
    new Busmall('unicorn', 'img/unicorn.jpg');
    new Busmall('usb', 'img/usb.gif');
    new Busmall('water-can', 'img/water-can.jpg');
    new Busmall('wine-glass', 'img/wine-glass.jpg');


    //  console.log(arrOfobjects);
    let leftImagIndex;
    let middleImagIndex;
    let rightImagIndex;

    function renderThreeRandomImages(){
         leftImagIndex = generateRandomIndex();
         middleImagIndex = generateRandomIndex(); 
         rightImagIndex = generateRandomIndex();
        while(leftImagIndex === middleImagIndex && middleImagIndex === rightImagIndex && leftImagIndex === rightImagIndex ){
            leftImagIndex = generateRandomIndex();
        }

        
          let leftImag = document.getElementById('leftImag');
          let middleImag = document.getElementById('middleImag');
          let rightImag = document.getElementById('rightImag');
          leftImag.setAttribute('src', arrOfobjects[leftImagIndex].imgURL);
          middleImag.setAttribute('src', arrOfobjects[middleImagIndex].imgURL);
          rightImag.setAttribute('src', arrOfobjects[rightImagIndex].imgURL);
          

    }
    renderThreeRandomImages();


    function generateRandomIndex(){

        let randomIndex = Math.floor(Math.random() *arrOfobjects.length);
        return randomIndex;

    }


    leftImag.addEventListener('click',handleClicking);
    middleImag.addEventListener('click',handleClicking);
    rightImag.addEventListener('click',handleClicking);

    function handleClicking(event){
        attempts++;
        // alert('hi mohammad');
        // console.log(event);
        if(attempts<=maximumClicks){
            if(event.target.id ==='leftImag'){
                arrOfobjects[leftImagIndex].clickCtr++;
                // console.log(arrOfobjects[leftImagIndex].clickCtr);
            }else if(event.target.id ==='middleImag'){
                arrOfobjects[middleImagIndex].clickCtr++;
                // console.log(arrOfobjects[middleImagIndex].clickCtr);
            }else{
                arrOfobjects[rightImagIndex].clickCtr++;
                // console.log(arrOfobjects[rightImagIndex].clickCtr);
            }
            renderThreeRandomImages();

        }else{
            let unList =document.getElementById('unOrderList');
            let li;
            for(let i=0 ;i<arrOfobjects.length ;i++){
                li = document.createElement('li');
                unList.appendChild(li);
                li.textContent = `${arrOfobjects[i].name}  it has ${arrOfobjects[i].clickCtr}.`

            }
            leftImag.removeEventListener('click',handleClicking);
            middleImag.removeEventListener('click',handleClicking);
            rightImag.removeEventListener('click',handleClicking);
        
            
        }
    }   
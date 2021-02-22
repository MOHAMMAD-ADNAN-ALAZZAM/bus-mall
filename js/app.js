'use strict';

let leftImag = document.getElementById('leftImag');
let middleImag = document.getElementById('middleImag');
let rightImag = document.getElementById('rightImag');

let maximumClicks = 25;
let attempts = 0;
let arrOfobjects =[];
let namesArry =[]; 
let arryOfVotes = [];
let arryShownCtr =[];
function Busmall(name, imgURL){
    this.name = name;
    this.imgURL = imgURL;
    this.clickCtr = 0;
    this.shownCtr = 0;

    // Product.all.push(this);
    arrOfobjects.push(this);
    namesArry.push(this.name);
    // arryShownCtr.push(this.shownCtr);




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


         while (middleImagIndex === leftImagIndex) {
            middleImagIndex = generateRandomIndex();
          }
        
          while (rightImagIndex === middleImagIndex || rightImagIndex === leftImagIndex) {
            rightImgIndex = generateRandomIndex();
          }






        // while(leftImagIndex === middleImagIndex && middleImagIndex === rightImagIndex && leftImagIndex === rightImagIndex ){
        //     leftImagIndex = generateRandomIndex();
        // }
        // while(leftImagIndex === middleImagIndex && middleImagIndex === rightImagIndex && leftImagIndex === rightImagIndex ){
        //     if(leftImagIndex === rightImagIndex){
        //         leftImagIndex = generateRandomIndex();
        //     }else if(middleImagIndex === rightImagIndex){
        //         middleImagIndex = generateRandomIndex();  
        //     }else if(rightImagIndex===middleImagIndex){
        //         rightImagIndex = generateRandomIndex(); 

        //     }else if (leftImagIndex === middleImagIndex ){
        //         middleImagIndex = generateRandomIndex(); 
        //     }else if(middleImagIndex === rightImagIndex){
        //         rightImagIndex = generateRandomIndex();

        //     }else if(leftImagIndex === middleImagIndex){
        //         rightImagIndex = generateRandomIndex();
                
        //     }else{
        //         break;
        //     }
        // }

        
          let leftImag = document.getElementById('leftImag');
          let middleImag = document.getElementById('middleImag');
          let rightImag = document.getElementById('rightImag');
          leftImag.setAttribute('src', arrOfobjects[leftImagIndex].imgURL);
          arrOfobjects[leftImagIndex].shownCtr++ ;
          middleImag.setAttribute('src', arrOfobjects[middleImagIndex].imgURL);
          arrOfobjects[middleImagIndex].shownCtr++;
          rightImag.setAttribute('src', arrOfobjects[rightImagIndex].imgURL);
          arrOfobjects[rightImagIndex].shownCtr++;
          

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
            leftImag.removeEventListener('click',handleClicking);
            middleImag.removeEventListener('click',handleClicking);
            rightImag.removeEventListener('click',handleClicking);

            let x = document.getElementById("myBtn");
            let unList =document.getElementById('unOrderList');
            unList.appendChild(x);
            unList.addEventListener('click',ul);
            let li;
            function ul(){
                for(let i=0 ;i<arrOfobjects.length ;i++){
                    li = document.createElement('li');
    
                    unList.appendChild(li);
    
                    li.textContent = `${arrOfobjects[i].name}  it has votes= ${arrOfobjects[i].clickCtr} it shown = ${arrOfobjects[i].shownCtr}.`
    
                }
                unList.removeEventListener('click',ul);
            }
            
            for(let j=0 ;j < arrOfobjects.length; j++){
                arryOfVotes.push(arrOfobjects[j].clickCtr);
                arryShownCtr.push(arrOfobjects[j].shownCtr);
                
            }

            chartRender();
           
        
            
        }
    }


    
// for(let i =0; i<arrOfobjects.length;i++){
//     namesArry.push(arrOfobjects[i].name);
// }
function chartRender(){

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: namesArry,
        datasets: [{
            label: 'votes', 
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: arryOfVotes,
        },{ label: 'shownCtr', 
        backgroundColor: 'rgb(333, 199, 222)',
        borderColor: 'rgb(333, 199, 222)',
        data: arryShownCtr,} ]
    },

    // Configuration options go here
    options: {}
});

}
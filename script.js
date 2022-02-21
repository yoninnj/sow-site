'use strict';
const modal=document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnsOpenModal= document.querySelectorAll('.show-modal');
for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',function(){
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden'); 
    })
}

const closew =function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
btnCloseModal.addEventListener('click',closew);
overlay.addEventListener('click',closew);
document.addEventListener('keydown',function(e){
if(e.key=="Escape"){
    if(!modal.classList.contains('hidden')){
      closew();
    }
}
});
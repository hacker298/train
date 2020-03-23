"use strict";




function createMessage(message, element){

  let top = element.offsetTop;
  let left = element.offsetLeft;

  if(element.getBoundingClientRect().top < 60) {
    top += 50;
  }
  else {
    top -= 150;
  }

  let div = document.createElement('div');
  div.innerHTML = message;
  div.style.cssText = `
  display: block;
  position: absolute;
  box-sizing: border-box;
  padding: 30px;
  border: 1px solid black;
  background: #dfb0e8;
  top: ${top}px;
  left: ${left}px;
  `;
  return div;
}



////////////////////////////////////////////////


let elements = document.querySelectorAll("[data-message]");



for (let element of elements) {

  element.addEventListener('mouseover', function(){
    let current_tooltip = createMessage(element.dataset.message, element);

    let id = setTimeout( () => {
      document.body.append( current_tooltip )
    }, 300);






    element.addEventListener('mouseout', function(){

      clearTimeout(id);
      current_tooltip.remove();
    });



  });


}



































// let current_x = 0,
// current_y = 0,
// last_x,
// last_y;
//







//
// document.body.addEventListener('mousemove', function(event){
//
//   current_x = event.clientX;
//   current_y = event.clientY;
//
//   setTimeout( () => {
//     last_y = current_y;
//     last_x = current_x;
//   }, 100);
//
//
//   console.log(current_x - last_x);
//   console.log(current_y - last_y);
//   console.log(last_y - current_y > 30 || current_y - last_y > 30 || last_x - current_x > 30 || current_x - last_x > 30);
//   console.log();
//
// });

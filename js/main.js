'use strict';
{
  const dts = document.querySelectorAll('dt');
  dts.forEach(dt=>{
    dt.addEventListener('click',()=>{
      dt.parentNode.classList.toggle('appear');
      // dt.parentElement.classList.toggle('appear');
  dts.forEach(el=>{
    if( el!== dt ){
      el.parentNode.classList.remove('appear');
      // el.parentElement.classList.remove('appear');
    }
  });
  });
  });
}
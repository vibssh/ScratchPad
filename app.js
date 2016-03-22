 (function () {
   'use strict';

   var o = document.getElementById('output'),
     btn = document.getElementsByTagName('button')[0],
     count = 0;

   var el2 = document.querySelector('button.icobutton');

   var lsCount = localStorage.getItem('count');
   count = lsCount === null ? 0 : lsCount;
   o.innerHTML = count;

   function addMe() {
     count++;

     o.innerHTML = count;
     localStorage.setItem('count', count);

          var burst = new mojs.Burst({
            parent: el2,
            duration: 200,
            shape: 'circle',
            fill: ['deeppink', 'cyan', 'orange'],
            x: '50%',
            y: '50%'
          });
          
     console.info(burst);
   }

   btn.addEventListener("click", addMe);
 }());
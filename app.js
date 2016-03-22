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

     // Just a burst of circles    
     //          var burst = new mojs.Burst({
     //            parent: el2,
     //            duration: 200,
     //            shape: 'circle',
     //            fill: ['deeppink', 'cyan', 'orange'],
     //            x: '50%',
     //            y: '50%'
     //          });


     var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
     var el = document.querySelector('.icobutton'),
       elSpan = el.querySelector('span'),
       // mo.js timeline obj
       timeline = new mojs.Timeline(),

       // tweens for the animation:

       // burst animation
       tween1 = new mojs.Burst({
         parent: el,
         duration: 1600,
         shape: 'circle',
         fill: '#988ADE',
         x: '50%',
         y: '50%',
         opacity: 0.6,
         childOptions: {
           radius: {
             'rand(20,5)': 0
           }
         },
         radius: {
           50: 110
         },
         count: 28,
         isSwirl: true,
         swirlSize: 15,
         isRunLess: true,
         easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
       }),

       // ring animation
       tween2 = new mojs.Burst({
         parent: el,
         duration: 1800,
         delay: 300,
         shape: 'circle',
         fill: '#988ADE',
         x: '50%',
         y: '50%',
         opacity: 0.6,
         childOptions: {
           radius: {
             'rand(20,5)': 0
           },
           type: 'line',
           stroke: '#988ADE',
           strokeWidth: 1
         },
         angle: {
           0: 10
         },
         radius: {
           140: 200
         },
         count: 18,
         isRunLess: true,
         easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
       });
       // icon scale animation
//       tween3 = new mojs.Tween({
//         duration: 900,
//         onUpdate: function (progress) {
//           var scaleProgress = scaleCurve(progress);
//           elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
//         }
//       });

     // add tweens to timeline:
     timeline.add(tween1, tween2);

     // when clicking the button start the timeline/animation:

     timeline.start();


     // console.info(burst);
   }

   btn.addEventListener("click", addMe);
 }());
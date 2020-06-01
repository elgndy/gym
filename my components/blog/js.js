var link_all = document.querySelectorAll('.link_all'),
    same2 = document.querySelectorAll('.same2'),
    pairant_nav_hidden = document.querySelector('#pairant_nav_hidden'),
    open_hidden = document.querySelector('.open_hidden');
   
   // icon nav click
    open_hidden.addEventListener('click' ,() =>{
     open_hidden.toggleAttribute('is1');
      if(open_hidden.hasAttribute('is1')){
        pairant_nav_hidden.style.height = '420px';
        pairant_nav_hidden.style.overflowY = 'auto';
        
      }else{
        pairant_nav_hidden.style.height = '80px';
        pairant_nav_hidden.style.overflowY = 'hidden';
      }
    })
 
//links click
    link_all.forEach((lin) => {
      lin.addEventListener('click' , () => {
        lin.toggleAttribute('is');
        for(var l = 0; l < same2.length;l++){
          pairant_nav_hidden.style.overflowY = 'auto'
          if(lin.hasAttribute('is')){
             lin.children[2].style.display = 'block';
          }else{
            lin.children[2].style.display = 'none'
          }
        }
      })
    })
 /* end nav hidden */


 var logo = document.querySelector('.logo');
 var ul = document.querySelector('.pairant_nav ul'),
 pairant_nav = document.querySelector('.pairant_nav');
 window.onscroll = () => {
 
   //nav and icon top condatio
     if(window.pageYOffset < 40){
      logo.style.marginTop = '5px';
       pairant_nav.style.position = 'absolute'
       pairant_nav.style.background = '0'
       pairant_nav.classList.remove('anim_nav')
       ul.style.background = '#000'
         }
      else{
       logo.style.margin = '0';
      pairant_nav.style.position = 'fixed'
      pairant_nav.style.width = '100%';
      pairant_nav.style.background = 'rgba(0,0,0,.5)'
      pairant_nav.classList.add('anim_nav')
      ul.style.background = 'none'
     }
var bac_text = document.querySelector('.bac_text');
var bac_text2 = document.querySelector('.bac_text2');
     /* background text */
     if(window.pageYOffset > 400){
      bac_text.style.top = '50%'
     }else{
       bac_text.style.top = '150%'
     }

     if(window.pageYOffset > 900){
      bac_text2.style.top = '50%'
     }else{
       bac_text2.style.top = '150%'
     }
 }
 

var pair_home = document.querySelector('.pair_home'); 
var all_di = document.querySelectorAll('.all div');
var ims = document.querySelectorAll('.all div img');
var text = document.querySelectorAll('.all div section');
var index1 = 0 ;


function ss(index1) {
  for(var x = 0 ; x < all_di.length ; x++){
      
    all_di[x].style.opacity = '0'
    all_di[index1].style.opacity = '1'
      
    ims[x].classList.remove('scalani');
    ims[index1].classList.add('scalani');   
    
setTimeout(() => {
  for(var u =0 ; u < text.length ; u++){
    text[u].style.opacity = '0'
    text[index1].style.opacity = '1';
  }
}, 1500);
    
    all_di[index1].style.transition = 'all .5s ease-in';
    all_di[x].style.transition = 'all .5s ease-in'; 
    }
}

var inwt = setInterval(()=>{ 
  index1 < all_di.length -1  ? index1++ : index1 = 0;
  ss(index1);
} , 6000)

/*
var size = all.clientWidth;
all.style.transform = ' translateX( '+ (-size * index) +'px) '
 
setInterval(() => {
   all.style.transition = 'all .8s ease-in'
   index--
   all.style.transform = ' translateX( '+ (-size * index) +'px) '
 } , 4000)

 window.addEventListener('transitionend' , () => {
   if(imgA[index].id == 'lastest'){
    all.style.transition = 'none'
   index = 3 

   console.log(index)
   all.style.transform = ' translateX( '+ (-size * index) +'px) '
   }
 })
*/


/*pop vedio*/
var pop = document.querySelector('.pop'),
    play = document.querySelector('.play'),
    vedd = document.querySelector('.vedd');

    play.addEventListener('click' , () => {
      setTimeout(() => {
        pop.style.display = 'block'
      },500)
      setTimeout(() => {
        vedd.setAttribute('src' , 'https://www.youtube.com/embed/Jv2hf7My0eo');
      } , 1000)
    })
    pop.addEventListener('click' , () => {
      pop.style.display = 'none';
      vedd.setAttribute('src' , '');
    })
    window.onkeypress = () => {
      pop.style.display = 'none';
      vedd.setAttribute('src' , '');
    }
/**end vedio */

 /* start curosul*/
 var all_imgs = document.querySelector('.all_imgs'),
 imgs = document.querySelectorAll('.all_imgs img'),
 pairant_cur = document.querySelector('.pairant_cur'),
 counter = 0;
window.onload = () => {
 var size = all_imgs.clientWidth;
 all_imgs.style.transform = 'translateX(' +(-size * counter)+ 'px)';
 
 var cur = setInterval(() => {
   all_imgs.style.transition = 'all .5s ease-in-out';
   counter++
   all_imgs.style.transform = 'translateX(' +(-size * counter)+ 'px)';
 } , 4000)

 all_imgs.addEventListener('transitionend' , () => {
   if(imgs[counter].className == 'first'){
     all_imgs.style.transition = 'none';
     counter = imgs.length - 12;
     all_imgs.style.transform = 'translateX(' +(-size * counter)+ 'px)';
 }
 })
}
/*end curosul*/

/*loading page 
var loadin = document.querySelector('.loading');
var spa = document.querySelectorAll('.loading div span');
var l = document.querySelector('.l');
var r = document.querySelector('.r');
window.onload = () => {
  setTimeout(() => {
    loadin.style.display = 'none'
    loadin.style.transition = 'all 1s'
  } , 700)
  setTimeout(() => {
    l.style.left = '-100%';
    l.style.transition = 'all .5s ease-in'
    r.style.right = '-100%';
    r.style.transition = 'all .5s ease-in'
  },1200)  
}


/* 
var curus = document.querySelector('.curus');
document.addEventListener('mousemove' , (e) =>{
  var x = e.clientX;
  var y = e.clientY;
  curus.style.top = y + 'px'
  curus.style.left = x + 'px'
})
 */

 
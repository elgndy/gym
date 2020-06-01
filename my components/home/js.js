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



var hero = document.querySelector('.hero'),
    img_ani = document.querySelector('.hero img'),
    lin = document.querySelector('.lin'),
    slider_home = document.querySelector('.slider_home'),
    pairant_nav = document.querySelector('.pairant_nav');

    var tl = new TimelineMax();

     tl.fromTo(hero,1, {height:'0%'},{height:'85%' , ease:'power2.easeInOut'})
    .fromTo(hero,1.2, {width:'100%'},{width:'80%' , ease:'power2.easeInOut'}) 
    .fromTo(img_ani,1.2, {opacity:'0'},{opacity:'1' , ease:'power2.easeInOut'} , '-=1.7')
    .fromTo(pairant_nav,1.2, {opacity:'0'},{opacity:'1' , ease:'power2.easeInOut'} , '-=1')
    .fromTo(slider_home,.8, {left:'-100%'},{left:'0%' , ease:'power2.easeInOut'} , '-=1.6')
    .fromTo(lin,1.2, {opacity:'0'},{opacity:'1' , ease:'power2.easeInOut'} , '-=1.5');
    
    
    


var logo = document.querySelector('.logo');
var ul = document.querySelector('.pairant_nav ul');
window.onscroll = () => {

  //nav and icon top condatio
    if(window.pageYOffset < 40){
      logo.style.marginTop = '5px';
      pairant_nav.style.position = 'absolute'
      pairant_nav.style.background = '0'
      pairant_nav.classList.remove('anim_nav')
        }
     else{
      logo.style.margin = '0';
      pairant_nav.style.position = 'fixed'
      pairant_nav.style.width = '100%';
      pairant_nav.style.background = 'rgba(0,0,0,.5)'
      pairant_nav.classList.add('anim_nav')
      ul.style.background = 'none'
    }
}
    
var one = document.querySelector('.one'),
    two = document.querySelector('.two'),
    three = document.querySelector('.three');
    
    var imgs = ['../../img100/go1.png' , '../../img100/go2.png' , '../../img100/go3.png'];
    var index = 0;
    function slider(index) {
        for(var i = 0 ; i < imgs.length -1 ; i++){        
            one.style.backgroundImage = "url('" + imgs[index]  + "')"
        }
    }
    setInterval(() => {
        index < imgs.length - 1 ? index++ : index = 0;
        one.classList.remove('sc')
        setTimeout(() => {
            slider(index);
            one.classList.add('sc')
        }, 2000);
    }, 2500);
    
    /////////////////////////////////////////////
    var imgs2 = ['../../img100/go4.png' , '../../img100/go5.png' , '../../img100/go6.png'];
    var index2 = 0;
    function slider2(index2) {
        for(var x = 0 ; x < imgs2.length -1 ; x++){ 
            //one.style.transition = 'all 1s'
            two.style.backgroundImage = "url('" + imgs2[index2]  + "')"
        }
    }
    setInterval(() => {
        index2 < imgs2.length - 1 ? index2++ : index2 = 0;
        two.classList.remove('sc2')
        setTimeout(() => {
            slider2(index2);
            two.classList.add('sc2')
        }, 500);
    }, 2500);
    ////////////////////////////////////////////////////////////////
    var imgs3 = ['../../img100/go7.png' , '../../img100/go8.png' , '../../img100/go9.png'];
    var index3 = 0;
    function slider3(index3) {
        for(var l = 0 ; l < imgs3.length -1 ; l++){ 
            three.style.backgroundImage = "url('" + imgs3[index3]  + "')"
        }
    }
    setInterval(() => {
        index3 < imgs3.length - 1 ? index3++ : index3 = 0;
        three.classList.remove('sc3')
        setTimeout(() => {
            slider3(index3);
            three.classList.add('sc3')
        }, 1300); 
    }, 2500);


    /*//////////////////////////////////////////////////*/
    var all = document.querySelector('.all'),
        img = document.querySelectorAll('.all img');
        var counter = 0;
        var size = all.clientWidth; 
        
        window.onload = () => {
          var size = all.clientWidth;
          all.style.transform = 'translateX(' +(-size * counter)+ 'px)';
          
          //var cur = setInterval(() => {
            setInterval(() => {
              if(counter ==  0){
                all.style.transition = 'all 25s linear';
                counter++
                tl.fromTo( all ,1 ,{transform : 'none'} , {transform: 'translateX(' +(-size * counter)+ 'px)'})
                }
            }, null); 
  
          all.addEventListener('transitionend' , () => {
            if(img[counter].id == 'last'){
              all.style.transition = 'none';
              counter = imgs.length - 3;
              all.style.transform = 'translateX(' +(-size * counter)+ 'px)';
              
          }
          }) 
        }

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
}*/
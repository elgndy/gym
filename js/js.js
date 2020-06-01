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


/* home slide */
var [alldivs , load , imgsLeft , imgsRight , rightchevron , leftchevron , text ] = [
  document.querySelectorAll('.pairant_child .slider'),
  document.querySelectorAll('.pairant_child .slider .load'),
  document.querySelectorAll('.pairant_child .slider .left'),
  document.querySelectorAll('.pairant_child .slider .right'),
  document.getElementById('right_chevron'),
  document.getElementById('left_chevron'),
  document.querySelectorAll(' .pairant_child .slider .text')
];

var index = 0;
const fade = (index) => { // slider start
  for(var x = 0; x < alldivs.length  ; x++ ){ 
    //alldivs[x].style.clipPath = 'circle(0.7% at 100% 99%)';
    //alldivs[index].style.clipPath = 'circle(140.9% at 100% 100%)';
    alldivs[x].style.opacity = '0';
    alldivs[index].style.opacity = '1';
    load[x].style.width = '0%';
    load[x].style.padding = '5px';
    load[index].style.width = '100%';
    load[index].style.padding = '5px';
    imgsLeft[x].classList.remove('leftanimation');
    imgsRight[x].classList.remove('rightanimation');
    imgsLeft[index].classList.add('leftanimation');
    imgsRight[index].classList.add('rightanimation');
    load[x].style.transition = 'all 7s  ease-in-out';
    text[x].style.opacity = '0';  
    text[0].children[1].textContent = 'HEROES'
    alldivs[index].style.transition = 'all 1.8s ease-in-out';
    alldivs[x].style.transition = 'all 1.8s ease-in-out'; 
  }
  setTimeout(() => {// for text as ("Join Now")
    text[index].style.opacity = '1';
    text[index].style.transition = 'all 2s';  
  }, 2000);
} //slider home end

var interval =  setInterval(()=>{ 
  index < alldivs.length -1 ? index++ : index = 0;
  fade(index)
} , 7000)

rightchevron.addEventListener('click' , () => { 
    index < alldivs.length -1 ? index++ : index = 0;
    fade(index)
    clearInterval(interval);
    load[index].style.display = 'none'
  
})

leftchevron.addEventListener('click' , () => {
    index < alldivs.length -1 ? index++ : index = 0;
    fade(index);
    clearInterval(interval)
    load[index].style.display = 'none'
})

/**side bar */
var side_bar = document.querySelector('.side_bar'),
    big_text = document.querySelector('.big_text'),
    open = document.querySelector('.open'),
    close = document.querySelector('.close');
var logo = document.querySelector('.logo'),
    pairant_nav = document.querySelector('.pairant_nav');
var pair_i = document.querySelector('.pair_i');

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
      pairant_nav.style.background = '#000'
      pairant_nav.classList.add('anim_nav')
    }
  
  
// side bar condation
  if(window.pageYOffset >= 200){
    pair_i.style.opacity = 1;
    side_bar.style.right = '-38%';
    side_bar.style.transition = 'all .5s ease-in-out';
    setTimeout( () => {// text in the side bar dont forget that
      big_text.style.bottom = '-85%';
      big_text.style.transition = 'all .5s';
    } , 200 )
  }else{
    pair_i.style.opacity = 0;
  }
  
}

pair_i.addEventListener('click' , () => { // icon to top
  window.scrollBy({ 
    top: (0 - document.body.clientHeight) , 
    left: 0, 
    behavior: 'smooth' 
  });
})// end icon to top============================================

 // start side bar/////////////////////////////////////////////////
open.addEventListener('click' , () => {
side_bar.style.right = 0;
side_bar.style.transition = 'all .5s ease-in-out';
setTimeout( () => {// text in the side bar dont forget that
  big_text.style.bottom = '38%';
  big_text.style.transition = 'all .5s';
} , 500 )
})

close.addEventListener('click' , () => {
  side_bar.style.right = '-38%';
  side_bar.style.transition = 'all .5s ease-in-out';
  setTimeout( () => {// text in the side bar dont forget that
    big_text.style.bottom = '-85%';
    big_text.style.transition = 'all .5s';
  } , 200 )
}) //end side bar /////////////////////////////////////////////////


    /* start photos */
      var over = document.querySelectorAll('div .over');
      
      over.forEach((ov) => {
        ov.addEventListener('mouseenter' , () => {
        ov.previousElementSibling.style.transform = 'translate(60px , 60px)' ;
        ov.previousElementSibling.style.transition = 'all .3s ease-in-out'
      })
      ov.addEventListener('mouseleave' , () => {
        ov.previousElementSibling.style.transform = 'translate(0px ,0px)' ;
        ov.previousElementSibling.style.transition = 'all .3s ease-in-out'
      })
      
    })
    var over = document.querySelectorAll('div .over_big');
       
      over.forEach((ovbg) => {

        ovbg.addEventListener('mouseenter' , () => {
        ovbg.previousElementSibling.style.transform = 'translate(75px , 75px)' ;
        ovbg.previousElementSibling.style.transition = 'all .3s ease-in-out'
      })
      ovbg.addEventListener('mouseleave' , () => {
        ovbg.previousElementSibling.style.transform = 'translate(0px ,0px)' ;
        ovbg.previousElementSibling.style.transition = 'all .3s ease-in-out'
      })
      
    })
    /* end photos */

    /* start vedio */
      var vedio_img = document.querySelector('.vedio_img'),
      pop_vedio =  document.querySelector('.pop_vedio'),
      vedio = document.querySelector('.vedio'),
      pair_ved = document.querySelector('.pair_ved');

      vedio_img.addEventListener('click' , () => {
        pop_vedio.style.opacity = 1;
        pop_vedio.style.zIndex = 5000000000;
        vedio.setAttribute('src'  , 'https://www.youtube.com/embed/kpNjmMabpD0')
        setTimeout(() => {
          vedio.style.opacity = 1;
        } ,1200 )
      })

      window.addEventListener('keypress' , () => {
        pop_vedio.style.opacity = 0;
        pop_vedio.style.zIndex = '-1';        
        vedio.style.opacity = 0;
      })

      pair_ved.addEventListener('click' , () => {
        pop_vedio.style.opacity = 0;
        pop_vedio.style.zIndex = '-1';        
        vedio.style.opacity = 0;
        vedio.setAttribute('src'  , 'kjhgf')
      })
      
/* end vedio */

/* start curosul*/
    var all_imgs = document.querySelector('.all_imgs'),
        imgs = document.querySelectorAll('.all_imgs img'),
        pairant_cur = document.querySelector('.pairant_cur'),
        counter = 0;
      window.onload = () => {
        var size = all_imgs.clientWidth;
        all_imgs.style.transform = 'translateX(' +(-size * counter)+ 'px)';
        
        var cur = setInterval(() => {
          
          all_imgs.style.transition = 'all .4s ease-in-out';
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
        console.log(counter)
      }
/*end curosul*/

/* validation for form  start*/
    var child2 = document.querySelector('.child2');//pairant it has add event (submit)

    child2.addEventListener('submit' , function(e){
      e.preventDefault(); // for stoping action of form
      //my variabls =====================================================start
      var inputh = document.querySelector('.input1'),// input height
          inputw = document.querySelector('.input2'), // input weight
          h = parseInt(inputh.value), // input height with parseint
          w = parseInt(inputw.value), // input weight with parseint
          input3 = document.querySelector('.input3'),
          show = document.querySelector('.p_show'), //show the result of the function 
          msg = '', //  error msg
          p2 = document.querySelector('.p_show2'); //show the error msg 
      //my variabls =====================================================end 

      // start error condation=====================================
      if(inputh.value <= 0 ){ // error msg for height input
        msg = msg + '*error<span style="color:crimson"> Height !</span>  cannot be negative.' + '<br>'
        inputh.style.border = '1px solid #f00'
      }
       if(inputw.value <= 0 ){  // error msg for weight input
        msg = msg +  '*error<span style="color:crimson"> Weight !</span> cannot be negative.' + '<br>'
        inputw.style.border = '1px solid #f00'
      }
      if(input3.value == '' ){ // Age error
        msg = msg + '*error<span style="color:crimson"> Age !</span>  cannot be negative.' + '<br>'
        input3.style.border = '1px solid #f00'
      }
      //end error condation==========================================

      // start result condation//////////////////////////// if
      if(msg != ''){// if i have an error 
         p2.style.height = '100px' // error msg style
          p2.style.padding = '4% 0'
          p2.style.transition = ' all .3s'
          show.style.height = '0px' //result msg style
          show.style.padding = '0% 0'
          show.style.transition = ' all 0s'
        setTimeout(() => {
          p2.innerHTML = msg // show error msg
        },500)      
      }
      // condation of result ///////////////////////////// else
      else{ // if i have not any error
        var BMI = ((w)/ (h) * 58.8); // math
        var result = ''; // the result of math
        
        var cach = function (){ // caching some propertes
          inputh.style.border = '1px solid #aaa' 
          inputw.style.border = '1px solid #aaa';
          input3.style.border = '1px solid #aaa';
          p2.style.height = '0px' // error msg style
          p2.style.padding = '0% 0'
          p2.style.transition = ' all 0s'
          show.style.height = '100px' // result msg style
          show.style.padding = '4% 0'
          show.style.transition = ' all .3s'
               
        }

        if(BMI <= 23){ // under weight
          result =  '<i class="fas fa-male" style="color:crimson;font-size:30px"></i>' + 
          ' <span style="color:crimson"> Under Weight! </span>' 
          + 'yuor BMI is '+ '"' +BMI.toFixed(2)+'"'+ ' kcal/day' ;
          cach();// function of propertes css
        }
        else if(BMI <= 27){ // healthy
          result =  '<i class="fas fa-walking" style="color:crimson;font-size:30px"></i>' + 
          ' <span style="color:crimson"> Healthy! </span>'
          + 'yuor BMI is '+ '"' +  BMI.toFixed(2)+'"' + ' kcal/day, ' ;         
          cach();// function of propertes css
        }
       else if(BMI <= 33){ // over weight
          result =  '<i class="fas fa-street-view" style="color:crimson;font-size:30px"></i>' + 
          ' <span style="color:crimson"> Over Weight! </span>' 
          + 'yuor BMI is '+ '"' +  BMI.toFixed(2)+'"' + ' kcal/day, ' ;         
          cach(); // function of propertes css
        }
        else // more than over weight
        result =  '<i class="fas fa-wheelchair" style="color:crimson;font-size:30px"></i>' + 
        ' <span style="color:crimson"> Out of the box! </span>' 
        + 'yuor BMI is '+ '"' +  BMI.toFixed(2)+'"' + ' kcal/day, ' ;          
        cach();// function of propertes css
      }
      
        show.innerHTML = result  // the end resulte
        setTimeout(() => {
        //inputh.value = '';
        //inputw.value = '';
        //input3.value = ''  

      } , 300)
       
       
    })
/* validation for form end  */

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

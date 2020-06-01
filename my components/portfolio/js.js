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

var pairant_nav = document.querySelector('.pairant_nav');
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

var lis = document.querySelectorAll('.pairant_nav ul li');

for(var x = 0; x < lis.length ; x++){
  
  lis[7].style.opacity = '1'
  lis[x].style.transition = 'all .5s ease-in-out';

  lis[7].addEventListener('click' , () => {
    lis[7].toggleAttribute ('is');
    if(lis[7].hasAttribute('class', 'is')){
      setTimeout(() => {
        lis[6].style.opacity = '1';
      } , 100)
      setTimeout(() => {
        lis[5].style.opacity = '1';
      } , 200)
      setTimeout(() => {
        lis[4].style.opacity = '1';
      } , 300)
      setTimeout(() => {
        lis[3].style.opacity = '1';
      } , 400)
      setTimeout(() => {
        lis[2].style.opacity = '1';
      } , 500)
      setTimeout(() => {
        lis[1].style.opacity = '1';
      } , 600)
      setTimeout(() => {
        lis[0].style.opacity = '1';
      } , 700)
    }
  })
}


    

var imgs = ['../../img100/gym19.png' , '../../img100/gym2.png' , '../../img100/gym23.png'];
var pair_single = document.querySelector('.pair_single');
var one = document.querySelector('.one'),
    two = document.querySelector('.two'),
    three = document.querySelector('.three');

    var hl = document.getElementById('h1');
    var span = document.getElementById('span');
    var button = document.getElementById('button');
    var p = document.getElementById('p');
    var hl2 = document.getElementById('h12');
    var span2 = document.getElementById('span2');
    var button2 = document.getElementById('button2');
    var p2 = document.getElementById('p2');
    var hl3 = document.getElementById('h13');
    var span3 = document.getElementById('span3');
    var button3 = document.getElementById('button3');
    var p3 = document.getElementById('p3');
    
    pair_single.style.transition = 'all .5s ease-in-out'

    // part enter //////////////////////////////// 1
    one.addEventListener('mouseenter' , () => {
      // backgrond ============== background
      setTimeout(() => {
        pair_single.style.backgroundImage = 'url('+ imgs[0] +')'
        pair_single.style.backgroundPosition = 'center -150px';
      } , 500)
      // background end ========== bacground end

      // pragraph ================ pragraph
      p.style.opacity = '.1';
      p.style.left = '0%'
      // end pragraph============= pragraph end

      // span =================== span
      span.style.opacity = 1;
      span.style.top = '51%';
      // span =================== span end

      // h1 ===================== h1
      setTimeout(() => {
        hl.style.opacity = 1;
        hl.style.top = '55%';  
      }, 200);
      // h1 ===================== h1 end
      
      // button ================= button
      setTimeout(() => {
        button.style.opacity = 1;
        button.style.top = '76%';
      }, 300);
      // button ================= button end
      
      // all transition ============================= all transition
      p.style.transition = 'all .5s ease-in-out';
      hl.style.transition = 'all .5s ease-in-out';
      span.style.transition = 'all .5s ease-in-out';
      button.style.transition = 'all .5s ease-in-out';
    })
    // all transition =============================== all transition end

    // part leave ////////////////////////////////// 2
    one.addEventListener('mouseleave' , () => {
      // bacground =-============================
      pair_single.style.backgroundPosition = 'center 0px';
      // background ======================================= end

      // pragraph ===============================
      p.style.opacity = '0';
      p.style.left = '-47%'
      // pragrapg ========================================= end

      // h1 =====================================
      setTimeout(() => {
      hl.style.opacity = 0;
      hl.style.top = '58%';
    }, 200);
    // h1 ================================================= end

    // span ======================================
      span.style.opacity = 0;
      span.style.top = '53%';
    // span =============================================== end
    
    // button =====================================
      setTimeout(() => {
        button.style.opacity = 0;
        button.style.top = '78%';   
      }, 300);
      // button ============================================ end
    })

    /////////////////////////////////////////////////////////////////////////////

    // part enter //////////////////////////////// 1
    two.addEventListener('mouseenter' , () => {

      // backgrond ============== background
      setTimeout(() => {
        pair_single.style.backgroundImage = 'url('+ imgs[1] +')'
        pair_single.style.backgroundPosition = 'center -150px';
      } , 500)
      // backgrond ============== background end

      // pragraph ============== pragraph 
      p2.style.opacity = '.1';
      p2.style.left = '0%'
      // pragraph ============== pragraph end

      // span ============== span
      span2.style.opacity = 1;
      span2.style.top = '51%';
      // span ============== span end

      // h1 ============== h1
      setTimeout(() => {
        hl2.style.opacity = 1;
        hl2.style.top = '55%';  
      }, 200);
      // h1 ============== h1 end

      // button ============== button
      setTimeout(() => {
        button2.style.opacity = 1;
        button2.style.top = '76%';
      }, 300);
      // button ============== button end
      
      // transition ============================== transition
      p2.style.transition = 'all .5s ease-in-out';
      hl2.style.transition = 'all .5s ease-in-out';
      span2.style.transition = 'all .5s ease-in-out';
      button2.style.transition = 'all .5s ease-in-out';
       // transition =============================== transition end 
    })

    // part leave /////////////////////////////////////////////////// 2
    two.addEventListener('mouseleave' , () => {
      // background ========================== background
      pair_single.style.backgroundPosition = 'center 0px';
      // background =========================== background end

      // pragraph ============== pragraph
        p2.style.opacity = '0';
        p2.style.left = '-47%'
        // pragraph ============== pragraph end

      // h1 ============== h1  
      setTimeout(() => {
      hl2.style.opacity = 0;
      hl2.style.top = '58%';
    }, 200);
    // h1 ============== h1 end

    // span ============== span 
      span2.style.opacity = 0;
      span2.style.top = '53%';
      // span ============== span end
      
      // button ============== button 
      setTimeout(() => {
        button2.style.opacity = 0;
        button2.style.top = '78%';   
      }, 300);
      // button ============== button end
    })

    //////////////////////////////////////////////////////////////////////////////////////
    
    // part enter //////////////////////////////// 1
    three.addEventListener('mouseenter' , () => {
      // bacground ====================================== bacground
      setTimeout(() => {
        pair_single.style.backgroundImage = 'url('+ imgs[2] +')'
        pair_single.style.backgroundPosition = 'center -150px';
      } , 500)
      // bacground ====================================== bacground end

      // pragraph ====================================== pragraph
        p3.style.opacity = '.1';
        p3.style.left = '0%'
        // pragraph ====================================== pragraph end

        // span ====================================== span
      span3.style.opacity = 1;
      span3.style.top = '51%';
      // span ====================================== span end

      // h1 ====================================== h1
      setTimeout(() => {
        hl3.style.opacity = 1;
        hl3.style.top = '55%';  
      }, 200);
      // h1 ====================================== h1 end
      
      // button ====================================== button
      setTimeout(() => {
        button3.style.opacity = 1;
        button3.style.top = '76%';
      }, 300);
      // button ====================================== button end

      // transition ====================================== transition
      p3.style.transition = 'all .5s ease-in-out';
      hl3.style.transition = 'all .5s ease-in-out';
      span3.style.transition = 'all .5s ease-in-out';
      button3.style.transition = 'all .5s ease-in-out';
      // transition ====================================== transition end
    })

    // part leave //////////////////////////////////////////  2
    three.addEventListener('mouseleave' , () => {
      // bacground ====================================== bacground
      pair_single.style.backgroundPosition = 'center 0px';
      // bacground ====================================== bacground end

      // pragraph ====================================== pragraph
      p3.style.opacity = '0';
        p3.style.left = '-47%'
        // pragraph ====================================== pragraph end

        // h1 ====================================== h1
      setTimeout(() => {
      hl3.style.opacity = 0;
      hl3.style.top = '58%';
    }, 200);
    // h1 ====================================== h1 end

    // span ====================================== span
      span3.style.opacity = 0;
      span3.style.top = '53%';
      // span ====================================== span end
      
      // button ====================================== button
      setTimeout(() => {
        button3.style.opacity = 0;
        button3.style.top = '78%';   
      }, 300);
      // button ====================================== button end
      
    })
            
                
            
            
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
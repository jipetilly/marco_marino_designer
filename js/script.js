//SWIPER JS 

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })


  
//contact closed button
let contactLink = document.querySelector('.contactLink');
let contactForm = document.querySelector('.contact');
let closeBtn = document.querySelector('.close');

contactLink.addEventListener('click', function(){
    contactForm.classList.add('closed');
});

closeBtn.addEventListener('click', function(){
    contactForm.classList.remove('closed');
});


// SCROLL REVEAL CONTENU 
let hWindow = window.innerHeight;
console.log(hWindow)

let imgReveal = document.querySelectorAll('.reveal');
console.log(imgReveal)


window.addEventListener('scroll', function(){
    let leScroll = window.pageYOffset;

    for (let i=0; i<imgReveal.length; i++) {
        let leTopImg = imgReveal[i].getBoundingClientRect();
        console.log (leTopImg)
    
        let hImg = imgReveal[i].offsetHeight;
        console.log (hImg);
            if (leScroll > (leTopImg.y + (hImg / 5))) {
                imgReveal[i].classList.add('revealed');
            } else if (leScroll < (leTopImg.y + (hImg / 10))) {
                imgReveal[i].classList.remove('revealed');
            }
    }
})

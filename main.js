const menu = document.querySelector(".navbar__menu");
const menuLink = document.querySelector("#mobile__menu");
const navLogo = document.querySelector("#navbar__logo");

const mobileLink = () =>{
    menu.classList.toggle("active");
    menuLink.classList.toggle("is-active");
}

addEventListener("click", mobileLink);

// show active menu when scrolling 

// const highlightMenu = () =>{
//     const elem = document.querySelector(".highlight");
//     const homeMenu = document.querySelector("#home__page");
//     const aboutMenu = document.querySelector("#about__page");
//     const servicesMenu = document.querySelector("#services__page");
    
//     let scrollPos = window.scrollY

//     // adding highlight class in js 
//     if (window.innerWidth > 960 && scrollPos < 600) {
//         homeMenu.classList.add("highlight");
//         aboutMenu.classList.remove(".highlight");
//         return;
//     }
//     else if(window.innerwidth > 960 && scrollPos < 1400) {
//         aboutMenu.classList.add("highlight");
//         homeMenu.classList.remove("highlight");
//         servicesMenu.classList.remove("highlight");
//         return;
//     }
//     else if(window.innerwidth > 960 && scrollPos < 2345) {
//         servicesMenu.classList.add("highlight");
//         aboutMenu.classList.remove("highlight");
//         return;
//     }

//     if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
//         elem.classList.remove("highlight");
//     }
// }

// window.addEventListener("scroll", highlightMenu);
// window.addEventListener("click", highlightMenu);



// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home__page');
    const aboutMenu = document.querySelector('#about__page');
    const servicesMenu = document.querySelector('#services__page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      servicesMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    }
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  
  //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);
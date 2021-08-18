const closebtn = document.getElementById('Mobile-close-icon');
const menubtn = document.getElementById('Mobile-menu-icon');
const navitems = document.getElementById('nav-items');
const navlinks = document.querySelectorAll('#nav-items li');



function openmenu() {
    if (navitems.style.display != 'block') {
        navitems.style.display = 'block';
        menubtn.style.display = 'none';
        closebtn.style.display = 'block';
    } else {
        closebtn.style.display = 'none';
    }
}

function closemenu() {
  if(navitems.style.display != 'none'){
      navitems.style.display = 'none';
      closebtn.style.display = 'none';
      menubtn.style.display = 'block';
    }
}

function closemenubylink() {
    if (navitems.style.display != 'none') {
        navitems.style.display = 'none';
        closebtn.style.display = 'none';
        menubtn.style.display = 'block';
    }
}
  


menubtn.addEventListener('click', openmenu);

closebtn.addEventListener('click', closemenu);

navlinks.forEach(el => {
    el.addEventListener('click', closemenubylink);
});
// console.log(navlinks);
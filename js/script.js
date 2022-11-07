// связаться со мной
var connect_modal = document.getElementById('connect-modal');
var connect_btn = document.getElementById("connect-btn");
connect_btn.onclick = function() {
  connect_modal.style.display = "block";
}

window.onclick = function(event) {
}

// обо мне
var about_modal = document.getElementById('aboutme-modal');
var about_btn = document.getElementById('aboutme-btn');

about_btn.onclick = function() {
  about_modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == about_modal) {
    about_modal.style.display = "none";
  }
  else if (event.target == connect_modal) {
    connect_modal.style.display = "none";
  }
}


// переключение табов описания
const list_tabs = document.querySelectorAll('.skills-list-item');
const desc_tabs = document.querySelectorAll('.about-skill-paragraph');



const tabItems = Array.from(document.querySelectorAll('.skills-list-item'))
const contentItems = Array.from(document.querySelectorAll('.about-skill-list'))

const clearActiveClass = (element, className) => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className) => {
  element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {

    if (item.classList.contains('skills-list-item-active')) return

    clearActiveClass(tabItems, 'skills-list-item-active');
    clearActiveClass(contentItems, 'active-skill');


    setActiveClass(tabItems, index, 'skills-list-item-active')
    setActiveClass(contentItems, index, 'active-skill')
  })
}

tabItems.forEach(checkoutTabs)

const btnBack = document.querySelector('.back')
const btnClose = document.querySelector('.got')
const modalAlert = document.querySelector('.modal')
const gradient = document.querySelector('.modal-wrap')
const btns = document.querySelectorAll('.back, .btnleft')
const btnsLeft = document.querySelectorAll('.btnleft')
const bookmark = document.querySelector('.bookmark')
const span = document.querySelector('.bookmark span')
const popupMain = document.querySelector('.popup-main')
const BtnCloseMain = document.querySelector('.close-modal')
const Hamburger = document.querySelector('.hamburger')
const CloseHamburger = document.querySelector('.close-hamburger')
const mobileButtons = document.querySelector('.mobile-buttons')
const modalGradient = document.querySelector('.modal-gradient')
const rewardDiv = [...document.querySelectorAll('.reward')];
const checkReward = [...document.querySelectorAll('.contain')];

const bookmarkEvent = (e) =>{
    if(span.textContent === "Bookmark"){
        span.textContent = "Bookmarked";
        span.style.color = "hsl(176, 50%, 47%)"
    } else {
        span.textContent = "Bookmark"
        span.style.color = "hsl(0, 0%, 48%)"
    }
}

btns.forEach(btn =>{
    btn.addEventListener('click', event => {
        gradient.classList.toggle('active');
    })
})
btnsLeft.forEach(btn =>{
    btn.addEventListener('click', event =>{
        popupMain.style.transform = "translateX(-50%) scale(1)"
    })
})
Hamburger.addEventListener('click', event =>{
    Hamburger.style.transform = "scale(0)";
    mobileButtons.style.transform = "translateX(-50%) scale(1)";
    CloseHamburger.style.transform = "scale(1)";
    modalGradient.style.transform = "scale(1)";
})
CloseHamburger.addEventListener('click', event =>{
    Hamburger.style.transform = "scale(1)";
    mobileButtons.style.transform = "translateX(-50%) scale(0)";
    CloseHamburger.style.transform = "scale(0)";
    modalGradient.style.transform = "scale(0)";
})
btnBack.addEventListener('click', event =>{
    modalAlert.style.transform = "translate(-50%,-50%) scale(1)";
})
btnClose.addEventListener('click', event =>{
    modalAlert.style.transform = "translate(-50%,-50%) scale(0)";
    gradient.classList.toggle('active');
})
BtnCloseMain.addEventListener('click', event =>{
    popupMain.style.transform = "translateX(-50%) scale(0)"
    gradient.classList.toggle('active');
})
bookmark.addEventListener('click', bookmarkEvent)
const checking = {
    checked: "",
}


function checkSelection() {
    checking.checked = this.dataset.option
    checkReward.forEach(check => check.style.border = '');
    this.style.border =  '1px solid hsl(176, 50%, 47%)';
}

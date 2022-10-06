import './style/navBar.css'; 
import './style/MobileMenu.css'; 

import WhiteBurgerIcon from './images/hamburger_menu_white.png'; 
import BlackBurgerIcon from './images/Hamburger_icon.svg.png'; 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("TopNavbar").style.backgroundColor = "rgba(255, 255, 255, 1.0)";
        document.getElementById('LogoText').style.display = "block";
        document.getElementById('NavLi_history').style.color = "black";
        document.getElementById('NavLi_team').style.color = "black";
        document.getElementsByClassName('NavLinksAnchor')[0].style.color = "#000000"; 
        document.getElementsByClassName('NavLinksAnchor')[1].style.color = "#000000"; 
        WhiteBurger.style.display = 'none';
        BlackBurger.style.display = 'inline';
    } else {
        document.getElementById("TopNavbar").style.backgroundColor = "rgba(255, 255, 255, 0.0)";
        document.getElementById('LogoText').style.display = "none";
        document.getElementById('NavLi_history').style.color = "#ffffff";
        document.getElementById('NavLi_team').style.color = "#ffffff";
        document.getElementsByClassName('NavLinksAnchor')[0].style.color = "#ffffff"; 
        document.getElementsByClassName('NavLinksAnchor')[1].style.color = "#ffffff"; 
        BlackBurger.style.display = 'none'; 
        WhiteBurger.style.display = 'inline';
    }
} 

//const DesktopNavElem = document.createElement('ul');
//DesktopNavElem.setAttribute('id', 'NavLinksUL'); 

//const HistoryItem = document.createElement('li');
//HistoryItem.setAttribute('id', 'NavLi_history'); 
//const HistoryLink = document.createElement('a'); 
//HistoryLink.href = "#HistorySection"; 
//HistoryLink.innerHTML = '1.0 HISTORY'; 
//HistoryLink.classList.add('NavLinksAnchor')
//HistoryItem.appendChild(HistoryLink); 


//const TeamItem = document.createElement('li');
//TeamItem.setAttribute('id', 'NavLi_team'); 
//const TeamLink = document.createElement('a');
//TeamLink.ahref = "#ClimbSection"; 
//TeamLink.innerHTML = '2.0 SCHEDULE'
//TeamLink.classList.add('NavLinksAnchor')
//TeamItem.appendChild(TeamLink)

////append child to DesktopNavElem
//DesktopNavElem.appendChild(HistoryItem); 
//DesktopNavElem.appendChild(TeamItem); 

const DesktopNavElem = document.getElementById('NavLinksUL'); 

/*Mobile Elements of navbar */
const WhiteBurger = document.createElement('img'); 
WhiteBurger.setAttribute('id', 'white_burger'); 
WhiteBurger.src = WhiteBurgerIcon; 
WhiteBurger.classList.add('mobileIcon')

const BlackBurger = document.createElement('img'); 
BlackBurger.setAttribute('id', 'black_burger'); 
BlackBurger.src = BlackBurgerIcon; 
BlackBurger.classList.add('mobileIcon')
BlackBurger.style.display = 'none';

const MobileNavElem = document.createElement('div');
MobileNavElem.setAttribute('id', 'MobileNavElem');
MobileNavElem.appendChild(WhiteBurger);
MobileNavElem.appendChild(BlackBurger); 
MobileNavElem.classList.add('hidden'); 

var NavLinkElem = document.getElementById('NavLinks')
//NavLinkElem.appendChild(DesktopNavElem); 
NavLinkElem.appendChild(MobileNavElem); 

const resizeEvent = event => {
    //mobile version
    if (window.innerWidth <= 746) {
        DesktopNavElem.classList.remove('displayDesktop');
        DesktopNavElem.classList.add('hidden');
        MobileNavElem.classList.remove('hidden');
        MobileNavElem.classList.add('displayed');
    }
    //desktop version
    else {
        MobileNavElem.classList.remove('displayed');
        MobileNavElem.classList.add('hidden');
        DesktopNavElem.classList.remove('hidden');
        DesktopNavElem.classList.add('displayDesktop');
    }
}

const scrollEvent = event => {

} 
resizeEvent();
document.addEventListener('resize', resizeEvent)

window.onresize = event => {
    //mobile version
    if (window.innerWidth < 540) {
        DesktopNavElem.classList.remove('displayDesktop');
        DesktopNavElem.classList.add('hidden');
        MobileNavElem.classList.remove('hidden');
        MobileNavElem.classList.add('displayed');
    }
    //desktop version
    else {
        MobileNavElem.classList.remove('displayed');
        MobileNavElem.classList.add('hidden');
        DesktopNavElem.classList.remove('hidden');
        DesktopNavElem.classList.add('displayDesktop');
    }
}

const makeElementActive = (active, inactive) => {
    active.style.textDecoration = 'underline !important';
    inactive.style.textDecoration = 'none';
}

const HistoryLink = document.getElementById('NavLi_history');
const TeamLink = document.getElementById('NavLi_team')

HistoryLink.onclick = makeElementActive(HistoryLink, TeamLink)
TeamLink.onclick = makeElementActive(TeamLink, HistoryLink)


//HistoryItem.onclick = () => makeElementActive(HistoryItem, TeamItem)
//TeamItem.onclick = () =>makeElementActive(TeamItem, HistoryItem)

const MobileMenuElem = document.getElementById("MobileMenu"); 
var isMenuOpened = false; 

const toggleMenu = () => {
    //Open the menu
    if (!MobileMenuElem.classList.contains("OpenMenu")) {
        MobileMenuElem.classList.remove('CloseMenu')
        MobileMenuElem.classList.add('OpenMenu')
        isMenuOpened = true; 
    }
    //Close the menu
    else if (!MobileMenuElem.classList.contains("CloseMenu")) {
        MobileMenuElem.classList.remove('OpenMenu')
        MobileMenuElem.classList.add('CloseMenu')
        isMenuOpened = false; 
    }
}

const closeMenu = () => {
    if (MobileMenuElem.classList.contains("OpenMenu")) {
        MobileMenuElem.classList.remove('OpenMenu')
        MobileMenuElem.classList.add('CloseMenu')
    }
}

const MobileHistoryLinkElem = document.querySelector('.MobileHistoryLink')
const MobileTeamLinkElem = document.querySelector('.MobileTeamLink'); 
const CloseMenuLliElem = document.querySelector('#CloseMenuLli');

MobileHistoryLinkElem.onclick = () => closeMenu(); 
MobileTeamLinkElem.onclick = () => closeMenu();
CloseMenuLliElem.onclick = () => closeMenu();

WhiteBurger.onclick = () => toggleMenu(); 
BlackBurger.onclick = () => toggleMenu(); 

const checkIfClickedOutside = event => {
    if (isMenuOpened
        && !MobileMenuElem.contains(event.target)
        && !MobileNavElem.contains(event.target)) {
        console.log('fired')
        closeMenu(); 
    }
}

document.addEventListener('click', checkIfClickedOutside);
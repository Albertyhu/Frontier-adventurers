window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("TopNavbar").style.backgroundColor = "rgba(255, 255, 255, 1.0)";
        document.getElementById('LogoText').style.display = "block";
        document.getElementById('NavLi_history').style.color = "black";
        document.getElementById('NavLi_team').style.color = "black";
        document.getElementsByClassName('NavLinksAnchor')[0].style.color = "#000000"; 
        document.getElementsByClassName('NavLinksAnchor')[1].style.color = "#000000"; 
    } else {
        document.getElementById("TopNavbar").style.backgroundColor = "rgba(255, 255, 255, 0.0)";
        document.getElementById('LogoText').style.display = "none";
        document.getElementById('NavLi_history').style.color = "#ffffff";
        document.getElementById('NavLi_team').style.color = "#ffffff";
        document.getElementsByClassName('NavLinksAnchor')[0].style.color = "#ffffff"; 
        document.getElementsByClassName('NavLinksAnchor')[1].style.color = "#ffffff"; 
    }
} 

const historyLink = document.getElementById('NavLi_history'); 
const teamLink = document.getElementById('NavLi_team')

const makeElementActive = (active, inactive) => {
    active.style.textDecoration = 'underline';
    inactive.style.textDecoration = 'none'; 
}

historyLink.onclick = makeElementActive(historyLink, teamLink)
teamLink.onclick = makeElementActive(teamLink, historyLink)

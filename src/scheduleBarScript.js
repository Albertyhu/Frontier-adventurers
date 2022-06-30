
const MobileMenu = document.getElementById('MobileMenu');

const MountainTab1 = document.getElementById('ScheduleMountain1')
const MountainTab2 = document.getElementById('ScheduleMountain2')
const ScheduleAreaMountain1 = document.getElementById('ScheduleAreaMountain1')
const ScheduleAreaMountain2 = document.getElementById('ScheduleAreaMountain2')

const MobileScheduleMountain1 = document.getElementById('MobileScheduleMountain1')
const MobileScheduleMountain2 = document.getElementById('MobileScheduleMountain2')


const displayMountain1 = () => {
    ScheduleAreaMountain1.style.display = "grid";
    ScheduleAreaMountain2.style.display = "none";
}

const displayMountain2 = () => {
    ScheduleAreaMountain1.style.display = "none";
    ScheduleAreaMountain2.style.display = "grid";
}

const MakeElementActive = (element, inactiveElement) => {
    element.style.backgroundColor = "#b0b4be";
    element.style.color = "#414f6b";
    element.style.textDecoration = "underline";

    inactiveElement.style.backgroundColor = "#414f6b";
    inactiveElement.style.color = "#b0b4be";
    inactiveElement.style.textDecoration = "none";
}

const MakeMobileElementActive = (element) => {
    element.style.backgroundColor = "#b0b4be";
    element.style.color = "#414f6b";
    element.style.textDecoration = "underline";

}

const MakeMobileElementInactive = (element) => {
    element.style.backgroundColor = "#414f6b";
    element.style.color = "#b0b4be";
    element.style.textDecoration = "none";


}

MountainTab1.onclick = function () {
    MakeElementActive(MountainTab1, MountainTab2);
    MakeElementActive(MobileScheduleMountain1, MobileScheduleMountain2);
    displayMountain1();
}

MountainTab2.onclick = function () {
    MakeElementActive(MountainTab2, MountainTab1);
    MakeElementActive(MobileScheduleMountain2, MobileScheduleMountain1);
    displayMountain2();
}

var MobileMountain1Display = false; 
var MobileMountain2Display = false;
const MobileToggle = (display, element) => {
    //close accordion
    if (display) {
        MakeMobileElementInactive(element)
        return false; 
    }
    //open accordion
    else {
        MakeMobileElementActive(element)
        return true; 
    }
}

const toggleMobileMountain1 = (display) => {
    if (display) {
        ScheduleAreaMountain1.style.display = "none";
    }
    else
        ScheduleAreaMountain1.style.display = "flex";
}

const toggleMobileMountain2 = (display) => {
    if (display) {
        ScheduleAreaMountain2.style.display = "none";
    }
    else
        ScheduleAreaMountain2.style.display = "flex";
}

MobileScheduleMountain1.onclick = function () {
    MakeElementActive(MountainTab1, MountainTab2);
    toggleMobileMountain1(MobileMountain1Display);
    MobileMountain1Display = MobileToggle(MobileMountain1Display, MobileScheduleMountain1);

}

MobileScheduleMountain2.onclick = function () {
    MakeElementActive(MountainTab2, MountainTab1);
    toggleMobileMountain2(MobileMountain2Display);
    MobileMountain2Display = MobileToggle(MobileMountain2Display, MobileScheduleMountain2);

}

const BurgerIcon = document.getElementById('BurgerIcon');


var displayMenu = false;
const toggleMobileMenu = () => {
    //close Mobile Menu
    if (displayMenu) {
        MobileMenu.style.display = "none";
        displayMenu = false;
    }
    //open Mobile Menu
    else {
        MobileMenu.style.display = "grid";
        displayMenu = true;
    }
    console.log(displayMenu)
}



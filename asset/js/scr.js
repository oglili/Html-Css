const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('hide');

});

var cap = ["Programmer", "CELTA English Teacher", "Web & Graphic Designer", "Full Stack Developer"];
var x = 0;
setInterval(displayCap, 1000);
function displayCap() {
    document.getElementById("know").innerHTML = cap[x];
    x++;
    if (x >= cap.length){
        x = 0;
    }     
}
setInterval(displayCapp, 2000);
function displayCapp() {
    document.getElementById("know1").innerHTML = cap[x];
    x++;
    if (x >= cap.length){
        x = 0;
    }     
}
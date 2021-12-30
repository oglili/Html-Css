const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('hide');

});

function sendMail(Params) {
    var temp = {from_name: document.getElementById('name').value};
    var tempPars = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('msg').value, 
    };
    emailjs.send('service_hvr01n6','template_05adexc',tempPars)
    .then(function(res) {
        console.log('success', res.status);
        alert('Thanks, I ll get back to you!');
        clear();
    })
}

function clear(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('msg').value = '';
     
}
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

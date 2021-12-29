const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('hide');

});

/*function sendMail(Params) {
    var tempPars = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('msg').value, 
    };
    emailjs.send('service_hvr01n6','template_05adexc',tempPars)
    .then(function(res) {
        console.log('success', res.status);
    })
}*/
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
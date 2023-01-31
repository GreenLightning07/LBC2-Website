let menu = document.querySelector('.menu');
let open = false;
menu.addEventListener('click', navClicked);

function navClicked() {
    if(open){
        document.querySelector('.overlay').style.width='0';
        menu.style.rotate='0deg';
        open = false;
    } else {
        document.querySelector('.overlay').style.width='100%';
        menu.style.rotate='90deg';
        open = true;
    }
}
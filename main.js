var nav = document.getElementsByClassName('nav-bar')[0];
console.log(document.scrollTop);
console.log(window.innerWidth);
if (document.scrollTop > 800 && window.innerWidth > 470) {
    nav.classList.add('shrink');
}

let menuBtn = document.getElementsByClassName("menu-btn")[0];
menuBtn.addEventListener('click', showMenuItems);
function showMenuItems(ev) {
    let menuItems = document.getElementsByClassName('menu-items')[0];
    menuItems.classList.toggle('show');
};

let cards = document.getElementsByClassName('cards-list')[0];
cards.addEventListener('click', showModal)

let modalContainer = document.getElementById("card-modal");
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
        modalContainer.style.display = 'none';
    }
});

function showModal(e) {
    if (e.target && (e.target.nodeName === 'LI' || e.target.nodeName === 'IMG')) {
        modalContainer.style.display = 'block';
        let modalImageContainer = document.getElementById("card-modal-image");
        modalImageContainer.innerHTML = '';
        let modalImage = document.createElement("img");
        if (e.target.nodeName === 'LI' ) {
            let image = e.target.innerHTML.split("=")[1].trim();
            modalImage.setAttribute('src', image.slice(1, -2));
        } else {
            modalImage.setAttribute('src', e.target.src);
        }
        modalImageContainer.appendChild(modalImage);
    }
};

let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener('click', closeModal);
let closeIcon = document.getElementById('close-icon');
closeIcon.addEventListener('click', closeModal);
function closeModal(e) {
    modalContainer.style.display = 'none';
}

let nameInput = document.getElementsByClassName('contact-form')[0];
let labels = document.getElementsByTagName('label');
nameInput.addEventListener("click", function(e) {
    if (e.target.getAttribute("id")) {
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor === e.target.getAttribute("id")) {
                labels[i].style.visibility = "visible"; 
            }
        }
    }
    
});
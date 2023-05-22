let menu = document.querySelector('#menu__icon')
let nav__list = document.querySelector('.nav__list')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav__list.classList.toggle('open');
}

// Pop up close and Open

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}










let popup2 = document.getElementById("popup2");

function openPopup2(){
    popup2.classList.add("open-popup");
}

function closePopup2(){
    popup2.classList.remove("open-popup");
}





let popup3 = document.getElementById("popup3");

function openPopup3(){
    popup3.classList.add("open-popup");
}

function closePopup3(){
    popup3.classList.remove("open-popup");
}





let popup4 = document.getElementById("popup4");

function openPopup4(){
    popup4.classList.add("open-popup");
}

function closePopup4(){
    popup4.classList.remove("open-popup");
}





let popup5 = document.getElementById("popup5");

function openPopup5(){
    popup5.classList.add("open-popup");
}

function closePopup5(){
    popup5.classList.remove("open-popup");
}







let popup6 = document.getElementById("popup6");

function openPopup6(){
    popup6.classList.add("open-popup");
}

function closePopup6(){
    popup6.classList.remove("open-popup");

}





let popup7 = document.getElementById("popup7");

function openPopup7(){
    popup7.classList.add("open-popup");
}

function closePopup7(){
    popup7.classList.remove("open-popup");

}



let popup8 = document.getElementById("popup8");

function openPopup8(){
    popup8.classList.add("open-popup");
}

function closePopup8(){
    popup8.classList.remove("open-popup");

}



let popup9 = document.getElementById("popup9");

function openPopup9(){
    popup9.classList.add("open-popup");
}

function closePopup9(){
    popup9.classList.remove("open-popup");

}


















function sendEmail(){

    Email.send({
        secureToken:"a0c46de6-3223-4932-9b32-b21710a9270b",
        To : 'abasskoyang12345@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "First Name: " + document.getElementById('firstname').value
              + " <br> Last Name: " + document.getElementById('lastname').value
              + " <br> Email: " + document.getElementById('email').value
              + " <br> Additional Info: " + document.getElementById('message').value

    }).then(
      message => alert(" Message Sent Succesfully")
    );
}
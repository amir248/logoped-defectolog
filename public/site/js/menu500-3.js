if(window.innerWidth<=500){
    document.querySelector("nav").addEventListener('click',()=>{
        openMenu();
    });
}
function openMenu(){
    let scriptMenu=document.createElement('div');
    scriptMenu.classList.add('openMenu');
    scriptMenu.setAttribute('id','menuOpen');
    scriptMenu.innerHTML=`<div><a href="tel:+79893619813">8-9893619813</a><a href="https://wa.clck.bar/+79893619813">WhatsApp</a><a href="#sigCommentsBlock">Отзовы</a><a href="https://fonolog.ru/Public-Offer">Публичная оферта</a><a href="https://fonolog.ru/Privacy-Policy">Политика конфиден<wbr>циальности</a></div>`;
    document.querySelector('body').append(scriptMenu);
    setTimeout(()=>{
        for(let j=0;j<document.querySelectorAll('.openMenu > div > a').length; j++){
            document.querySelectorAll('.openMenu > div > a')[j].style.fontSize=`30px`;
        }
        document.querySelector('.openMenu').style.width=`100%`;
        document.querySelector('.openMenu').style.opacity=`1`;
    },100);
    document.getElementById('menuOpen').addEventListener('click',()=>{
        setTimeout(()=>{
        document.querySelector('#menuOpen').remove();
    },400);
        document.querySelector('.openMenu').style.width="0";
        for(let j=0;j<document.querySelectorAll('.openMenu > div > a').length; j++){
            document.querySelectorAll('.openMenu > div > a')[j].style.fontSize=`0`;
        }
    });
};//openMenu
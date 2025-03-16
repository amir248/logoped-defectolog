if(window.innerWidth<=500){
    document.querySelector("nav").addEventListener('click',()=>{
        openMenu();

    });
}
function openMenu(){
    let scriptMenu=document.createElement('div');
    scriptMenu.classList.add('openMenu');
    scriptMenu.setAttribute('id','menuOpen');
    scriptMenu.innerHTML=`<a href="/">Главная</a><a href="#services">Услуги</a><a href="#sigCommentsBlock">Отзовы</a><a href="#about">О центре</a><a href="#contact">Контакты</a><a href="Public-Offer">Публичная оферта</a><a href="Privacy-Policy">Политика конфиден<wbr>циальности</a>`;
    document.querySelector('body').append(scriptMenu);
    setTimeout(()=>{
        for(let j=0;j<document.querySelectorAll('.openMenu > a').length; j++){
            document.querySelectorAll('.openMenu > a')[j].style.fontSize=`20px`;
        }
        document.querySelector('.openMenu').style.width=`100%`;
        document.querySelector('.openMenu').style.opacity=`1`;
 
    },100);
    document.getElementById('menuOpen').addEventListener('click',()=>{
        setTimeout(()=>{
        document.querySelector('#menuOpen').remove();
    },400);
        document.querySelector('.openMenu').style.width="0";
        for(let j=0;j<document.querySelectorAll('.openMenu > a').length; j++){
            document.querySelectorAll('.openMenu > a')[j].style.fontSize=`0`;
        }
    });
};//openMenu
if(window.innerWidth<=500){
    document.querySelector("nav").addEventListener('click',()=>{
        openMenu();

    });
}
function openMenu(){
    let scriptMenu=document.createElement('div');
    scriptMenu.classList.add('openMenu');
    scriptMenu.setAttribute('id','menuOpen');
    scriptMenu.innerHTML=`<a href="https://fonolog.ru/cure-stuttering">Главная</a><a href="https://fonolog.ru/cure-stuttering#services">Услуги</a><a href="https://fonolog.ru/cure-stuttering#sigCommentsBlock">Отзовы</a><a href="https://fonolog.ru/cure-stuttering#about">О центре</a><a href="https://fonolog.ru/cure-stuttering#contact">Контакты</a><a href="https://fonolog.ru/Public-Offer">Публичная оферта</a><a href="https://fonolog.ru/Privacy-Policy">Политика конфиден<wbr>циальности</a>`;
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
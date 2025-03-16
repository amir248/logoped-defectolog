if(window.innerWidth<=500){
    document.querySelector("nav").addEventListener('click',()=>{
        openMenu();

    });
}
function openMenu(){
    let scriptMenu=document.createElement('div');
    scriptMenu.classList.add('openMenu');
    scriptMenu.setAttribute('id','menuOpen');
    scriptMenu.innerHTML=`<a href=".">Главная</a><a href="#services">Услуги</a><a href="#sigCommentsBlock">Отзовы</a><a href="#about">О центре</a><a href="#contact">Контакты</a>`;
    document.querySelector('body').append(scriptMenu);
    setTimeout(()=>{
        document.querySelector('.openMenu').style.width="100%";
    },100);
    document.getElementById('menuOpen').addEventListener('click',()=>{
        setTimeout(()=>{
        document.querySelector('#menuOpen').remove();
    },400);
        document.querySelector('.openMenu').style.width="0";
    });
};//openMenu
function menuOk(){
    return new Promise((resolve)=>{
        function createMenu(){
            const menu=document.createElement('script');
            menu.src="public/site/js/menu.js";
            document.querySelector('body').append(menu);
        }
    resolve(createMenu());
    });
};
function videos(){
    return new Promise((resolve)=>{
        function createMovie(){
            const movie=document.createElement('script');
            movie.src="public/site/js/video.js";
            document.querySelector('body').append(movie);
        };
        resolve(createMovie());
    });
}
function onClick(){
    return new Promise((resolve)=>{
        function createOnClick(){
            const clicken=document.createElement('script');
            clicken.src="public/site/js/onClick.js";
            document.querySelector('body').append(clicken);
        }
        resolve(createOnClick());
    })
}
function includeHTML(){
    return new Promise((resolve)=>{
        function oKpromis(){
            const box=document.createElement('script');
            box.src='public/site/js/includeHtml.js';
            document.querySelector('body').append(box);
        }
        resolve(oKpromis());
    });
}
// window.addEventListener("DOMContentLoaded",oKmainFunction());
async function oKmainFunction(){
    await includeHTML();
    await menuOk();
    await videos();
    await onClick();
}
oKmainFunction();
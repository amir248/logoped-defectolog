// document.querySelector('#language').checked=true;
function chooseLanguage(){
  if(document.querySelector('#check').checked==false){

    document.querySelector('body > main:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > a:nth-child(1) > li:nth-child(1)').innerHTML=`Портфолио`;
    document.querySelector('body > main:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > a:nth-child(2) > li:nth-child(1)').innerHTML=`Работа`;
    document.querySelector('body > main:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > a:nth-child(3) > li:nth-child(1)').innerHTML=`Контакты`;

    for(let j=0;j<document.querySelectorAll('#eng').length;j++){
      // console.log(j);
      document.querySelectorAll('#eng')[j].style.cssText=`display:none;`
      document.querySelectorAll('#rus')[j].style.cssText=`display:block;`
    }
    document.querySelector('head > title').innerHTML=`Логопед дефектолог`;
    document.querySelector('head > meta[name="description"]').setAttribute('content','Коррекция, устранение недостатков речи, прогресс стимуляции. Детям, школьникам как с изолированными речевыми нарушениями, имеющими различные дополнительные трудности в речевом развитии.');
  }else{
    document.querySelector('body > main:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > a:nth-child(1) > li:nth-child(1)').innerHTML=`Portfolio`;
    document.querySelector('body > main:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > a:nth-child(2) > li:nth-child(1)').innerHTML=`Work`;
    document.querySelector('body > main:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > a:nth-child(3) > li:nth-child(1)').innerHTML=`Contact`;

    for(let i=0;i<document.querySelectorAll('#rus').length;i++){
      document.querySelectorAll('#eng')[i].style.cssText=`display:block;`
      document.querySelectorAll('#rus')[i].style.cssText=`display:none;`
    }
    document.querySelector('head > title').innerHTML=`Speech therapist defectologist`;
      document.querySelector('head > meta[name="description"]').setAttribute('content','Correction, elimination of speech deficiencies, progress of stimulation. Children and schoolchildren with isolated speech disorders who have various additional difficulties in speech development.');
  }
}//chooseLanguage();
(()=>{
  if(location.search=='?eng'){
    document.querySelector('#check').checked='true';
    // console.log('oK');
    chooseLanguage();
  }else{
    chooseLanguage();

    console.log('non eng');
  }
})();
let clickLan=+0;
function chooseLanguageTwo(){
  console.log(clickLan);
  clickLan++;
  if(window.location.search==''){
    window.location.search='?eng';
    chooseLanguage();
  }else if(window.location.search=='?eng'){
    clickLan=0;
    chooseLanguage();
    window.location.href='/';
  }
};
// chooseLanguageTwo();
// document.querySelector('#language').addEventListener('click',()=>{
//   chooseLanguage();
//   console.log('click');
// });
document.querySelector('#check').addEventListener('click',()=>{
chooseLanguage();
});
//#menu > div:nth-child(2)

// language();

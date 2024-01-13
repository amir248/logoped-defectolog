// document.querySelector('#language').checked=true;
function chooseLanguage(){
  if(document.querySelector('#language').checked==false){
    for(let j=0;j<=document.querySelectorAll('#rus').length;j++){
      console.log(j);
      document.querySelectorAll('#eng')[j].style.cssText=`display:none;`
      document.querySelectorAll('#rus')[j].style.cssText=`display:block;`
    }
  }else{
    for(let j=0;j<=document.querySelectorAll('#rus').length;j++){
      console.log(j);
      document.querySelectorAll('#eng')[j].style.cssText=`display:block;`
      document.querySelectorAll('#rus')[j].style.cssText=`display:none;`
    }
  }
}//chooseLanguage();
document.querySelector('#language').addEventListener('click',()=>{
  chooseLanguage();
  console.log('click');
});

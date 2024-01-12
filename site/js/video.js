// let width=window.innerWidth;
// let widthWindows;
// console.log(width);
// if(width=<570){
//   console.log('first'+width);
//   widthWindows=window.innerWidth;
// }else{
//   widthWindows=750;
// }
// document.querySelector('iframe').width=widthWindows;

// let widthDis;// variable changing when loading
// function detectBrowser() {
//   const userAgent = navigator.userAgent.toLowerCase();
//   if (userAgent.indexOf('firefox') > -1) {
//     return widthDis=innerWidth-3;// margin-left_and_right 20px;
//     // return 'Firefox';
//   } else if (userAgent.indexOf('chrome') > -1) {
//     return widthDis=innerWidth-15;// margin-left_and_right 20px;
//     // return 'Chrome';
//   } else if (userAgent.indexOf('safari') > -1) {
//     return widthDis=innerWidth;// margin-left_and_right 20px;
//     // return 'Safari';
//   } else if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1) {
//     return widthDis=innerWidth;// margin-left_and_right 20px;
//     // return 'Opera';
//   } else if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1) {
//     return widthDis=innerWidth;// margin-left_and_right 20px;
//     // return 'Internet Explorer';
//   } else {
//     return widthDis=innerWidth;// margin-left_and_right 20px;
//     // return 'Unknown';
//   }
// }
// if(innerWidth<900){
//   detectBrowser();
//   widthDis;
// }else{
//   detectBrowser();
// 	widthDis=900;
// }
// document.querySelector('iframe').width=widthDis;
const count={};
let gets
function choseVideo(gets){
  switch(gets){
    case 1:
      document.querySelector('.display > span:nth-child(1)').style.cssText=`background: black;`;
      document.querySelector('.display > span:nth-child(2)').style.cssText=`background: grey;`;
      document.querySelector('.display > span:nth-child(3)').style.cssText=`background: grey;`;

      document.querySelector('.video > iframe:nth-child(2)').style.cssText=`display:block`;
      document.querySelector('.video > div:nth-child(3)').style.cssText=`display:none`;
      document.querySelector('.video > div:nth-child(4)').style.cssText=`display:none`;
      break;
    case 2:
    document.querySelector('.display > span:nth-child(1)').style.cssText=`background: grey;`;
      document.querySelector('.display > span:nth-child(2)').style.cssText=`background: black;`;
      document.querySelector('.display > span:nth-child(3)').style.cssText=`background: grey;`;

      document.querySelector('.video > iframe:nth-child(2)').style.cssText=`display:none`;
      document.querySelector('.video > div:nth-child(3)').style.cssText=`display:block`;
      document.querySelector('.video > div:nth-child(4)').style.cssText=`display:none`;
      break;
    case 3:
    document.querySelector('.display > span:nth-child(1)').style.cssText=`background: grey;`;
    document.querySelector('.display > span:nth-child(2)').style.cssText=`background: grey;`;
    document.querySelector('.display > span:nth-child(3)').style.cssText=`background: black;`;

    document.querySelector('.video > iframe:nth-child(2)').style.cssText=`display:none`;
    document.querySelector('.video > div:nth-child(3)').style.cssText=`display:none`;
    document.querySelector('.video > div:nth-child(4)').style.cssText=`display:block`;
    break;
  }
}
count.click=1;
document.querySelector('.video > span:nth-child(1)').addEventListener('click',()=>{
  count.click--;
  if(count.click<=0){
    count.click=3;
  }
  console.log(count.click);
  choseVideo(count.click);
});
document.querySelector('.video > span:nth-child(5)').addEventListener('click',()=>{
  count.click++;
  if(count.click>=4){
    count.click=1;
  }
  choseVideo(count.click);
});
document.querySelector('.display > span:nth-child(1)').addEventListener('click',()=>{
  count.click=1;
  choseVideo(count.click);
});
document.querySelector('.display > span:nth-child(2)').addEventListener('click',()=>{
  count.click=2;
  choseVideo(count.click);
});
document.querySelector('.display > span:nth-child(3)').addEventListener('click',()=>{
  count.click=3;
  choseVideo(count.click);
});

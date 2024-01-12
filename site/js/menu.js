const stateBox={};
stateBox.countClick=+0;
document.querySelector('#menu').addEventListener('click',()=>{
  stateBox.countClick++;
  // console.log('menu');
  console.log(stateBox.countClick);
  if(stateBox.countClick==1){
    document.querySelector('.lineOne').style.cssText=`rotate:40deg;top:23px;transition: all 1s ease-out;`;
    document.querySelector('.lineTwo').style.cssText=`display:none;transition: all 1s ease-out;`;
    document.querySelector('.lineThree').style.cssText=`rotate:-40deg;top:27px;transition: all 1s ease-out;`;

    const newBox=document.createElement('div');
    document.querySelector('#menu').append(newBox);
    newBox.style.cssText=`
    display:flex;
    position:relative;
    height:0;
    width:100%;
    background:rgba(77,77,77,0.7);
    transition: all 3s ease-out;
    `;
    newBox.innerHTML=`<a href="#portfolio"><h3>Портфолио</h3></a><a href="#work"><h3> Работа</h3></a><a href="#contacts"><h3>Контакты</h3></a>`;
    setTimeout(()=>{
      // console.log('oK');
      document.querySelector('#menu > div').style.cssText=`
      transition: all 1s ease-out;
        height:100vh;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:column;
        position:relative;
        width:100%;
        background:rgba(77,77,77,0.7);
      `;
    },100);
  }else if(stateBox.countClick==2){
    document.querySelector('.lineOne').style.cssText=`
    display: block;
    background: white;
    width: 37px;
    height: 4px;
    position: absolute;
    top: 10px;
    right: 25px;
    transition: all 1s ease-out;`;
    document.querySelector('.lineTwo').style.cssText=`
    display: block;
    background: white;
    width: 37px;
    height: 4px;
    position: absolute;
    top: calc(10px + 1.5%);
    right: 25px;
    transition: all 1s ease-out;`;
    document.querySelector('.lineThree').style.cssText=`
    display: block;
    background: white;
    width: 37px;
    height: 4px;
    position: absolute;
    top: calc(10px + 3%);
    right: 25px;
    rotate:-0deg;
    transition: all 1s ease-out;`;
    stateBox.countClick=0;
    console.log('oK3');
    document.querySelector('#menu > div').style.cssText=`
    height:0;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    position:relative;
    width:100%;
    background:rgba(0,0,,0.1);
    transition: all 1s ease-out;
    `;
    setTimeout(()=>{
      document.querySelector('#menu > div').remove();
    },700);
  }else{
    console.log('-\_[^-^]_/-');
  }
});

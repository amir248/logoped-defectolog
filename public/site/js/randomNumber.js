function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let number=getRandomInt(3);
// console.log(getRandomInt(3));
// console.log(number);
// Expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// Expected output: 0

// console.log(Math.random());
// Expected output: a number from 0 to <1

if(number==0||number==1){
    document.querySelector("body > main:nth-child(2) > picture:nth-child(2) > img:nth-child(1)").src="photo/19.06.2025/one.jpeg";
}else if(number ==2||number==3){
    document.querySelector("body > main:nth-child(2) > picture:nth-child(2) > img:nth-child(1)").src="photo/19.06.2025/two.jpeg";
}
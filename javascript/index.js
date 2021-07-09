
var element1 = document.querySelector(".button1");
element1.addEventListener("click", myFun);

function myFun()
{
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1 > randomNumber2){
    document.querySelector(".result1").innerHTML="Winner";
    document.querySelector(".result2").innerHTML="Sorry";
  }else if(randomNumber1 < randomNumber2){
    document.querySelector(".result1").innerHTML="Sorry";
    document.querySelector(".result2").innerHTML="Winner";
  }else{
    document.querySelector(".result1").innerHTML="Draw";
    document.querySelector(".result2").innerHTML="Draw";
  }

}

// let chan=document.getElementById("change")

// function fun1(){
//    chan.innerHTML="I am changed";
//    chan.style.color="red";

// }

// function fun2(){
//     document.getElementById("newPara").innerHTML +="mOUSE hover<br> "
// }

let z=true;
let x=0;
let ran=Math.floor(Math.random()*10)
function play(){
  let uinput=document.getElementById("num").value;

  if(uinput === ""){
    alert("Enter a number")
  }
  else{
    uinput=parseInt(uinput)
    if(isNaN(uinput)){
      alert("enter valid number")
    }
    else{
      if(uinput == ran){
        x++;
        z=false;
      }
      else if(uinput>ran){
        //alert("Choose smaller number");
        document.getElementById("chan").innerHTML +="Choose smaller<br>"
        x++;
      }
      else{
       //  alert("Choose bigger number");
        document.getElementById("chan").innerHTML +="Choose Bigger <br>"
        x++;
      }
      if(z){
        document.getElementById("num").value=" ";
      }
      else{
        //alert("Your Scaner "+x)
        document.getElementById("win").innerHTML+= "Your Score is "+ x
      }
    }
  }
}
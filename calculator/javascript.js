let total=0;
let num2="";
let operator=''
function appe(num){
    num2=num2+num;
    document.getElementById("ans").value=num2;  
}

function cal(fu){
    if(num2!=""){
    total=operate(total,parseInt(num2),operator);
    console.log(total)
    operator=fu;
    document.getElementById("ans").value="";
    num2="";
}
    
}

function cle(){
    document.getElementById("ans").value="";
    total=0;
    num2="";
    operator='';
}
function cl(){
    if(num2!==""){
    cal(operator);
    document.getElementById("ans").value=total;}
}
function operate(total,num2,operator){
    switch(operator){
        case '+':
          return total+=num2;
       case '-':
           return total-=num2;
       case '/':
        if(num2!=0){
          return total/=num2;}
          else{
            alert('cannot divide by zero');
            cle();
            return 0;
          }
       case 'x':
           return total*=num2;
        default :
        return num2;

   }
}
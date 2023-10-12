
function pop(){    
    
    document.getElementById("card").style.filter="blur(1px)";
    document.getElementById("pop").style.display="block";
    document.getElementById("d").style.boxShadow="5px 5px 10px rgba(0, 0, 0, 0.1),-5px -5px 10px rgba(255, 0, 0, 0.1)";

    let uname=document.forms['myform']['name'].value;
    document.getElementById("pname").innerHTML=uname;

    uname=document.forms['myform']['email'].value;
    document.getElementById("pemail").innerHTML=uname;

    uname=document.forms['myform']['first_time'].value;
    document.getElementById("pfi").innerHTML=uname;

    uname=document.forms['myform']['Suggest'].value;
    document.getElementById("psug").innerHTML=uname;

    uname=document.forms['myform']['Satisfied'].value;
    document.getElementById("psat").innerHTML=uname;

    uname=document.forms['myform']['suggestions'].value;
    document.getElementById("psugges").innerHTML=uname;

    return false;    
};
function clos(){
    document.getElementById("pop").style.display="none";
    document.getElementById("card").style.filter="none";
    document.forms['myform'].reset();


};

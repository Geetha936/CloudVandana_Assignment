let sen="This is good day!";
let txt="";
sen=sen.split(" ");
for(let i=0 ;i<sen.length;i++){
    let str="";
    let key=sen[i];
    for(let ke=0;ke<key.length;ke++){
        str= key[ke] +str ;
    }
    str+=" "
    txt += str;
}
console.log(txt);
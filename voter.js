function test(){
    var naam=document.myForm.username.value;
    var a=document.myForm.age.value;
    if(a>18)
    document.write("You can vote "+naam);
    else
    document.write("sorry! You can't vote "+naam);
    }
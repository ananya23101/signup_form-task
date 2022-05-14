
var password = document.querySelector('.password');
var passVisible = document.querySelector('.icon');
var pasHidden = document.querySelector('.iconhidden');
var uname = document.getElementById('name');
var pa = document.querySelector('.pass');
password.addEventListener('keyup', function(){
    var pw = password.value;
    if(this.value === "")
    {
        document.querySelector('.showMessage1').style.display = "flex";
        document.querySelector('.alertbox1').style.visibility="hidden";
    }
    else{
     document.querySelector('.showMessage1').style.display = "none";
     document.querySelector('.alertbox1').style.visibility="hidden";
    }
    if(pa.value != "")
    {
    if(password.value===pa.value)
    {
        document.querySelector('.showMessage3').style.display = "flex";
        document.querySelector('.showMessage2').style.display = "none";
    }
    else
    {
        document.querySelector('.showMessage2').style.display = "flex";
        document.querySelector('.showMessage3').style.display = "none";
    }
    if(pw.length>=8)
    {
        document.querySelector('.alertbox2').style.visibility="hidden";
    }
}
})

var uname = document.getElementById('name');
uname.addEventListener('keyup', function(){
   if(this.value === "")
   {
       document.querySelector('.showmessage').style.display = "flex";
       document.querySelector('.alertbox').style.visibility="hidden";
   }
   else{
    document.querySelector('.showmessage').style.display = "none";
    document.querySelector('.alertbox').style.visibility="hidden";
   }
})

passVisible.addEventListener('click', ()=>{
     if(password.type === "password")
     {
         password.type = "text";
         passVisible.style.visibility = "hidden";
         pasHidden.style.visibility = "visible";
         pa.type = "text";
     }
})
pasHidden.addEventListener('click', ()=>{
    if(password.type === "text")
    {
        password.type = "password";
        passVisible.style.visibility = "visible";
        pasHidden.style.visibility = "hidden";
        pa.type = "password";
    }
})
pa.addEventListener('keyup', ()=>{
    if(password.value===pa.value)
    {
        document.querySelector('.showMessage3').style.display = "flex";
        document.querySelector('.showMessage2').style.display = "none";
    }
    else
    {
        document.querySelector('.showMessage2').style.display = "flex";
        document.querySelector('.showMessage3').style.display = "none";
    }
    if(pa.value === "")
    {
        document.querySelector('.showMessage2').style.display = "none";
        document.querySelector('.showMessage3').style.display = "none";
        document.querySelector('.alertbox3').style.visibility="hidden";
    }
    else{
        document.querySelector('.alertbox3').style.visibility="hidden";
    }
})
function ValidationEvent(){
    var pw = password.value;
    if(uname.value === "")
    {
       document.querySelector('.alertbox').style.visibility="visible";
       return false;
      
    }
    if(pw.length < 8)
    {
        document.querySelector('.alertbox2').style.visibility="visible";
        return false;
       
    }
    if(password.value === "")
    {
        document.querySelector('.alertbox1').style.visibility="visible";
        return false;
        
    }
   if(pa.value === "")
    {
        document.querySelector('.alertbox3').style.visibility="visible";
        return false;
    }
    return true;
}
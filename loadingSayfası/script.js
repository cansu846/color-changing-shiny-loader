var interval;
var say = 10;
var timeOut;


function sayac(){
   
    if( say >= 0 ){ 
        document.getElementById("geriSay").innerHTML = say;
    }
    else{
        window.open("https://www.google.com","_self");
        clearInterval(interval);
       
    }
    say--;
}
interval = setInterval("sayac()", 1000);
   

/* function sayfayaGit(){
    window.open("https://www.google.com", "_blank");
}
timeOut = setTimeout(sayfayaGit(), 3000); */

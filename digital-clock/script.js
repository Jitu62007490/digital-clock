function showTime(){
     var date= new Date();
   
    var h=date.getHours();  
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session;
    if(h==0)
    {
        h=12;
    }
        if(h>12){
            h=h-12;
            session='PM';
        }
        
      
     if(h<10)
    {
        h="0"+h;
    }
    else{
        h=h;
    }
    if(m<10)
    {
        m="0"+m;
    }
    else{
        m=m;
    }
    if(s<10)
    {
        s="0"+s;
    }
    else{
        s=s;
    }
 
  document.getElementById("myClockDisplay").innerHTML=h+":"+m+":"+s+":"+session;
setTimeout(showTime,1000);
}
showTime();
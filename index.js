ele=document.getElementById("one");
ele2=document.getElementById("two");
ele3=document.getElementById("three");
ele4=document.getElementById("four");
var x = 1;
var y = 1; 
var z = 1;
var w = 1;
var event = document.body.addEventListener('keydown',move);
function move(){
	if(event.key=='ArrowUp')	
   	{x = x+1;
   	 if(y<=2)
   	 y = y+0.15;
   	 w = w+1;
   	 z = z+1;
   	}
    if(event.key=='ArrowDown')
    {x = x-1;
     if(y>=0.3)
     y = y-0.15;
     z = z-1;
     w = w-1;
    }
    if(x<=-12||x>=17){
    	x = 1;
    }
    if(z<=-10||z>=15){
    	z = 1;
    }
    if(w<=-14||w>=19){
    	w = 1;
    }
   console.log(y);
   ele.style.transform="scale(" + x+","+x+")";
   ele2.style.transform="scale(" + y+","+y+")";
   ele3.style.transform="scale(" + z+","+z+")";
   ele4.style.transform="scale(" + w+","+w+")";
}


var arr=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21);
var a1=new Array();
var a2=new Array();
var a3=new Array();
var x=0,y=0,z=0;
var count=0;
var anim;
var id,j;
var maincount=0,i;
function process()
{
	x=0;
	y=0;
	z=0;
	count=0;
	anim=document.getElementsByClassName("tc");
	for(j=0;j<21;++j)
	{
		anim[j].style.height="33%";
		anim[j].style.width="11%";
		anim[j].style.left="44.4%";
		anim[j].style.top="0%";
		anim[j].style.zIndex="0";
		anim[j].src="cards/cback.png";
	}		
	if(maincount==0){p=document.getElementsByTagName("p");
	p[0].style.display="none";}
	maincount++;
	for(i=0;i<21;++i)
    {
        if(i%3==0)
        {
            a1[x]=arr[i];
            x++;
		}
        else if(i%3==1)
        {
            a2[y]=arr[i];
            y++;
        }
        else
		{
            a3[z]=arr[i];
            z++;
        }
    }
	anim=document.getElementsByClassName("tc");
	for(i=0;i<21;++i)
	{
		anim[i].alt="0";
	}
    var id2=setInterval(work,800);
function work(){
	if(count==21){clearInterval(id2);}
	else {
var pos=0;
var val=count;
anim[val].src=arr[val]+".png";
anim[val].style.zIndex=count;
var id=setInterval(fine,4);
function fine(){
                 if(pos==40)
				 {clearInterval(id);}
				 else if(count%3==1)
				 {
                 pos++;
				 anim[val].style.top=pos+"%";
				 anim[val].style.left=44.4-pos/2 +"%";
				 if(count>17){anim[val].alt="1";}
				 }
				 else if(count%3==2)
				 {
                 pos++;
				 anim[val].style.top=pos+"%";
				 if(count>17){anim[val].alt="2";}
				 }
				 else if(count%3==0)
				 {
                 pos++;
				 anim[val].style.top=pos+"%";
				 anim[val].style.left=44.4+pos/2 +"%";
				 if(count>17){anim[val].alt="3";}
				 }
				 }
				 count++;
	}
}
    let msg=document.getElementsByClassName("msg");
	msg[0].innerHTML="Pick the Deck of your Card!";
	window.onclick=e=>{
		if(e.target.alt==1){
			arr=a2.concat(a1.concat(a3));
			if(maincount==3){var spbg=document.getElementById("spbg");
			spbg.style.display="block";
			var sp=document.getElementById("special");
			sp.style.display="block";
			sp.src=arr[10]+".png";
			var nun=document.getElementById("container");
			nun.style.display="none";
			var abra=document.getElementById("abra");
			abra.style.display="block";
			}
			else {process();}
		}
		else if(e.target.alt==2){
			arr=a1.concat(a2.concat(a3));
			if(maincount==3){var spbg=document.getElementById("spbg");
			spbg.style.display="block";
			var sp=document.getElementById("special");
			sp.style.display="block";
			sp.src=arr[10]+".png";
			var nun=document.getElementById("container");
			nun.style.display="none";
			var abra=document.getElementById("abra");
			abra.style.display="block";}
			else {process();}
		}
		else if(e.target.alt==3){
			arr=a1.concat(a3.concat(a2));
			if(maincount==3){var spbg=document.getElementById("spbg");
			spbg.style.display="block";
			var sp=document.getElementById("special");
			sp.style.display="block";
			sp.src=arr[10]+".png";
			var nun=document.getElementById("container");
			nun.style.display="none";
			var abra=document.getElementById("abra");
			abra.style.display="block";}
			else {process();}
		}
	}
}	
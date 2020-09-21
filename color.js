console.log("Connected");

var s1=document.querySelector("#rate1");
var s5=document.querySelector("#rate5");
var s10=document.querySelector("#rate10");
var s50=document.querySelector("#rate50");
var s100=document.querySelector("#rate100");

var red=document.querySelector("#rr");
var green=document.querySelector("#gr");
var blue=document.querySelector("#bl");
var re=document.querySelector("#reset");
var get=document.querySelector("#get"); 
var square=document.querySelector(".square");

function setRGB(rr, gg, bb) {
	rr=rr.toString(10);
	gg=gg.toString(10);
	bb=bb.toString(10);
	var code="rgb(" + rr +", "+gg+", "+bb+")";
return code;
}    

red.disabled=true;
green.disabled=true;
blue.disabled=true;
re.disabled=true;
get.disabled=true;

var r=0;
var g=0;
var b=0;
var scale;


s1.addEventListener("click",function(){
	scale=0;
	scale=1;
	red.disabled=false;
green.disabled=false;
blue.disabled=false;
re.disabled=false;
	
});

s5.addEventListener("click",function(){
	scale=0;
	scale=5;
	red.disabled=false;
green.disabled=false;
blue.disabled=false;
re.disabled=false;

	
});

s10.addEventListener("click",function(){
	scale=0;
	scale=10;
	red.disabled=false;
green.disabled=false;
blue.disabled=false;
re.disabled=false;
	
});

s50.addEventListener("click",function(){
	scale=0;
	scale=50;
	red.disabled=false;
green.disabled=false;
blue.disabled=false;
re.disabled=false;
});

s100.addEventListener("click",function(){
	scale=0;
	scale=100;
	red.disabled=false;
green.disabled=false;
blue.disabled=false;
re.disabled=false;
	
});

red.addEventListener("click",function(){
	if(r+scale>255)
	{alert("Cannot Exceed 255");}
	
	else{
		r+=scale;
	}
	
	get.disabled=false;
document.querySelector("#red").textContent=r;
});

green.addEventListener("click",function(){
	if(g+scale>255)
	{alert("Cannot Exceed 255");}
	
	else{
		g+=scale;
	}
	
	get.disabled=false;
document.querySelector("#green").textContent=g;
});


blue.addEventListener("click",function(){
	
	if(b+scale>255)
	{alert("Cannot Exceed 255");}
	
	else{
		b+=scale;
	}
	get.disabled=false;
document.querySelector("#blue").textContent=b;
});



	
get.addEventListener("click",function(){
	
	color=setRGB(r,g,b);
	square.style.backgroundColor=color;

	});



re.addEventListener("click",function(){
	scale=0;
	r=0;
	g=0;
	b=0;
	red.disabled=true;
green.disabled=true;
blue.disabled=true;
get.disabled=true;
document.querySelector("#red").textContent=0;
document.querySelector("#green").textContent=0;
document.querySelector("#blue").textContent=0;
square.style.backgroundColor="white";
	
	re.disabled=true
	
});



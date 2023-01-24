var quotes;

quotes=['taking baby steps over a concentrated period of time result in mission accomplished','Do what makes u happy','Mind your Own business','i am just a vibe you will never find nowhere else'];

   document.querySelector('.msg').style.display="block";
document.querySelector(".menu").addEventListener('click',function(){
	  var x= document.querySelector('.lists');
	  if(x.style.display==="none"){
		   x.style.display="block";
		   document.querySelector('.msg').style.display="none";
		      document.querySelector('.new').style.display="none";
			       document.querySelector('.img0').style.display="block";
				    document.querySelector(".abouts").style.display="none";
	  } 
	  else{
		  
		  x.style.display="none";
		    document.querySelector('.msg').style.display="block";
			    document.querySelector('.new').style.display="block";
				  document.querySelector('.img0').style.display="none";
				   document.querySelector(".abouts").style.display="none";
	  }
});
 var dis=Math.floor(Math.random()*quotes.length);
	 var ans=quotes[dis];
document.querySelector('.msg').textContent=ans;
document.querySelector(".new").addEventListener('click',function(){
	var dis=Math.floor(Math.random()*quotes.length);
	 var ans=quotes[dis];
document.querySelector('.msg').textContent=ans;
});
document.querySelector(".about").addEventListener('click',function(){
	
	 document.querySelector(".msg").style.display="none";
	 document.querySelector(".abouts").style.display="block";
	     document.querySelector('.img0').style.display="none";
		 document.querySelector('.lists').style.display="none";
	 document.querySelector(".new").style.display="none";
});



/*Author :AL EMRAN
email:emrancu1@gmail.com
website:http://alemran.me
*/


 "use strict";

let webToast= (function() {

// variable defining
 var i,data,delay,cssPrepend=false;
 
 
  /* function for adding stylesheet to body*/
	 var AddStyleData= function(){
				 
     	$('body').append('<div id="webtoast"></div>')
         cssPrepend=true;
		}
   
   /* function for hiding toast Message*/
	 var hideToast= function(selector){
				$(selector).fadeOut(1000, function() { selector.remove(); });
		}
		
      /* function for auto hiding toast Message*/
	 let autoHide= function(selector){
       
		 setTimeout(function(){ hideToast(selector); }, delay);       
  
     
		}
		
   
   
	let parentWrapper=function(data){
		  let new_row = document.createElement('div');
		  new_row.className ='toastContainer';
		  new_row.innerHTML=data;
		  new_row.setAttribute('onclick', 'webToast.ToastRemove(this)');
		  return new_row;

	}
 
const successToast=function(status,message){

  data= '<div  class="webToast toastSuccess"><div class="toastIcon"> &#10003; </div><div class="toastContent"><p class="toastStatus">'+ status +'</p><p class="toastMessage">'+message+'</p></div><div class="toast__close"> &#10799; </div></div>';
  
  let toastContent=parentWrapper(data);
  
	 if(!cssPrepend){ 
    	AddStyleData();
   }
  
  
$("#webtoast").append(toastContent);
  
  	 if(delay){ 
    	autoHide(toastContent, delay );
   }
  
}


const dangerToast=function(status,message){

  data= '<div  class="webToast toastDanger"><div class="toastIcon"> &#9432; </div><div class="toastContent"><p class="toastStatus">'+ status +'</p><p class="toastMessage">'+message+'</p></div><div class="toast__close"> &#10799; </div></div>';
  
  let toastContent=parentWrapper(data);
   if(!cssPrepend){ 
    	AddStyleData();
   }
  

$("#webtoast").append(toastContent);
     if(delay){ 
    	autoHide(toastContent, delay );
   }
  
}


const infoToast=function(status,message){

  data= '<div  class="webToast toastInfo"><div class="toastIcon"> &#9432; </div><div class="toastContent"><p class="toastStatus">'+ status +'</p><p class="toastMessage">'+message+'</p></div><div class="toast__close"> &#10799; </div></div>';
  
  let toastContent=parentWrapper(data);
  
    if(!cssPrepend){ 
    	AddStyleData();
   }
  
$("#webtoast").append(toastContent);
  
  if(delay){ 
    	autoHide(toastContent, delay );
   }
}



const LoadingToast=function(status,message){

  data= '<div  class="Loader webToast toastInfo"><div class="toastIcon" style="background:transparent"><div class="loader"></div> </div><div class="toastContent"><p class="toastStatus">'+ status +'</p><p class="toastMessage">'+message+'</p></div></div>';
  
  let toastContent=parentWrapper(data);
  
    if(!cssPrepend){ 
    	AddStyleData();
   }
  
$("#webtoast").append(toastContent);
  
 return $("#webtoast").find('.Loader');
}



  return {
      Success: function(options){ 
       delay= (typeof options.delay === "undefined"?3000:options.delay);
        
			successToast(options.status,options.message);
        responsiveVoice.speak(options.status+options.message);
      
      } ,
	  Danger:function(options){ 
        delay= (typeof options.delay === "undefined"?3000:options.delay);   
			dangerToast(options.status,options.message);
         responsiveVoice.speak(options.status+options.message);
    
	 
	  },
	  Info:function(options){ 
      
          delay= (typeof options.delay === "undefined"?3000:options.delay);  
      
			infoToast(options.status,options.message); 
         responsiveVoice.speak(options.status+options.message);
    
		  
	  },
     ToastRemove:function(selector){
      	hideToast(selector);
	  
    },
	  loading:function(options){ 
            
			return  LoadingToast(options.status,options.message); 
     
	  },
  };


})();



var mss= webToast.loading({
                 status:'Loading...',
                 message:'Please Wait..'
                 });
 

 
 
 

setTimeout(function(){ 
  
 mss.remove() ;
 
}, 3000);


/*Author :AL EMRAN
email:emrancu1@gmail.com
website:http://alemran.me
*/


 "use strict";

let webToast= (function() {

// variable defining
 var i,data,delay,cssPrepend=false;
 
  // set stylesheet as constants
const cssContent="<style>*{box-sizing:border-box}@keyframes slideleft{0%{transform:translateX(100px)}70%{transform:translateX(-30px)}100%{transform:translateX(0px)}}.toastContainer{z-index: 99999;position:fixed;top:20px;right:20px}.webToast{text-align:left;padding:10px 0;background-color:#fff;border-radius:4px;max-width:500px;top:0;position:relative;box-shadow:0 0 10px 0 rgba(0,0,0,0.2);animation:slideleft .8s;transition:all .8s}.webToast:before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;border-top-left-radius:4px;border-bottom-left-radius:4px}.toastIcon{position:absolute;top:50%;left:22px;transform:translateY(-50%);width:30px;height:30px;padding:5px;border-radius:50%;display:inline-block;font-size:20px;font-weight:700;text-align:center;color:#fff;padding-top:1px}.toastStatus{color:#3e3e3e;font-weight:700;margin-top:0;margin-bottom:2px;font-size:20px}.toastMessage{font-size:16px;margin-top:0;margin-bottom:0;color:#878787}.toastContent{padding-left:70px;padding-right:60px}.toast__close{position:absolute;right:22px;top:38%;width:14px;cursor:pointer;height:14px;color:#ada9a9;transform:translateY(-50%);font-size:28px}.toastSuccess .toastIcon{background-color:#2BDE3F}.toastSuccess:before{background-color:#2BDE3F}.toastInfo .toastIcon{background-color:#1D72F3}.toastInfo:before{background-color:#1D72F3}.toastDanger .toastIcon{background-color:#ef6658}.toastDanger:before{background-color:#ef6658}.loader{border:3px solid #f3f3f3;border-radius:50%;border-top:3px solid #3498db;width:30px;height:30px;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>";
 
  /* function for adding stylesheet to body*/
	 var AddStyleData= function(){
				$('body').prepend( cssContent );
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
       
      
      } ,
	  Danger:function(options){ 
        delay= (typeof options.delay === "undefined"?3000:options.delay);   
			dangerToast(options.status,options.message);
        
    
	 
	  },
	  Info:function(options){ 
      
          delay= (typeof options.delay === "undefined"?3000:options.delay);  
      
			infoToast(options.status,options.message); 
         
    
		  
	  },
     ToastRemove:function(selector){
      	hideToast(selector);
	  
    },
	  loading:function(options){ 
            
			return  LoadingToast(options.status,options.message); 
     
	  },
  };


})();


 
/*Author :AL EMRAN
email:emrancu1@gmail.com
website:http://alemran.me
*/


"use strict";

const webToast= (function($) {

// variable defining
 let i,htmlData,cssPrepend=false; 
 let align='';

  // set stylesheet as constants
const cssContent= "";
 
  /* function for adding stylesheet to body*/
	 let AddStylehtmlData= function(){
				$('body').prepend( cssContent );
     	$('body').append('<div id="webtoast"></div>')
         cssPrepend=true;
		}
   
   /* function for hiding toast Message*/
	 let hideToast= function(selector){
				$(selector).fadeOut(500, function() { selector.remove(); });
		}
    
    
      /* function for auto hiding toast Message*/
	 let autoHide= function(selector,delay){

    let delayTime=(delay?delay:3000);    
       
		 setTimeout(function(){ hideToast(selector); }, delayTime);       
  
     
		}
		
  const capitalize=function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
const successToast=function(options){

  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class="toastContainer toast'+align+'" onclick="webToast.ToastRemove(this)"><div  class="webToast toastSuccess"><div class="toastIcon"> &#10003; </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div><div class="toast__close"> &#10799; </div></div></div>');
    
	 if(!cssPrepend){ 
    	AddStylehtmlData();
   }
   
$("#webtoast").append(htmlData);
   
  autoHide(htmlData, options.delay);
  
  
}


const dangerToast=function(options){

  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class="toastContainer  toast'+align+'"  onclick="webToast.ToastRemove(this)"><div  class="webToast toastDanger"><div class="toastIcon"> &#9432; </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div><div class="toast__close"> &#10799; </div></div></div>');
  
 
   if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  

$("#webtoast").append(htmlData);
    
    	autoHide(htmlData, options.delay );
   
  
}


const infoToast=function(options){

  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class="toastContainer  toast'+align+'" onclick="webToast.ToastRemove(this)"><div  class="webToast toastInfo"><div class="toastIcon"> &#9432; </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div><div class="toast__close"> &#10799; </div></div></div>');
  
    if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  
$("#webtoast").append(htmlData);
   
    	autoHide(htmlData, options.delay );
  
}



const LoadingToast=function(options){

  let topLineProgress='';

  if(options.line==true){
    topLineProgress='<div class="webToast-line-loader"></div>';
  } 
   
  align=(options.align? (options.align).toLowerCase():'topright' );
 
  htmlData= $('<div> '+topLineProgress+'<div class="toastContainer toast'+align+'" ><div  class="webToast"><div class="toastIcon" style="background:transparent"><div class="webToast-loader"></div> </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div></div></div></div>');
 
    if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  
$("#webtoast").append(htmlData);
  
 return htmlData;
}

    
// confirm toast
const ConfirmToast=function(options){
  console.log(options.description)
  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class=""><div class="confirmBG"></div><div class="toastContainer toast'+align+' ConfirmConainer"><div  class="webToast toastConfirm">'+ 
  '<div class="toastContent"> '+
  '<p class="toastMessage">'+(options.message?options.message:options)+'</p>'+
  (options.description ? `<div class="confirm-description" > ${ options.description} </div>` : '' )+
  '<button data-confirm > Confirm </button><button data-cancel > Cancel </button></div> </div></div></div>');
   
   
    if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  
$("#webtoast").append(htmlData);

let confirmBtn=htmlData.find('button[data-confirm]');
let cancelBtn=htmlData.find('button[data-cancel]');
  let focus = options.focus == false  ? false : true;
  confirmAction(confirmBtn, cancelBtn, htmlData, focus);

return confirmBtn;

}

 

  const confirmAction = function (confirmBtn, cancelBtn, ConfirmArea, focus){

  confirmBtn.click(function(){
     hideToast(ConfirmArea);
  })
    if (focus){
      confirmBtn.focus();
    }
  cancelBtn.click(function(){
    hideToast(ConfirmArea);
  })

}



  return {
      Success: function(options){       
        
        successToast(options); 
      
      } ,
	  Danger:function(options){  

			dangerToast(options);   
	 
	  },
	  Info:function(options){  

			infoToast(options);   
		  
	  },
     ToastRemove:function(selector){
      	hideToast(selector);	  
    },
	  loading:function(options){ 
            
			return  LoadingToast(options); 
     
	  },
    confirm:function(options){
      return ConfirmToast(options);
    } 
  };


})(jQuery);

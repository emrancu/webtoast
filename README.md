# webToast
<p>A jQuery Plagin for alerting user and loading box.</p>
<p> You can easily push  Danger, Info & Success alert to user  and you can show loading box when need load data from API.</p>
<p>Check Demo <a target="_blank" href="https://alemran.me/demo/webToast">Here</a></p>

<div class="highlight highlight-text-html-basic">

#Use for Loading...
<pre>
var Loading= webToast.loading({
                 status:'Loading...',
                 message:'Please Wait..'
                 });
   

setTimeout(function(){ 
  
 Loading.remove() ;
 
}, 3000);

</pre>

#Use for Alert...
<pre>
 webToast.Success({
                 status:'Sorry !',
                 message:'I have failed to complete the software within short time',
                   /* Default delay time 3 second */
                 })
      webToast.Info({
                 status:'Sorry !',
                 message:'I have failed to complete the software within short time',
                 delay:false  /* Never hide autometically */
                 })
                 
     webToast.Danger({
                 status:'Sorry !',
                 message:'I have failed to complete the software within short time',
                 delay:5000 /* 5 second will stay */
                 })
</pre>

#Features
<ul> 
<li> Loading Alert</li>
<li> Info Alert</li>
<li> Success Alert</li>
<li> Danger Alert</li>
<li> Custom Delay Time as Millisecond. also have default delay time for alert -3/3000 second </li>

</ul>

#License
<p><a href="https://github.com/nuxt/nuxt.js/blob/dev/LICENSE.md">MIT</a></p>

<p>Author: <a href="https://alemran.me">AL EMRAN</a></p>

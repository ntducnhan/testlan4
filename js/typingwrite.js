document.addEventListener('DOMContentLoaded',function(event){
    // create array text 
    var dataText = [ "UI/UX Designer", "Freelancer", "Web developer"];
    
    // typing text until end
    function typeWriter(text, i, fnCallback) {
  
      if (i < (text.length)) {
        // gán các ký tự
       document.getElementById("typewriter").innerHTML = text.substring(0, i+1);
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 160);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 70);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 50);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
// console.log('This would be the main JS file.');
$(document).ready(function () {
  $('#main_content').headsmart()

  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.")
  document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"))
  try {
    var pageTracker = _gat._getTracker("UA-130207-15");
    pageTracker._trackPageview();
  }
  catch(err) {}
})

window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000000",
        "text": "#ffffff"
      },
      "button": {
        "background": "transparent",
        "text": "#ffffff",
        "border": "#ffffff"
      }
    }
  })
})



/* $('document').ready(function(){
  var input = document.querySelector("#phone");
  window.intlTelInput(input);
});
 */
$('document').ready(function(callback){
    console.log('deberia ejecutarse')
    function initDownloadButton(){
      let elems = document.querySelectorAll('.fixed-action-btn');
      let instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
      });
  
    }
  function initCarousel(callback){
  
    let elem = document.querySelector('.main-carousel');
    let flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      contain: true,
      pageDots: false,
      accessibility: false
    });
  
  
  }
  
  function hideSlider(){
    $(".loader-container").fadeOut(759);
  }
  initDownloadButton(initCarousel(hideSlider()));
  
  
  

  });
  
    /*  document.getElementById('loader-container').classList.add
   var input = document.querySelector("#phone");
   window.intlTelInput(input);
    */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});






$.fn.commentCards = function(){
     

    return this.each(function(){
  
      var $this = $(this),
          $cards = $this.find('.card'),
          $current = $cards.filter('.card--current'),
          $next;
  
      $cards.on('click',function(){
        
        if ( !$current.is(this) ) {
          $cards.removeClass('card--current card--out card--next');
          $current.addClass('card--out');
          $current = $(this).addClass('card--current');
          $next = $current.next();
          $next = $next.length ? $next : $cards.first();
          $next.addClass('card--next');
        }
      });
  
      if ( !$current.length ) {
        $current = $cards.last();
        $cards.first().trigger('click');
      }
  
      $this.addClass('cards--active');
  
    })
  
  };
  
  $('.cards').commentCards();
(function() {
   $('.maincontent').fullpage({
      verticalCentered: false
   });

   $('.hero__arrow').on('click', function (e) {
      e.preventDefault();

      $.fn.fullpage.moveSectionDown();
   });

   $('.fixed-menu__link').on('click', function(e) {
      e.preventDefault()

      var itemHref = parseInt($(this).attr('href')) +1;

      $.fn.fullpage.moveTo(itemHref);
   });

   $('.menu__link').on('click', function(e) {
      e.preventDefault()

      var itemHref = parseInt($(this).attr('href')) +1;

      $.fn.fullpage.moveTo(itemHref);
   });

}());
$(document).ready(function() {
  $('.toggle-btn').click(function() {
  	var toggleType = $(this).data('toggle');

      $('.toggle-box').each(function() {
        if($(this).data('toggle') !== toggleType && $(this).css('display') !== 'none') {
          $(this).toggle( "slow", function() {
            // Animation complete.
          });
        }
      });

      $('.toggle-box[data-toggle=' + toggleType + ']').each(function() {
              
        $(this).toggle( "slow", function() {
          // Animation complete.
        });
      });          
  });
});
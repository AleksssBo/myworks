$(document).ready(function(){

    $('.btn-menu').on('click', function() {
        $('aside').css("transform", "translateX(0px)")
    });

    $('.exit').on('click', function() {
        $('aside').css("transform", "translateX(-275px)")
    });

    $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
         scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();

        $('aside').css("transform", "translateX(-275px)")
       });
       return false;
  
  });
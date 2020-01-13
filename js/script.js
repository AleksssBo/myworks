$(document).ready(function(){

    $('.btn-menu').on('click', function() {
        $('aside').css("transform", "translateX(0px)")
    });

    $('.exit').on('click', function() {
        $('aside').css("transform", "translateX(-275px)")
    });

    $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "js/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
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
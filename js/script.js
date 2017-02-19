
	/*nav on small divices*/

    $("#navigation").click(function(){
    	$("header nav").slideToggle("fast");
    });

    /*filter*/


    $('main nav a[data-filter]').click(function(event){
    	let attr = $(event.target).attr("data-filter");

            $('main nav a').removeClass('active');
            $('main nav a[data-filter="' + attr + '"]').addClass("active");
            $('.works .item').parent().hide();

        if (attr == 'all'){
            $('.works div[data-filter]').parent().fadeIn(); 
        }
        else{
            $('.works div[data-filter="' + attr + '"]').parent().fadeIn();  
        }

     });
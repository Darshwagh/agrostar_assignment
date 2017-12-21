$(document).ready(function(){
    		$(this).scrollTop(0);
    			});

			$(window).bind('scroll', function() {
         		if ($(window).scrollTop() > 50) 
         		{
             		$('.HackerNewsheader').addClass('fixedheader');
         		}
         		else
          		{
             		$('.HackerNewsheader').removeClass('fixedheader');
         		}

     			}); 
			function openNav() {
    				document.getElementById("commentpage").style.width = "100%";
					}


			function closeNav() {
    				document.getElementById("commentpage").style.width = "0%";
					}
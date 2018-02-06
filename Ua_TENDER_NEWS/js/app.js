$(document).foundation();
$(document).ready(function () {

    // SHORTENT LONG TENDER LINK
    $(window).on("load", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 480) {
            $(".news_info_block p").each(function( index ) {
                $(".dotsBtn").on('click', function (event)  {
                    event.preventDefault();
                    $(this).parent().text(fullName);
                });
                
                if ($(this).text().length > 150) {
                    var fullName = $(this).text(),
                        shortName = $(this).text().slice(0, 150),
                        dots_btn = $("<span class='dotsBtn'>...</span>");
                    $(this).text(shortName).append(dots_btn);
                } else {
                    $(".news_info_block p").text(fullName);
                    $(".dotsBtn").remove;
                };
            });

            
        }   
    }

});
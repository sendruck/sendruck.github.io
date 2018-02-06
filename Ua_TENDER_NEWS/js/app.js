$(document).foundation();
$(document).ready(function () {

    // SHORTENT LONG TENDER LINK
    $(window).on("load", function (e) {
        checkScreenSize();
        fullName = null;
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 480) {
            $(".news_info_wrapper p").each(function( index ) {
                if ($(this).text().length > 150) {
                    var fullName = $(this).text(),
                        shortName = $(this).text().slice(0, 150),
                        dots_btn = $("<span class='dotsBtn'>...</span>");
                    $(this).text(shortName).append(dots_btn);

                    $(".dotsBtn").on('click', function (event)  {
                        event.preventDefault();
                        $(this).parent().text(fullName);
                    });
                } else {
                    $(".news_info_wrapper p").text(fullName);
                    $(".dotsBtn").remove;
                }
            });    
        }   
    }

});
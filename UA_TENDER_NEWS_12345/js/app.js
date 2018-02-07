$(document).foundation();
$(document).ready(function () {
    

    // SHORTENT LONG TENDER LINK
    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 480) {
            $(".news_info_block p").each(function( index ) {
                if ($(this).text().length > 150) {
                    var fullName = $(this).text(),
                        shortName = fullName.slice(0, 150),
                        dots_btn = $("<span class='dotsBtn'>...</span>");
                    $(this).text(shortName).append(dots_btn);

                    $(".dotsBtn").on('click', function (event)  {
                        event.preventDefault();
                        $(this).parent().text(fullName);
                    });
                } else {
                    $(".dotsBtn").remove;
                    $(".news_info_block p").text(fullName);
                };

            });
        }   
    }

});
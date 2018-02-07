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
                if ($(this).text().length > 150) {
                    var fullName = $(this).text(),
                        shortName = $(this).text().slice(0, 150),
                        dots_btn = $("<span class='dotsBtn'>...</span>");
                    $(this).text(shortName).append(dots_btn);
                } else {
                    console.log("here");
                    $(".dotsBtn").remove;
                    $(".news_info_block p").text(fullName);
                };

                $(".dotsBtn").on('click', function (event)  {
                    event.preventDefault();
                    $(this).parent().text(fullName);
                });
                console.log("fullName = " + fullName);
                console.log("shortName = " + shortName);
            });
        }   
    }

});
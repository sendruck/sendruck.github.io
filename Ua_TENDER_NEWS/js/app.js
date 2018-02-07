$(document).foundation();
$(document).ready(function () {
    var fullName = null;

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
                    console.log("here");
                    var fullName = $(this).text(),
                        shortName = $(this).text().slice(0, 151),
                        dots_btn = $("<span class='dotsBtn'>...</span>");
                    $(this).text(shortName).append(dots_btn);
                } else {
                    $(".dotsBtn").remove;
                };
                $(".dotsBtn").on('click', function (event)  {
                    event.preventDefault();
                    console.log(fullName);
                    $(this).parent().text(fullName);
                });
            });
        }   
    }


    $(".checkJS").css("color", "yellow");

});
$(document).foundation();
$(document).ready(function () {
    

    // SHORTENT LONG TENDER LINK
    // $(window).on("load", function (e) {
    //     checkScreenSize();
    // });
    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 480) {
            $(".news_info_block p").each(function( index ) {
                if ($(this).text().length > 150) {
                    console.log("yepp it's really more than 150 char");
                    var fullName = $(this).text(),
                        shortName = fullName.slice(0, 150),
                        dots_btn = $("<span class='dotsBtn'>...</span>");
                        console.log("this new text" + $(this).text());
                    $(this).text(shortName).append(dots_btn);

                    $(".dotsBtn").on('click', function (event)  {
                        event.preventDefault();
                        $(this).parent().text(fullName);
                    });
                } else {
                    console.log("here");
                    $(".dotsBtn").remove;
                    $(".news_info_block p").text(fullName);
                };
                // console.log("fullName = " + fullName);
                // console.log("shortName = " + shortName);
            });
        }   
    }

});
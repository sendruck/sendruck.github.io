$(document).foundation();

// Cut long title
$(document).ready(function () {  


    $(window).on("load", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var normalSize_HTML = $(".predmet_wrapper").html();
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 480) {
            if ($(".predmet_zak").text().length > 260) {
                var fullName = $(".predmet_zak").text(),
                    shortName = $(".predmet_zak").text().slice(46, 260),
                    dots_btn = $("<span class='dotsBtn'>...</span>");
                $(".predmet_zak").text(shortName).append(dots_btn);
                $(".predmet_zak").prepend('<span class="noHighlight">Предмет закупки:</span>');
            
                $(".dotsBtn").on('click', function () {
                    $(".predmet_zak").html(normalSize_HTML);
                });
            }
        }
        else
        {
            $(".predmet_zak").html(normalSize_HTML);
        }
    }
});
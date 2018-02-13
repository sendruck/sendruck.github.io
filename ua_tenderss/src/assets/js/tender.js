// Cut long title
    export function checkScreenSize(){
        var normalSize_HTML = $(".predmet_wrapper").html();
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 768) {
            if ($(".predmet_wrapper").text().length > 260) {
                var fullName = $(".predmet_wrapper").text(),
                    shortName = $(".predmet_wrapper").text().slice(15, 260),
                    dots_btn = $("<span class='dotsBtn'>...</span>");
                $(".predmet_wrapper").text(shortName).append(dots_btn);
                $(".predmet_wrapper").prepend('<span class="noHighlight">Предмет закупки:</span>');
            
                $(".dotsBtn").on('click', function () {
                    $(".predmet_wrapper").html(normalSize_HTML);
                    $(".predmet_wrapper").prepend('<span class="noHighlight">Предмет закупки:</span>');
                });
            }
        }
        else
        {
            $(".predmet_wrapper").html(normalSize_HTML);
        }
    };

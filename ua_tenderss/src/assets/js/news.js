// Cut long news text
export function NewscheckScreenSize(){
    var normalSize_HTML = $(".news_info_wrapper").html();
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 768) {
        if ($(".news_info_wrapper p").text().length > 170) {
            var fullName = $(".news_info_wrapper p").text(),
                shortName = $(".news_info_wrapper p").text().slice(0, 170),
                dots_btn = $("<span class='dotsBtn'>...</span>");
            $(".news_info_wrapper p").text(shortName).append(dots_btn);
        
            $(".dotsBtn").on('click', function () {
                $(".news_info_wrapper").html(normalSize_HTML);
            });
        }
    }
    else
    {
        $(".news_info_wrapper").html(normalSize_HTML);
    }
};
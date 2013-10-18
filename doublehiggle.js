(function ($) {

    function getHTML(imagesrc) {
        return "\n \x3Cdiv class=\"modal fade\" id=\"imageViewer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\x3E\n \x3Cdiv class=\"modal-dialog\"\x3E\n \x3Cdiv class=\"modal-content\"\x3E\n \x3Cdiv class=\"modal-header\"\x3E\n \x3Cbutton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"\x3E\&times;\x3C\x2Fbutton\x3E\n \x3Ch4 id=\"imageViewerTitle\"\x3EModal title\x3C\x2Fh4\x3E\n \x3C\x2Fdiv\x3E\n \x3Cdiv class=\"modal-body\"\x3E\n \x3Cimg src =" + imagesrc + "\x3E\x3C\x2Fimg\x3E\n \x3C\x2Fdiv\x3E\n \x3Cdiv class=\"modal-footer\"\x3E\n \x3Cbutton type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"\x3EClose\x3C\x2Fbutton\x3E\n \x3C\x2Fdiv\x3E\n \x3C\x2Fdiv\x3E\n \x3C\x2Fdiv\x3E\n \x3C\x2Fdiv\x3E";
    }


    $.fn.enableEnlarge = function () {
        this.click(function () {
            var imagesrc = '"' + $(this).get()[0].src + '"';
            $('#imageViewer').remove();
            $('#imageViewer').on('show', function () {
                $(this).find('.modalbody').css({
                    width: 'auto',
                    height: 'auto',
                        'max-height': '100%'
                });
            });
            $('body').append(getHTML(imagesrc));
            $('#imageViewer').modal();
        });
        return this;
    };

}(jQuery));

$('img').enableEnlarge();

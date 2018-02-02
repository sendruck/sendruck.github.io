$(document).foundation();

$(document).ready(function () {
    
    // FILTERS
    function addCodeIds() {
        return $('.classifier_code_id').map(function () {
        return '&classifier_code_ids[]=' + this.value;
        }).get().join('');
    }

    // Отрасль
    $("#b").on("change", function(){
        location.href='/tender/' + this[this.selectedIndex].value + '/?b=' + this[this.selectedIndex].value
        + '&st=' + document.getElementById('st').value

        + addCodeIds()

        + '&min_amount=' + document.getElementById('min_amount').value
        + '&max_amount=' + document.getElementById('max_amount').value
        + '&a=' + document.getElementById('a').value
        + '&t=' + document.getElementById('t').value
        + '&p=' + document.getElementById('p').value
        + '&z=' + document.getElementById('z').value
        + '&region=' + document.getElementById('region').value + '&h=';
    });

    // Статус тендера
    $("#st").on("change", function(){
        location.href='/tender/trz/?st=' + this[this.selectedIndex].value
        +'&b=' + document.getElementById('b').value

        + addCodeIds()

        + '&min_amount=' + document.getElementById('min_amount').value
        + '&max_amount=' + document.getElementById('max_amount').value
        + '&a=' + document.getElementById('a').value
        + '&t=' + document.getElementById('t').value
        + '&p=' + document.getElementById('p').value
        + '&z=' + document.getElementById('z').value
        + '&region=' + document.getElementById('region').value
        + '&h=';
    });

    // Дата подачи и вид - все тендеры	 
    $("#a").on("change", function(){
        location.href='/tender/trz/?b=' + document.getElementById('b').value
        + '&st=' + document.getElementById('st').value

        + addCodeIds()

        + '&min_amount=' + document.getElementById('min_amount').value
        + '&max_amount=' + document.getElementById('max_amount').value
        + '&a=' + this[this.selectedIndex].value + '&t=' + document.getElementById('t').value + '&p=' + document.getElementById('p').value + '&z=' + document.getElementById('z').value + '&region=' + document.getElementById('region').value + '&h=';
    });

    // Дата подачи и вид - все закупки	 
    $("#t").on("change", function(){
        location.href='/tender/trz/?b=' + document.getElementById('b').value
        + '&st=' + document.getElementById('st').value
        + addCodeIds()
        + '&min_amount=' + document.getElementById('min_amount').value
        + '&max_amount=' + document.getElementById('max_amount').value
        + '&a=' + document.getElementById('a').value
        + '&t=' + this[this.selectedIndex].value
        + '&p=' + document.getElementById('p').value
        + '&z=' + document.getElementById('z').value
        + '&region=' + document.getElementById('region').value
        + '&h=';
    });

    // Адрес, место поставки
    $("#region").on("change", function(){
        location.href='/tender/trz/?b=' + document.getElementById('b').value
        + '&st=' + document.getElementById('st').value

        + addCodeIds()

        + '&min_amount=' + document.getElementById('min_amount').value
        + '&max_amount=' + document.getElementById('max_amount').value
        + '&a=' + document.getElementById('a').value
        + '&t=' + document.getElementById('t').value
        + '&p=' + document.getElementById('p').value
        + '&z=' + document.getElementById('z').value
        + '&region=' + this[this.selectedIndex].value
        + '&h=';
    });


    // PAGINATION
    $(".pagination .current").prepend('[').append(']');


})

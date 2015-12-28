// 1 Tag weniger, da der Einreisetag auch mitzählt
var VISA_VALID_30_DAYS = 29;
var VISA_VALID_60_DAYS = 59;

$(function() {
    hideText();

    $( "#datepicker").datepicker({
        showWeek: true,
        autoSize: true,
        onSelect: dateSelected
    });

    initLocale();
});

function initLocale() {
    moment.locale(detectLocale());
}

function detectLocale() {
   return window.navigator.userLanguage || window.navigator.language;
}

var dateSelected = function() {
    var date = $("#datepicker").datepicker("getDate");
    set30TageText(date);
    set60TageText(date);
    showText();
};

function showText() {
    $('#mainContent p+p').show();
}

function hideText() {
    $('#mainContent p+p').hide();
}

function addDays(date, days) {
    return moment(date).add(days, 'days');
}

function set30TageText(date) {
    $("#ablauf-30-tage").text(transformToGermanDateString(addDays(date, VISA_VALID_30_DAYS)));
}

function set60TageText(date) {
     $("#ablauf-60-tage").text(transformToGermanDateString(addDays(date, VISA_VALID_60_DAYS)));
}

function transformToGermanDateString(date) {
    //return moment(date).format("DD.MM.YYYY");
    return moment(date).format("LL");
}
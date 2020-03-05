$(document).ready(function() {

    $(".btn_1").click(function() {
        $(".par_1").show();
        $(".btn_1").hide();
    });
    $("p.par_1").click(function() {
        $(".par_1").hide();
        $(".btn_1").show();
    });
    $(".btn_2").click(function() {
        $(".par_2").show();
        $(".btn_2").hide();
    });
    $(".par_2").click(function() {
        $(".par_2").hide();
        $(".btn_2").show();
    });
    $(".btn_3").click(function() {
        $(".par_3").show();
        $(".btn_3").hide();
    });
    $(".par_3").click(function() {
        $(".btn_3").show();
        $(".par_3").hide();
    });
});
$(document).ready(function(){       //ロードしたら処理開始
    $(".openbtn4").click(function() {       //openbtn4クリックしたら
        $(this).toggleClass('active');      //これをactiveクラスに
        $("#g-nav").toggleClass('panelactive');     //#g-navにpanelctiveクラスを付与
        $("#g-nav").toggleClass('g-nav');       //#g-navからpanelctiveクラスを除去
    })
});

$(".openbtn4").click(function() {       //nav-listのaがクリックされたら
    $(".openbtn4").removeClass('active');       //.openbtn4からactiveクラス除去
    $("#header").removeClass('g-nav');      //#g-navからpanelctiveクラスを除去
});



$(function () {
    $("#g-nav ul li a").on("click", function () {
        $("#g-nav").toggleClass();
        $("body").removeClass("open");
        $(".openbtn4").removeClass('active');
    });
});

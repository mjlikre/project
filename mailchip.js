"use strict";
(function ($) {
    $(".nav").slideDown(500);
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    $.extend($.validator.messages, {
        required: "Este campo es obligatorio.",
        remote: "Por favor, rellena este campo.",
        email: "Verifica que tu correo electrónico sea correcto.",
        maxlength: $.validator.format("Por favor, no escribas más de {0} caracteres."),
        minlength: $.validator.format("Por favor, no escribas menos de {0} caracteres."),
        rangelength: $.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
        range: $.validator.format("Por favor, escribe un valor entre {0} y {1}."),
        max: $.validator.format("Por favor, escribe un valor menor o igual a {0}."),
        min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
    });
    var closeBtn = document.getElementById('close-button');
    var successEvent = document.getElementById('mc-embedded-subscribe');
    successEvent.addEventListener('click', function () {
        document.getElementById('mce-responses').style.visibility = "visible";
        document.getElementById('mainView').style.visibility = "collapse";
        return;
    })

    closeBtn.addEventListener('click', function () {
        document.getElementById('mce-responses').style.visibility = "hidden";
        document.getElementById('mainView').style.visibility = "visible";
        validateEmail();
    })
}(jQuery));
$('#mce-EMAIL').keypress(function (e) {
    if (e.which === 32) return false;
})
$('#btnAndroid').click(function () {
    jQuery.noConflict();
    $('#android-form-modal').modal();
})

function validateEmail() {
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var email = $('#mce-EMAIL').val();
    if (testEmail.test(email)) {
        // Disable #x
        $("#mc-embedded-subscribe").prop("disabled", false);
        $("#mc-embedded-subscribe").css({
            "background-image": "linear-gradient(279deg, #fca646, #f55554)", "color": "#ffffff", "box-shadow": "0 8px 20px 0 rgba(254, 113, 69, 0.5);"
        });
    }
    else {
        // Disable #x
        $("#mc-embedded-subscribe").prop("disabled", true);
        $("#mc-embedded-subscribe").css({
            "background-image": "linear-gradient(279deg, #f4f4f4, #f4f4f4)", "color": "#767676", "box-shadow": null
        });
    }
}
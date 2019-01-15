$(document).ready(function() {

    var settings = {

        messageID: '#inputMessage',
        ErrorTextMessage: 'Введите сообщение',
        emailID: '#inputEmail',
        ErrorTextEmail: 'Неверный Email',
        MinCharsPass: '1',
        Name: '#inputName',
        ErrorTextName: 'Введите имя',
        MinCharsName: '1'
    };

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    $(settings.emailID).keyup(function() {
        var email = $.trim($(settings.emailID).val());
        if (email !== 0) {
            if (isValidEmailAddress(email)) {
                $(this).parents('.form-group').addClass('has-success');
                $(this).addClass('form-control-success');
                $(this).parents('.form-group').removeClass('has-danger');
                $(this).removeClass('form-control-danger');
                $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                localStorage.setItem('email', email);
            } else {
                $(this).parents('.form-group').addClass('has-danger');
                $(this).addClass('form-control-danger');
                $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmail);
                $(this).parents('.form-group').find('.text-muted').css('display', 'block');
            }
        } else {
            $(this).parents('.form-group').addClass('has-danger');
            $(this).addClass('form-control-danger');
            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmail);
            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
        }
    });
    $(settings.messageID).keyup(function() {
        var message = $.trim($(settings.messageID).val()).length * 1;
        if (message > Math.round(settings.MinCharsPass - 1)) {
            $(this).parents('.form-group').addClass('has-success');
            $(this).addClass('form-control-success');
            $(this).parents('.form-group').removeClass('has-danger');
            $(this).removeClass('form-control-danger');
            var messageS = $.trim($(settings.messageID).val());
            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
            localStorage.setItem('message', messageS);
        } else if (message < settings.MinCharsPass) {
            $(this).parents('.form-group').addClass('has-danger');
            $(this).addClass('form-control-danger');
            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextMessage);
            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
        }
    });


    $(settings.Name).keyup(function() {
        var name = $.trim($(settings.Name).val()).length * 1;
        if (name > Math.round(settings.MinCharsName - 1)) {
            $(this).parents('.form-group').addClass('has-success');
            $(this).addClass('form-control-success');
            $(this).parents('.form-group').removeClass('has-danger');
            $(this).removeClass('form-control-danger');
            var nameS = $.trim($(settings.Name).val());
            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
            localStorage.setItem('name', nameS);
        } else if (name < settings.MinCharsName) {
            $(this).parents('.form-group').addClass('has-danger');
            $(this).addClass('form-control-danger');
            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextName);
            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
        }
    });


    if (localStorage.getItem('email') || localStorage.getItem('message') || localStorage.getItem('name')) {
        $(settings.emailID).val(localStorage.getItem('email'));
        $(settings.messageID).val(localStorage.getItem('message'));
        $(settings.Name).val(localStorage.getItem('name'));
    }


    $('#submit').on('click', function() {

        window.localStorage.clear();
        var mail = $.trim($(settings.emailID).val());
        var text = $.trim($(settings.messageID).val());
        var nam = $.trim($(settings.Name).val());


        if (mail == '' || text == '' || nam == '') {
            $('.form-group').addClass('has-danger');
            $('.form-control').addClass('form-control-danger');
        } else {
            $("#message").css('display', 'block');
        }
        setTimeout(function() {
            $("#message").hide();
        }, 2000);

    });


});
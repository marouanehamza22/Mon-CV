
$(document).ready(function() {

    $('.progress-bar').each(function() {

        let width = $(this).attr('data-width');
        $(this).animate({
            width: width
        }, 2000);
    });

    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle();

    });

    $('#contactForm').submit(function(e) {

        e.preventDefault();
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(name === '' || email === '' || message === '') {

            $('#formMessage').text('Veuillez remplir tous les champs.')
            .css('color', 'red');

            return;
        }

        if(!email.match(emailPattern)) {

            $('#formMessage').text('Email invalide.')
            .css('color', 'red');

            return;
        }

        $('#formMessage').text('Message envoyé avec succès !')
        .css('color', 'green');

        $('#contactForm')[0].reset();

    });

});
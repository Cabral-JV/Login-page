$(document).ready(function () {
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel)
});

$("#register-form").validate({
    rules: {
        name: {
            required: true,
            minlength: 3
        },
        email: {
            required: true
        },
        pass: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        name: {
            required: "Por favor, informe seu nome",
            minlength: "O nome deve ter pelo menos 3 caracteres"
        },
        email: {
            required: "É necessário informar um email",
            email: "Por favor insira um endereço de e-mail válido."
        },
        pass: {
            required: "Por favor, informe sua senha",
            minlength: "A senha deve ter pelo menos 6 caracteres"
        }
    }
});
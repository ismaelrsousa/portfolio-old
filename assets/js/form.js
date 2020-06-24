$("form.needs-validation").on('submit', function (e) {
    $(this).addClass("was-validated")

    var valid = true

    var inputs = $(this).find("[required]")

    $(inputs).each(function (index, value) {
        if ($(value).val() == "")
            valid = false
    })

    var data = {
        nome: $(this).find("[name=nome]").val(),
        email: $(this).find("[name=email]").val(),
        telefone: $(this).find("[name=telefone]").val(),
        mensagem: $(this).find("[name=mensagem]").val(),
    }

    if (valid)
        sendMail(data)

    e.preventDefault()
})

function sendMail(data) {

    $.ajax({
        url: '/mail.php',
        dataType: 'json',
        data: { data: data },
        method: 'get',
        success: function (data) {
            console.log("SUCCESS")
        },
        error: function (data) {
            console.log(data)
        }
    })
}
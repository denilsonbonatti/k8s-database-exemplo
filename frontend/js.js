$("#btn_salvar").on("click", function() {
    
    var txt_nome = $("#nome").val();
    var txt_mensagem = $("#mensagem").val(); 

    $.ajax({
        url: "http://35.224.5.250:30005/",
        type: "post",
        data: {nome: txt_nome, mensagem: txt_mensagem},
        beforeSend: function() {
            $("#resposta").html("Enviando......");
        }
    }).done(function(e) {
        $("#resposta").html("Dados salvos......");
    })

})

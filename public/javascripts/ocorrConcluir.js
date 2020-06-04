function ocConcluir(e) {
    $.ajax({
        type: 'POST',
        url: "/ocorrencias/concluida",
        data: { id: e, },
        success: function (data) {
            //alert("Curtiu! " + e);
            location.reload();
        },
        erro: function (ex) {
            alert('Falha ao marcar como concluído' + ex);
        }
    });
}
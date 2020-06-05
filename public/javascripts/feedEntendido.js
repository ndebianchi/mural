function entendido(e) {
    $.ajax({
        type: 'POST',
        url: "/inicio/entendido",
        data: { id: e, },
        success: function (data) {
            //alert("Curtiu! " + e);
            location.reload();
        },
        erro: function (ex) {
            alert('Falha ao marcar como entendido' + ex);
        }
    });
}
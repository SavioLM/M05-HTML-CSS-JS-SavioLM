function enviarReserva() {
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataReserva = document.getElementById('data').value;

    const tele = telefone.replace(/\D/g, '');

    if (tele.length == 10 && tele.length == 11) {
        const div = document.getElementById('dadosReserva');
        div.innerHTML = 
        `<h2>Dados da Reserva</h2>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Telefone:</b> ${telefone}</p>
        <p><b>Data da Reserva:</b> ${dataReserva}</p>`;

        document.getElementById('reservaForm').reset();
    } 
    else {
        alert("Digite um número de telefone válido com 10 ou 11 dígitos.");
    }
}

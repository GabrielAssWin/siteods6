function mostrarContainer(numero) {
    // Esconde todos os containers
    document.getElementById('container1').style.display = 'none';
    document.getElementById('container2').style.display = 'none';
    document.getElementById('container3').style.display = 'none';

    // Mostra o container específico
    document.getElementById('container' + numero).style.display = 'block';
}
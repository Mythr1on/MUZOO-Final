<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $dataVisita = $_POST['dataVisita'];
    $horario = $_POST['horario'];
    $numeroVisitantes = $_POST['numeroVisitantes'];
    $comentarios = $_POST['comentarios'];

    echo "<h1>Visita Registrada</h1>";
    echo "<p><strong>Nome:</strong> $nome</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Telefone:</strong> $telefone</p>";
    echo "<p><strong>Data da Visita:</strong> $dataVisita</p>";
    echo "<p><strong>Horário da Visita:</strong> $horario</p>";
    echo "<p><strong>Número de Visitantes:</strong> $numeroVisitantes</p>";
    echo "<p><strong>Comentários:</strong> $comentarios</p>";
}
?>

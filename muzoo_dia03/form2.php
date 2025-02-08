<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $avaliacao_geral = $_POST['avgr'];
    $avaliacao_nec = $_POST['nece'];
    $comentarios = $_POST['comentarios'];

    echo "<h1>Feedback Recebido</h1>";
    echo "<p><strong>Nome:</strong> $nome</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Avaliação Geral:</strong> $avaliacao_geral </p>";
    echo "<p><strong>Avaliação das Necessidades:</strong> $avaliacao_nec </p>";
    echo "<p><strong>Comentários:</strong> $comentarios</p>";
}
?>

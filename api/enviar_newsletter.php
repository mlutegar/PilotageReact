<?php
$servername = "localhost";
$username   = "pilota74_michel";
$password   = "tW1O2i5v&16ymnQ#";
$dbname     = "pilota74_wp434";

// Conectar ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Obter os emails da tabela Newsletter
$sql    = "SELECT email FROM Newsletter";
$result = $conn->query($sql);

$emails = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $emails[] = $row['email'];
    }
}

// Fechar conexão com o banco
$conn->close();

// Assunto do email
$assunto = "Confira os últimos relatórios da Pilotage";

// Mensagem única com link para a página de relatórios
$mensagem = "<html><body>";
$mensagem .= "<h2 style='color: #333;'>📢 Últimos Relatórios Disponíveis!</h2>";
$mensagem .= "<p style='font-size: 16px; color: #666;'>Para ver nossos relatórios mais recentes, acesse:</p>";
$mensagem .= "<p style='font-size: 18px; text-align: center;'><a href='https://pilotage.com.br/home/' style='color: #007bff; text-decoration: none;'>https://pilotage.com.br/home/</a></p>";
$mensagem .= "<hr>";
$mensagem .= "<p style='text-align: center; color: #999;'>Se não quiser mais receber nossos e‑mails, <a href='#' style='color: red;'>clique aqui para cancelar</a>.</p>";
$mensagem .= "</body></html>";

// Headers HTML
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Pilotage <newsletter@pilotage.com.br>" . "\r\n";
$headers .= "Reply-To: contato@pilotage.com.br" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar emails
foreach ($emails as $email) {
    mail($email, $assunto, $mensagem, $headers);
}

echo "Aviso enviado com sucesso!";
?>


<?php
// Veritabanı bilgilerini değiştirin
$host = 'localhost';
$dbname = 'project_chatbot';
$username = 'root';
$password = '';

try {
    // PDO nesnesi oluşturarak veritabanına bağlanma
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    phpinfo();
    // Hata ayıklama modunu etkinleştirme
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Bağlantı başarılı mesajı
   // echo "Veritabanına başarıyla bağlandı.";
} catch (PDOException $e) {
    // Bağlantı hatası durumunda hata mesajını gösterme
    echo "Bağlantı hatası: " . $e->getMessage();
    exit();

}
?>

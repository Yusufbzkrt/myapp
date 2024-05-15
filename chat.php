<?php
require_once 'insert.php';
$oku=$pdo->query("select * from bilgiler",PDO::FETCH_ASSOC);
if($oku!=false && !empty($oku))
{
    foreach ($oku as $veriler){
        $ID=$veriler["ID"];
        $metin=$veriler["metin"];
        $durum=$veriler["durum"];
        print_r("ID: ".$ID." metin:".$metin." durum: ".$durum."<br>");
    }
}
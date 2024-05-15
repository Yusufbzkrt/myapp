<?php 
include('config.php');

if (isset($_GET['message'])){
   $message = $_GET['message'];
   $stmt = $pdo->prepare("SELECT yanit FROM bilgiler WHERE text = ? LIMIT 1");
   $stmt->bindParam(1, $message, PDO::PARAM_STR);
   
   // execute query
   if($stmt->execute()){
      $stmt->bind_result($response_message);
      $stmt->store_result();
      if($stmt->num_rows() == 1){
         $stmt->fetch();
         $result = ['response_message' => $response_message];
         print_r( json_encode($result));
      }else{
         print_r (json_encode(['response_message' => 'what!']));
      }
   }else{
      print_r (json_encode(['response_message' => 'what!']));
   }
}
?>

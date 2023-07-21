<?php
$jsonFilePath = '../bd/servidorBase.json';

if (file_exists($jsonFilePath)) {
  $jsonContent = file_get_contents($jsonFilePath);
  header('Content-Type: application/json');
  echo $jsonContent;
} else {
  header('HTTP/1.1 404 Not Found');
  echo 'Archivo JSON no encontrado.';
}
?>

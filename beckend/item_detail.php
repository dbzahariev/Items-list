<?php
include 'DBConfig.php';

// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

header('Content-Type: application/json; charset=UTF-8');

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$id = $_GET["id"];

$sql = "SELECT * FROM items where id=".$id;

$json = json_encode("Not found row with id: ".$id);

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $json = json_encode($result->fetch_assoc());
} else {
  $json = json_encode("Not found row with id: ".$id);
}

echo $json;
$conn->close();
?>
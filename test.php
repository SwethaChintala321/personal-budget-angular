<?php
session_start();
$number = 0;
if (isset($_POST["value"])) {
    $number = $_POST["value"];
}
if (!isset($_SESSION["myNumber"])) {
    $_SESSION["myNumber"] = 0;
}
$_SESSION["myNumber"] += $number;
?>

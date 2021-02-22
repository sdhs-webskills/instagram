<?php


$servername = "localhost";
$username = "";
$password = "";
$dbname = "myDB";


function execute($sql, $data = []) {

    $db = new PDO("mysql:host=localhost;", "dbname=myDB;", "charset=utf8mb4;", "root", "");
    $result = $db->prepare($sql);
    $result->execute($data);
    $db=null;
    return $result;
}

function fetch($sql, $data = [])
{
    return execute($sql, $data)->fetch(PDO::FETCH_OBJ);
}

function fetchAll($sql, $data = []): array {
    return execute($sql, $data)->fetchAll(PDO::FETCH_OBJ);
}
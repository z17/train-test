<?php

namespace TrainTest;

use PDO;

class Base {
    private $base;

    public function __construct() {
        $this->base = new PDO("mysql:host=" . Config::DB_HOST . ";dbname=" . Config::DB_NAME, Config::DB_USER, Config::DB_PASSWORD);
        $this->base->query("set names utf8");
    }

    public function log(string $type, string $key1, string $key2) {
        $query = "INSERT INTO log (type, key1, key2) VALUES (:type, :key1, :key2)";
        $sql = $this->base->prepare($query);
        $sql->bindParam(':type', $type);
        $sql->bindParam(':key1', $key1);
        $sql->bindParam(':key2', $key2);
        $sql->execute();
    }
}

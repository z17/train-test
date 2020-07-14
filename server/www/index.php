<?php
spl_autoload_register(function ($name) {
    $fileParts = explode('\\', $name);
    $filePath = implode('/', $fileParts) . '.php';
    /** @noinspection PhpIncludeInspection */
    require_once $filePath;
});

use TrainTest\Stats;

header('Access-Control-Allow-Origin: *');

$path = isset($_SERVER["REQUEST_URI"]) ? $_SERVER["REQUEST_URI"] : '';

switch ($path) {
    case Stats::URL:
        $post_data = file_get_contents('php://input');
        $data = json_decode($post_data, true);
        $type = isset($data['type']) ? (string)$data['type'] : '';
        $key1 = isset($data['key1']) ? (string)$data['key1'] : '';
        $key2 = isset($data['key2']) ? (string)$data['key2'] : '';
        $action = new Stats();
        $action->log($type, $key1, $key2);
        break;
    default:
        header("HTTP/1.0 404 Not Found");
        echo 404;
        exit;
        break;
}

<?php

namespace TrainTest;

class Stats {
    const URL = '/stats';

    const ALLOWED_TYPES = [
        'init',
        'start',
        'answer',
        'result',
        'retry'
    ];

    /** @var Base */
    private $db;

    public function __construct() {
        $this->db = new Base();
    }

    public function log(string $type, string $key1, string $key2) {
        if (!in_array($type, self::ALLOWED_TYPES, true)) {
            return;
        }

        $this->db->log($type, $key1, $key2);
    }
}

<?php

namespace TrainTest;

class Stats {
    const URL = '/stats';

    const ALLOWED_TYPES = [
        'init',
        'start',
        'answer',
        'result',
        'retry',
        'post_share_click',
        'story_share_click',
        'post_share',
        'story_share',
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

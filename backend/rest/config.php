<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL ^ (E_NOTICE | E_DEPRECATED));

// Database configuration
define('DB_NAME', 'bosnian_receipes');
define('DB_USER', 'root');
define('DB_PASSWORD', '12345678');
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('JWT_SECRET', 'tn3yuuBqjexaMesTmTKFuSo1GYHZDX');
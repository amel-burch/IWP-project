<?php

require_once __DIR__ . "/rest/services/UserService.class.php";

$payload = $_REQUEST;
echo json_encode($payload);

if($payload['first_name'] == NULL || $payload['last_name'] == NULL || $payload['email'] == NULL) {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => 'Required fields are missing. Please check the documentation for more info.']));
}
$user_service = new UserService();
$user_service->register_user($payload);

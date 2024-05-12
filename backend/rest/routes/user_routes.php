<?php

require 'rest/services/UserService.class.php';

Flight::set('user_service', new UserService());

Flight::route('POST /register', function(){
    $user_service = Flight::get('user_service');
    $user_service->register_user(Flight::request()->data->getData());
});

Flight::route('POST /login', function(){
    $user_service = Flight::get('user_service');
    $user_service->login(Flight::request()->data->getData());
});
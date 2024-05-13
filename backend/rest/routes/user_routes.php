<?php

require 'rest/services/UserService.class.php';

Flight::set('user_service', new UserService());

/**
 * @OA\Post(
 *      path="/register",
 *      tags={"user"},
 *      summary="Register a new user",
 *      @OA\RequestBody(
 *           required=true,
 *           @OA\JsonContent(ref="#/components/schemas/User")
 *      ),
 *      @OA\Response(
 *           response=200,
 *           description="User registered successfully"
 *      )
 * )
 */
Flight::route('POST /register', function(){
    $user_service = Flight::get('user_service');
    $user_service->register_user(Flight::request()->data->getData());
});
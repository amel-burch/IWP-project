<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::route('/*', function(){
    if(strpos(Flight::request()->url, '/auth') === 0){
        return TRUE;
    }

    try {
        $token = Flight::request()->getHeader('Authentication');
        if($token){
            $decoded_token = JWT::decode($token, new Key(JWT_SECRET, 'HS256'));
            Flight::set('user', $decoded_token->user);
            Flight::set('jwt_toke', $token);
            Flight::json([
                'jwt_decoded' => $decoded_token,
                'user' => $decoded_token->user
            ]);
        }
    } catch (\Exception $e){
        Flight::halt(500, $e->getMessage());
    }
});
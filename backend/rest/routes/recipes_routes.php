<?php

require 'rest/services/RecipeService.class.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::set('recipe_service', new RecipeService());

/**
     * @OA\Get(
     *      path="/recipes",
     *      tags={"recipes"},
     *      summary="Get all recipes",
     *      @OA\Response(
     *           response=200,
     *           description="Array of all recipes in the databases"
     *      )
     * )
     */
Flight::route('GET /recipes', function(){
    try {
        $token = Flight::request()->getHeader('Authentication');
        if($token){
            $decoded_token = JWT::decode($token, new Key(JWT_SECRET, 'HS256'));
            $recipes = Flight::get('recipe_service')->get_all_recipes();
            Flight::json($recipes);
        }
    } catch (\Exception $e){
        Flight::halt(500, $e->getMessage());
    } 
});

/**
     * @OA\Get(
     *      path="/recipes/{id}",
     *      tags={"recipes"},
     *      summary="Get single recipes",
     *      @OA\Response(
     *           response=200,
     *           description="Single recipe based on the id"
     *      )
     * )
     */

Flight::route('GET /recipes/@id', function($id){
    $recipe = Flight::get('recipe_service')->get_by_id($id);
    Flight::json($recipe);
});
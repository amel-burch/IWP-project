<?php

require 'rest/services/RecipeService.class.php';
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
    $recipes = Flight::get('recipe_service')->get_all_recipes();
    Flight::json($recipes);
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
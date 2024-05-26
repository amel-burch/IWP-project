<?php

require 'rest/services/RecipeService.class.php';

Flight::set('recipe_service', new RecipeService());

/**
 * @OA\Get(
 *      path="/recipes",
 *      tags={"recipes"},
 *      summary="Get all recipes",
 *      security={
 *          {"ApiKey": {}}
 *      },
 *      @OA\Response(
 *           response=200,
 *           description="Array of all recipes in the databases"
 *      )
 * )
 */
Flight::route('GET /recipes', function () {
    try {
        $recipes = Flight::get('recipe_service')->get_all_recipes();
        Flight::json($recipes);
    } catch (Exception $e) {
        Flight::halt(500, $e->getMessage());
    }
});

/**
 * @OA\Get(
 *      path="/recipes/{id}",
 *      tags={"recipes"},
 *      summary="Get single recipes",
 *      security={
 *          {"ApiKey": {}}
 *      },
 *      @OA\Response(
 *           response=200,
 *           description="Single recipe based on the id"
 *      )
 * )
 */

Flight::route('GET /recipes/@id', function ($id) {
    $recipe = Flight::get('recipe_service')->get_by_id($id);
    Flight::json($recipe);
});
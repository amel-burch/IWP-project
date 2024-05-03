<?php

require 'rest/services/RecipeService.class.php';
Flight::set('recipe_service', new RecipeService());

Flight::route('GET /recipes', function(){
    $recipes = Flight::get('recipe_service')->get_all_recipes();
    Flight::json($recipes);
});

Flight::route('GET /recipes', function(){
    $recipes = Flight::get('recipe_service')->get_all_recipes();
    Flight::json($recipes);
});

Flight::route('GET /recipes/@id', function($id){
    $recipe = Flight::get('recipe_service')->get_by_id($id);
    Flight::json($recipe);
});
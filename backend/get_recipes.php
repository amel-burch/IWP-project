<?php

require_once __DIR__ . "/rest/services/RecipeService.class.php";

$recipe_serials = new RecipeService();
$recipe_serials->get_all_recipes();

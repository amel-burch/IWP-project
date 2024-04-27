<?php

require_once __DIR__ ."@/../dao/RecipeDao.class.php";

class RecipeService {
    private $recipeDao;

    public function __construct(){
        $this->recipeDao = new RecipeDao();
    }

    public function get_all_recipes(){
        return $this->recipeDao->get_all();
    }

    // public function get_recipe($id){
    //     return $this->recipeDao->get_by_id($id);
    // }

    // public function add_recipe($recipe){
    //     $this->recipeDao->add($recipe);
    // }

    // public function update_recipe($id, $recipe){
    //     $this->recipeDao->update($id, $recipe);
    // }

    // public function delete_recipe($id){
    //     $this->recipeDao->delete($id);
    // }
}
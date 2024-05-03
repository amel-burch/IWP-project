<?php

require_once __DIR__ ."@/../dao/BaseDao.class.php";

class RecipeDao extends BaseDao{
    public function __construct(){
        parent::__construct("recipes");
    }

    public function get_all(){
        $query = "SELECT * FROM recipes";
        $res = $this->query($query, []);
        return $res;
    }

    public function get_by_id($id){
        $query = "SELECT recipes.id as id, recipes.name, recipes.posted_at, recipes.preparation_time, recipes.servings, recipes.picture,steps.id as step_id, steps.step_text
                  FROM recipes 
                  join steps
                  WHERE recipes.id = :id";
    
        $res = $this->query($query, ["id" => $id]);

        $query2 = "SELECT ingredients.id as ingredient_id, ingredients.name as ingName
                  FROM recipes 
                  join ingredients
                  WHERE recipes.id = :id";
    
        $res2 = $this->query($query2, ["id" => $id]);


        // Organize the results into a nested array structure
        $recipe = new stdClass();
        $recipe->id = $res[0]['id'];
        $recipe->name = $res[0]['name'];
        $recipe->preparation_time = $res[0]['preparation_time'];
        $recipe->servings = $res[0]['servings'];
        $recipe->picture = $res[0]['picture'];
        $recipe->posted_at = $res[0]['posted_at'];
        $recipe->steps = array();
        $recipe->ingredients = array();
        // echo json_encode($recipe);
        foreach ($res as $row) {
            $step = array(
                "step_id" => $row['step_id'],
                "description" => $row['step_text']
            );
            array_push($recipe->steps, $step);
        }

        foreach ($res2 as $row) {
            $ing = array(
                "ingredient_id" => $row['ingredient_id'],
                "ingName" => $row['ingName']
            );
            array_push($recipe->ingredients, $ing);
        }
    
        // Encode the result into JSON
        return $recipe;
    }
}
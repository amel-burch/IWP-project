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
}
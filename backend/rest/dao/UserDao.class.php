<?php

require_once __DIR__ ."@/../dao/BaseDao.class.php";

class UserDao extends BaseDao{
    public function __construct(){
        parent::__construct("uses");
    }

    public function get_all(){
        $query = "SELECT * FROM users";

        $res = $this->query($query, []);

        return $res;
    }

    public function add($user) {
        return $this->insert('users', $user);
    }
}
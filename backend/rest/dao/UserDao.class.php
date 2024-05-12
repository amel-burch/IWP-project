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

    public function login($email, $password){
        $query = "SELECT * FROM users WHERE email = :email AND password = :password";

        $res = $this->query($query, ["email" => $email, "password" => $password]);

        if (empty($res)) {
            throw new Exception("Invalid email or password", 400);
        } else {
            return $res[0];
        }
    }
}
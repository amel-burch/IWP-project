<?php

require_once __DIR__ ."@/../dao/UserDao.class.php";

class UserService {
    private $userDao;

    public function __construct(){
        $this->userDao = new UserDao();
    }

    public function register_user($user) {
        $user['password'] = password_hash($user['password'], PASSWORD_BCRYPT);
        return $this->userDao->add($user);
    }
}
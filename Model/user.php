<?php

class user{
    private string $email;
    private string $name;
    private string $password;
    private string $phone;

    public function __construct($email, $name, $password, $phone)
    {
        $this -> email = $email;
        $this -> name = $name;
        $this -> password = $password;
        $this -> phone = $phone;
    }

    public function getEmail():string {
        return $this -> email;
    }

    public function getName(): string {
        return $this -> name;
    }
    public function getPhone(): string{
        return $this -> phone;
    }

    public function setEmail($email) {
        $this -> email = $email;

    }

    public function setName($name) {
        $this -> name = $name;
    }

    public function setPassword($password) {
        $this -> password = $password;
    }

    public function setPhone($phone) {
        $this -> phone = $phone;
    }

    public function toString():string {
        return "User[email : ".$this -> email." 
        name : ".$this -> name." 
        phone: ".$this -> phone."]";
    }

}
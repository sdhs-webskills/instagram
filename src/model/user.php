<?php

class User{
    private string $email;
    private string $name;
    private string $phone;
    private string $image;
    private string $introduction;

    public function __construct(string $email, string $name, string $phone, string $image, string $introduction) {
        $this -> email = $email;
        $this -> name = $name;
        $this -> phone = $phone;
        $this -> image = $image;
        $this -> introduction = $introduction;
    }

    public function getEmail(): string {
        return $this -> email;
    }

    public function getName(): string {
        return $this -> name;
    }

    public function getPhone(): string {
        return $this -> phone;
    }

    public function getImage(): string {
        return $this -> image;
    }

    public function getIntroduction(): string {
        return $this -> introduction;
    }

    public function setEmail(string $email) {
        $this -> email = $email;
    }

    public function setName(string $name) {
        $this -> name = $name;
    }

    public function setPhone(string $phone) {
        $this -> phone = $phone;
    }

    public function setImage(string $image) {
        $this -> image = $image;
    }

    public function setIntroduction(string $introduction) {
        $this -> introduction = $introduction;
    }
}
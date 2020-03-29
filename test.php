<?php

class Robot{
    private $name = '';
    function setName($name){
        $this->name = (string).filter_var($name);
    }
}

$a = new Robot;
$a->name = 'sakuma';
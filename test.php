<?php

// class Robot{
//     private $name = '';
    
//     public function __construct($name){
//         $this->setName($name);
//     }
//     public function setName($name){
//         $this->name = (string)filter_var($name);
//     }
//     public function getName(){
//         return $this->name;
//     }
// }



// $a = new Robot('さくま');
// echo $a->getName();

// class stdClass { }
 
 $a = new stdClass;
 $a->name = '佐久間';
 echo $a->name;
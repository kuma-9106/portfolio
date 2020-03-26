<?php

function sum($a,$b,$c)
{
    $total = $a + $b + $c;
    if($total < 0){
        return 0;
    }else{
        return $total;
    }
}

echo sum(200,-300,-99) . PHP_EOL;
echo sum(200,-100,-99) . PHP_EOL;

?>
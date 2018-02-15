<?php
    if($_GET["country"]==1) echo json_encode(array("1"=>"Львів","2"=>"Дрогобич", "3"=>"Самбір"));
    elseif ($_GET["country"]==2) echo json_encode(array("4"=>"San Francisco","5"=>"New York City", "6"=>"Los Angeles"));
    elseif ($_GET["country"]==3) echo json_encode(array("7"=>"Москва","8"=>"Санкт-Петербург", "9"=>"Самара"));
    else echo json_encode(array("0"=="default"));


    ?>
<?php
    $filename = file_get_contents('php://input');
    
    if(unlink("../photos/".$filename)){
        echo "Success";
    }
    
    else {
        echo "Error";
    }
    
?>
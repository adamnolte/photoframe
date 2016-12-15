<?php

    $output = shell_exec("/opt/vc/bin/tvservice -s");
    
    if(strpos($output, "TV is off") !== false) {
        shell_exec("/opt/vc/bin/tvservice -p");
    }
    
    else{
        shell_exec("/opt/vc/bin/tvservice -o");
    }
    
?>
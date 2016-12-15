<?php
    
    //Had to add www-data to sudoers and add tvservice
    $output = shell_exec("sudo /opt/vc/bin/tvservice -s");
    
    if(strpos($output, "TV is off") !== false) {
        shell_exec("sudo /opt/vc/bin/tvservice -p");
    }
    
    else{
        shell_exec("sudo /opt/vc/bin/tvservice -o");
    }
    
?>
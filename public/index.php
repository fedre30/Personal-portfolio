<?php
require_once '../vendor/mobiledetect/mobiledetectlib/Mobile_Detect.php';
$detect = new Mobile_Detect;

if ( $detect->isMobile() ) {
    include '../src/mobile.php';
}

else{
    include '../src/desktop.php';
}



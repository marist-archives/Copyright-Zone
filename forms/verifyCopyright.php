<?php
error_reporting(0);
session_start();
// Create new $_SESSION variables corresponding with the fields of the associated forms.
$_SESSION['Name']= $_POST['Name'];
$_SESSION['Email']= $_POST['Email'];
$_SESSION['Phone_Num']= $_POST['Phone_Num'];
$_SESSION['Extension']= $_POST['Extension'];
$_SESSION['Marist_Status']= $_POST['Marist_Status'];
$_SESSION['PubYear']= $_POST['PubYear'];
$_SESSION['Start_Page']= $_POST['Start_Page'];
$_SESSION['End_Page']= $_POST['End_Page'];
$_SESSION['Reuse_Book']= $_POST['Reuse_Book'];
$_SESSION['Num_Students']= $_POST['Num_Students'];
$_SESSION['Comments']= $_POST['Comments'];

if (isset($_SESSION['simpleCaptchaAnswer']) && $_POST['captchaSelection'] == $_SESSION['simpleCaptchaAnswer']) {

     // START "CAPTCHA CORRECTLY VERIFIED" ELSE BLOCK
     // CODE TO HANDLE SUCCESSFUL VERIFICATION
    
                    $_SESSION['incorrectCaptcha'] = null;
                    $_SESSION['incorrectCaptcha'] = 'false';
            
    function randomAlphaNum($length){ 
    
        $rangeMin = pow(36, $length-1); //smallest number to give length digits in base 36 
        $rangeMax = pow(36, $length)-1; //largest number to give length digits in base 36 
        $base10Rand = mt_rand($rangeMin, $rangeMax); //get the random number 
        $newRand = base_convert($base10Rand, 10, 36); //convert it 
        return $newRand; //spit it out 
    
    } 
    $referenceNo = randomAlphaNum(10);
                
$to      = 'monish.singh1@marist.edu'; // Change the email address and other fields to be displayed on the email depending on the associated form
$subject = 'Copyright Clearance (Reference No. ' . $referenceNo . ')';
$message ='
Name: '. $_SESSION['Name'] . '
Email: '. $_SESSION['Email'] . '
Telephone Number: '. $_SESSION['Phone_Num'] .'
Extension: '. $_SESSION['Extension'] .'
Marist Status: '. $_SESSION['Marist_Status'] .'
Publication Year: '. $_SESSION['PubYear'] . '
Page Range: '. $_SESSION['Start_Page'] . ' - ' . $_SESSION['End_Page'] . '
Reuse entire book? '. $_SESSION['Reuse_Book'] . '
Number of Students: '. $_SESSION['Num_Students'] . '
Comments: '. $_SESSION['Comments'];
            
    $headers = 'From:' . $_SESSION['Email']. "\r\n" . 'X-Mailer: PHP/' . phpversion();
    
    if (mail($to, $subject, $message, $headers)) {
    	$_SESSION['Message'] = 'Thank You. Your request has been sent to James A. Cannavino Library staff (845) 575-3292. Your tracking number is: '. $referenceNo;
    } else {
      		$_SESSION['Message'] = 'An Error occurred during the submission of your form. Please try again.';
      }
    
    echo 1;
} else {
	//CODE IF CAPTCHA VERIFICATION FAILED
	$_SESSION['incorrectCaptcha'] = null;
	$_SESSION['incorrectCaptcha'] = 'true';
	    
	echo 0;
  }
                
?>
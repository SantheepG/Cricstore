<!--Timer calculation-->
			var timer;
            var min = 2;
            var sec = 60;
            var min2; 
			var sec2;
            
            window.onload = function timecount(){
                timer = setInterval(function(){ 
                    sec--;
                    if (min == 0 && sec == 0){
                        clearTimeout(timer);
                        document.getElementById("box").innerHTML = "Your session finished"
                        }
                    else if(sec == 00){
                        min--;
                        sec = 60;
                    }
                     document.getElementById("timer").innerHTML =   "COUNTDOWN " + min + " : " + sec  ;  
                    },1000);
         		 }
				 				
	<!--Answer validation-->
	function check(){
	clearTimeout(timer);
		var ans1Arr = document.getElementsByName("q1");
		var ans1Arr = document.getElementsByName("q1");
        var ans2Arr = document.getElementsByName("q2");
        var ans3Arr = document.getElementsByName("q3");
        var ans4Arr = document.getElementsByName("q4");
        var ans5Arr = document.getElementsByName("q5");
        var ans6Arr = document.getElementsByName("q6");
        var ans7Arr = document.getElementsByName("q7");
        var ans8Arr = document.getElementsByName("q8");
        var ans9Arr = document.getElementsByName("q9");
        var ans10Arr = document.getElementsByName("q10");	
		var correct = 0;

		
		var ans1Select = " "; var ans2Select = " "; var ans3Select = " "; var ans4Select = " "; var ans5Select = " ";
        var ans6Select = " "; var ans7Select = " "; var ans8Select = " "; var ans9Select = " "; var ans10Select = " ";
				
				
	        //Question1
                for (var i=0; i< ans1Arr.length;i++){
                    if (ans1Arr[i].checked){
                        ans1Select = ans1Arr[i].value;
                        break;
                    }
                }
                if (ans1Select == " ") {
                    document.getElementById("answer1").innerHTML = "You did not select an answer" ;
					document.getElementById("answer1").style.color = "red";
                }
                else if(ans1Select == "16") {
                    document.getElementById("answer1").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer1").style.color = "green";
                }
                else {
                    document.getElementById("answer1").innerHTML = "Incorrect Answer!!! Correct Answer is 16." ;
                    correct--;
					document.getElementById("answer1").style.color = "red";
                }
                
                //Question2
                for (var i=0; i< ans2Arr.length;i++){
                    if (ans2Arr[i].checked){
                        ans2Select = ans2Arr[i].value;
                        break;
                    }
                }
                
                if (ans2Select == " ") {
                    document.getElementById("answer2").innerHTML = "You did not select an answer" ;
					document.getElementById("answer2").style.color = "red";
                }
                else if(ans2Select == "1992") {
                    document.getElementById("answer2").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer2").style.color = "green";
                }
                else {
                    document.getElementById("answer2").innerHTML = "Incorrect Answer!!! Correct Answer is 1992." ;
                    correct--;
					document.getElementById("answer2").style.color = "red";
                }
                
                //Question3
                for (var i=0; i< ans3Arr.length;i++){
                    if (ans3Arr[i].checked){
                        ans3Select = ans3Arr[i].value;
                        break;
                    }
                }
                
                if (ans3Select == " ") {
                    document.getElementById("answer3").innerHTML = "You did not select an answer" ;
					document.getElementById("answer3").style.color = "red";
                }
                else if(ans3Select == "England") {
                    document.getElementById("answer3").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer3").style.color = "green";
                }
                else {
                    document.getElementById("answer3").innerHTML = "Incorrect Answer!!! Correct Answer is England." ;
                    correct--;
					document.getElementById("answer3").style.color = "red";
                }
                
                //Question4
                for (var i=0; i< ans4Arr.length;i++){
                    if (ans4Arr[i].checked){
                        ans4Select = ans4Arr[i].value;
                        break;
                    }
                }
                
                if (ans4Select == " ") {
                    document.getElementById("answer4").innerHTML = "You did not select an answer" ;
					document.getElementById("answer4").style.color = "red";
                }
                else if(ans4Select == "21") {
                    document.getElementById("answer4").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer4").style.color = "green";
                }
                else {
                    document.getElementById("answer4").innerHTML = "Incorrect Answer!!! Correct Answer is 21." ;
                    correct--;
					document.getElementById("answer4").style.color = "red";
                }
                
                //Question5
                for (var i=0; i< ans5Arr.length;i++){
                    if (ans5Arr[i].checked){
                        ans5Select = ans5Arr[i].value;
                        break;
                    }
                }
                
                if (ans5Select == " ") {
                    document.getElementById("answer5").innerHTML = "You did not select an answer" ;
					document.getElementById("answer5").style.color = "red";
                }
                else if(ans5Select == "73 mm") {
                    document.getElementById("answer5").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer5").style.color = "green";
                }
                else {
                    document.getElementById("answer5").innerHTML = "Incorrect Answer!!! Correct Answer is 73mm." ;
                    correct--;
					document.getElementById("answer5").style.color = "red";
                }
                
                //Question6
                for (var i=0; i< ans6Arr.length;i++){
                    if (ans6Arr[i].checked){
                        ans6Select = ans6Arr[i].value;
                        break;
                    }
                }
                
                if (ans6Select == " ") {
                    document.getElementById("answer6").innerHTML = "You did not select an answer" ;
					document.getElementById("answer6").style.color = "red";
                }
                else if(ans6Select == "All of these") {
                    document.getElementById("answer6").innerHTML = "Your Answer is Correct!!!" ;
                    correct +=2;
					document.getElementById("answer6").style.color = "green";
                }
                else {
                    document.getElementById("answer6").innerHTML = "Incorrect Answer!!! Correct Answer is All of these. " ;
                    correct--;
					document.getElementById("answer6").style.color = "red";
                }
                
                //Question7
                for (var i=0; i< ans7Arr.length;i++){
                    if (ans7Arr[i].checked){
                        ans7Select = ans7Arr[i].value;
                        break;
                    }
                }
                
                if (ans7Select == " ") {
                    document.getElementById("answer7").innerHTML = "You did not select an answer" ;
					document.getElementById("answer7").style.color = "red";
                }
                else if(ans7Select == "2") {
                    document.getElementById("answer7").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer7").style.color = "green";
                }
                else {
                    document.getElementById("answer7").innerHTML = "Incorrect Answer!!! Correct Answer is 2 years." ;
                    correct--;
					document.getElementById("answer7").style.color = "red";
                }
                
                //Question8
                for (var i=0; i< ans8Arr.length;i++){
                    if (ans8Arr[i].checked){
                        ans8Select = ans8Arr[i].value;
                        break;
                    }
                }
                
                if (ans8Select == " ") {					
                    document.getElementById("answer8").innerHTML = "You did not select an answer" ;
					document.getElementById("answer8").style.color = "red";
                }
                else if(ans8Select == "2") {					
                    document.getElementById("answer8").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer8").style.color = "green";
                }
                else {					
                    document.getElementById("answer8").innerHTML = "Incorrect Answer!!! Correct Answer is 2 points." ;
                    correct--;
					document.getElementById("answer8").style.color = "red";
                }
                
                //Question9
                for (var i=0; i< ans9Arr.length;i++){
                    if (ans9Arr[i].checked){
                        ans9Select = ans9Arr[i].value;
                        break;
                    }
                }
                
                if (ans9Select == " ") {					
                    document.getElementById("answer9").innerHTML = "You did not select an answer" ;
					document.getElementById("answer9").style.color = "red";
                }
                else if(ans9Select == "16") {					
                    document.getElementById("answer9").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer9").style.color = "green";
                }
                else {					
                    document.getElementById("answer9").innerHTML = "Incorrect Answer!!! Correct Answer is 16." ;
                    correct--;
					document.getElementById("answer9").style.color = "red";
                }
                
                //Question10
                for (var i=0; i< ans10Arr.length;i++){
                    if (ans10Arr[i].checked){
                        ans10Select = ans10Arr[i].value;
                        break;
                    }
                }
                
                if (ans10Select == " ") {					
                    document.getElementById("answer10").innerHTML = "You did not select an answer" ;
					document.getElementById("answer10").style.color = "red";
                }
                else if(ans10Select == "180") {					
                    document.getElementById("answer10").innerHTML = "Correct answer!!!" ;
                    correct +=2;
					document.getElementById("answer10").style.color = "green";
                }
                else {					
                    document.getElementById("answer10").innerHTML = "Incorrect Answer!!! Correct Answer is  180." ;
                    correct--;
					document.getElementById("answer10").style.color = "red";
                }
				
	if (correct<0){
	correct=0;
	}							
	
	//gif and the message according marks obtained
	var messages = ["You are FULLY LOADED!!!","AWESOME JOB!!!", "Good job!!!", "But don't worry...Practice makes perfect!!!"];
	var image= ["images/stars.gif","images/great.gif","images/good.gif","images/sad.gif"];
	
	//Change background color according marks obtained
	var score;
	if (correct ==20) {
		score = 0;
		{
    document.getElementById("quiz").style.backgroundColor = "#3cb371";
		}
		
	}
	else if (correct >14) {
		score = 1;
		{
    document.getElementById("quiz").style.backgroundColor = "#3cb371";
		}		
	}
	else if (correct > 8) {
		score = 2;
		{
    document.getElementById("quiz").style.backgroundColor = "#ffa500";
		}
	}
	else  {
		score = 3;
		 {
    document.getElementById("quiz").style.backgroundColor = "#800000";
		}
	} 
	
	min2 = 2 - min;
	sec2 = 60 - sec;
	       
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You scored " + correct + "/20."+  " It took you " + min2 + " Minutes and " + sec2 + " Seconds to complete."; 
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src =  image[score];
	}	
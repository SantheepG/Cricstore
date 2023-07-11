
function message(frm) {
    if ((fullName.value.trim() == "") || (email.value.trim() == "" ) || (feedback.value.trim()  == "")) {
        alert("Hey! You haven't filled out the entire form!\nDouble-check everything!");
    } else {
        alert("Form filled successfully!");
    }
}

function checkMessage(frm) {
  
    var name=document.getElementById('fullName').value;
    var emailAddress = document.getElementById('email').value;
    var subj = document.getElementById('subject').value;
    var detail=document.getElementById('feedback').value;
    var btn1 = document.getElementById('viewQueryBtn');
    //console.log(btn1);
    var btn2 = document.getElementById('checkBtn');
    //console.log(btn2);
    

    if ((name.trim() == "") || (emailAddress.trim() == "" ) || (detail.trim()  == "")) { 
        alert("Hey! You haven't filled out the entire form!\nDouble-check everything!");
    } else {
        alert("Form filled successfully!");
        var elms = document.getElementById('formArea');
        elms.innerHTML = ''; 


        const para1 = document.createElement("p");
        para1.innerHTML = "Full Name: "+ name; 
        elms.appendChild(para1);

        const para2 = document.createElement("p");
        para2.innerHTML = "Email address: "+ emailAddress; 
        elms.appendChild(para2);

        const para3 = document.createElement("p");
        para3.innerHTML = "Query Subject: "+ subj; 
        elms.appendChild(para3);

        const para4 = document.createElement("p");
        para4.innerHTML = "Query Details: "+ detail; 
        elms.appendChild(para4);

        var btn1 = document.createElement('button');
        btn1.type = 'button';
        btn1.innerHTML = 'Edit';
        btn1.id='viewQueryBtn';

        var btn2 = document.createElement('button');
        btn2.type = 'button';
        btn2.innerHTML = 'Send';
        btn2.id='checkBtn';

        elms.appendChild(btn1);
        // console.log(elms) elms mean=elements

        elms.appendChild(btn2);  
 
        btn1.onclick = function() {
            var elms = document.getElementById("formArea");
            elms.innerHTML =` <h2>Query Form</h2>
            <!--Name Input field-->
            <label for="fullName">Full Name: </label><br>
            <input type="text" name="fullName" id="fullName" placeholder="Enter your full name" size="30" value="`+name+`"><br>

            <!--Email input field-->
            <label for="email">Email address: </label><br>
            <input type="text" name="email" id="email" placeholder="Email address" size="30" value="`+emailAddress+`"><br>

            <!--Pop up list-->
            <label for="subject">Query Subject: </label><br>
            <select name="Subject" id="subject" value="`+subj+`" >
                <option value="delivery">Delivery</option>
                <option value="warranty">Warranty</option>
                <option value="bulkPriceDiscount">Bulk Price Discount</option>
                <option value="other">Other</option>
            </select> <br>

            <!--Textarea-->
            <label for="feedback">Query Details: </label> <br>
            <textarea name="feedback" id="feedback" placeholder="Details" cols="31" rows="10" value="`+detail+`"></textarea> <br>

            <!--View Query button-->
            <button name="viewQueryBtn" onclick="message()" id="viewQueryBtn">View Query</button>

            <!--Check button-->
            <button name="checkBtn" onclick="checkMessage()" id="checkBtn">Check</button>`;

        }
        
        btn2.onclick = function() {
            var elms = document.getElementById("formArea");
            elms.innerHTML = `
            <form action="mailto:thamindu.20210343@iit.ac.lk" method="post" id="email_form">

                <!-- replace value with your access token -->
                <input type="hidden" name="fullName" value="`+name+`" >
                <input type="hidden" name="email" value="`+emailAddress+`" >
                <input type="hidden" name="Subject" value="`+subj+`" >
                <input type="hidden" name="feedback" value="`+detail+`" >

                <input id="submit_form" type="submit" value="Click here">
            </form>`;
        }
    }
}


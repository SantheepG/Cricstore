function DisplayCart() {
   document.getElementById("myCart").classList.toggle("show");
} 
/*-----------------------------------------------------------------*/
function CheckOut(){
	personalinfo.style.display = "block";
}
/*-----------------------------------------------------------------------------------------------------------*/

let total_count=0;
let price=0;
let productArray = [];
let priceArray = [];

let item1=0;
let item2=0;
let item3=0;
let item4=0;

document.getElementById("btn1").addEventListener("click", product1);
document.getElementById("btn1").addEventListener("click", TotalCount);

document.getElementById("btn2").addEventListener("click", product2);
document.getElementById("btn2").addEventListener("click", TotalCount);

document.getElementById("btn3").addEventListener("click", product3);
document.getElementById("btn3").addEventListener("click", TotalCount);

document.getElementById("btn4").addEventListener("click", product4);
document.getElementById("btn4").addEventListener("click", TotalCount);
    
function TotalCount () {
   total_count++;
   document.getElementById("total-count").innerHTML=total_count;
   alert ("Item added to Cart");
}

function ClearTotal(){
   total_count=0;
   item1=0;
   item2=0;
   item3=0;
   item4=0;
   productArray= [];
   priceArray.length = [];

   document.getElementById("total-count").innerHTML="";
   document.getElementById("product-show").innerHTML="";
   document.getElementById("price-show").innerHTML="";
   document.getElementById("totalprice").innerHTML="Cart is Empty";
   document.getElementById("total-count").innerHTML="0";
   document.getElementById("qty1").innerHTML="";
   document.getElementById("qty2").innerHTML="";
   document.getElementById("qty3").innerHTML="";
   document.getElementById("qty4").innerHTML="";
}

function product1() {
 item1++;
 
 let pName = document.getElementById("btn1").name;
 let pPrice = parseInt(document.getElementById("btn1").value);
 productArray.push(pName);
 priceArray.push(pPrice);
 let e="";
 let f="";
 for (let i=0; i<productArray.length; i++){
 	e+= "<br/>" + productArray[i]+"<br/>";
 }
 for (let j=0; j<priceArray.length; j++){
  	f+= "<br/>" + priceArray[j]+"<br/>";
 }
 price+=pPrice;
 document.getElementById("product-show").innerHTML=e;
 document.getElementById("price-show").innerHTML=f;
 document.getElementById("totalprice").innerHTML="Total amount to pay: Rs "+price;
 document.getElementById("qty1").innerHTML=item1;
}

  function product2() {
 	item2++;
 
  
  let pName = document.getElementById("btn2").name;
  let pPrice = parseInt(document.getElementById("btn2").value);
  productArray.push(pName);
  priceArray.push(pPrice);
  let e="";
  let f="";
  for (let i=0; i<productArray.length; i++){
  e+= "<br/>" + productArray[i]+"<br/>";
  }
  for (let j=0; j<priceArray.length; j++){
  f+= "<br/>" + priceArray[j]+"<br/>";
  }
  price+=pPrice;
  document.getElementById("product-show").innerHTML=e;
  document.getElementById("price-show").innerHTML=f;
  document.getElementById("totalprice").innerHTML="Total amount to pay: Rs "+price;
  document.getElementById("qty2").innerHTML=item2;
  }

function product3() {
 item3++;
 
 let pName = document.getElementById("btn3").name;
 let pPrice = parseInt(document.getElementById("btn3").value);
 productArray.push(pName);
 priceArray.push(pPrice);
 let e="";
 let f="";
 for (let i=0; i<productArray.length; i++){
 	e+= "<br/>" + productArray[i]+"<br/>";
 }
 for (let j=0; j<priceArray.length; j++){
  	f+= "<br/>" + priceArray[j]+"<br/>";
 }
 price+=pPrice;
 document.getElementById("product-show").innerHTML=e;
 document.getElementById("price-show").innerHTML=f;
 document.getElementById("totalprice").innerHTML="Total amount to pay: Rs "+price;
 document.getElementById("qty3").innerHTML=item3;
}

function product4() {
  item4++;
 
 let pName = document.getElementById("btn4").name;
 let pPrice = parseInt(document.getElementById("btn4").value);
 productArray.push(pName);
 priceArray.push(pPrice);
 let e="";
 let f="";
 for (let i=0; i<productArray.length; i++){
 	e+= "<br/>" + productArray[i]+"<br/>";
 }
 for (let j=0; j<priceArray.length; j++){
  	f+= "<br/>" + priceArray[j]+"<br/>";
 }
 price+=pPrice;
 document.getElementById("product-show").innerHTML=e;
 document.getElementById("price-show").innerHTML=f;
 document.getElementById("totalprice").innerHTML="Total amount to pay: Rs "+price;
 document.getElementById("qty4").innerHTML=item4;
}

/*-----------------------------------------------------------------------------------------------------------*/
    function formValidation(){
      let mail_format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
      if (customer_name.value.length>0 && email.value.length>0) {
      	if (email.value.match(mail_format)) {
          ProceedtoPay();
      		return true;
      	}
      	else{
      		alert("Invalid Email. Please try again");
      		return false
      	}
      }
      else{
      	alert("Required fields are empty");
      	return false;
      }
    }

/*-----------------------------------------------------------------------------------------------------------*/

 function ProceedtoPay() {
  invoice.style.display = "block";
  let CName=document.getElementById("customer_name").value;
  let Email= document.getElementById("email").value;
  let Invoice="<br/>"+ "Name : " + CName + "<br/>" + "E-mail : " + Email + "<br/>" + "Invoice"+"<br/>" + "-------------------------------------------------"+"<br/>"+"Total amount: Rs "+price+"<br/>"+"-------------------------------------------------";  
  

  if (item1>0){
    Invoice+="<br/>" + "Product : SL Jersey (M)" + "<br/>" + "Quantity : " + item1 + "<br/>" + "Price : Rs 1 300"+"<br/>";
  }
  if (item2>0){
    Invoice+="<br/>" + "Product : Indian Jersey (L)" + "<br/>" + "Quantity : " + item2 + "<br/>" + "Price : Rs 1 500"+"<br/>";
  }
  if (item3>0){
    Invoice+="<br/>" + "Product : Kookaburra Turf Cricket Bal" + "<br/>" + "Quantity : " + item3 + "<br/>" + "Price : Rs 7 200"+"<br/>";
  }
  if (item4>0){
    Invoice+="<br/>" + "Product : NewBalance DC580 Cricket bat" + "<br/>" + "Quantity : " + item4 + "<br/>" + "Price : Rs 10 000"+"<br/>";
  }
  
  document.getElementById("invoice-content").innerHTML=Invoice;
}


function cancelPay(){
  invoice.style.display = "none";
  personalinfo.style.display="none";
}



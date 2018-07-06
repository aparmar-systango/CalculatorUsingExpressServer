function add(num1,num2){
    var result;
    if(num1.trim().length==0 ||num2.trim().length==0 ){
        document.getElementById("resultSection").innerHTML = 'please provide both numbers';
        return;
    }
    jQuery.ajax({
        type: "GET",
        url: "http://localhost:3000/calculator/add",
        data: {
            num1: num1,
            num2: num2
        },
        success: (response)=>{
            document.getElementById("resultSection").innerHTML = response.result;        
        },
        onerror: (error)=>{
            document.getElementById("resultSection").innerHTML = error.message;        
        }
    });
}
function division(num1,num2){
    var result;
    document.getElementById("resultSection").innerHTML = "";
    if(num1.trim().length==0 ||num2.trim().length==0 ){
        document.getElementById("resultSection").innerHTML = 'please provide both numbers';
       return;
    }
    jQuery.ajax({
        type: "GET",
        url: "http://localhost:3000/calculator/divide",
        data: {
            num1: num1,
            num2: num2
        },
        success: (response)=>{
            document.getElementById("resultSection").innerHTML = response.result;        
        },
        onerror: (error)=>{
            document.getElementById("resultSection").innerHTML = error.message;        
        }
    });
}
function substract(num1,num2){ 
	var result;
    if(num1.trim().length==0 ||num2.trim().length==0 ){
        document.getElementById("resultSection").innerHTML = 'please provide both numbers';
        return;
    }
    jQuery.ajax({
        type: "GET",
        url: "http://localhost:3000/calculator/substract",
        data: {
            num1: num1,
            num2: num2
        },
        success: (response)=>{
            document.getElementById("resultSection").innerHTML = response.result;        
        },
        onerror: (error)=>{
            document.getElementById("resultSection").innerHTML = error.message;        
        }
    });
}
function multiply(num1, num2)
{
	var result= num1*num2;
    if(num1.trim().length==0 ||num2.trim().length==0 ){
        document.getElementById("resultSection").innerHTML = 'please provide both numbers';
        return;
    }
	jQuery.ajax({
        type: "GET",
        url: "http://localhost:3000/calculator/multiply",
        data: {
            num1: num1,
            num2: num2
        },
        success: (response)=>{
            document.getElementById("resultSection").innerHTML = response.result;        
        },
        onerror: (error)=>{
            document.getElementById("resultSection").innerHTML = error.message;        
        }
    });
}

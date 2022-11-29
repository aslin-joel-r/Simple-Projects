let num1,num2,num;
let len1,len2;
let operation,_fun,ans;

function but(num){
    document.getElementById("lab1").value+=num;
}

function oper(_fun){
        num1=document.getElementById("lab1").value;
        document.getElementById("lab1").value+=_fun;
        operation=_fun;
        console.log(" num1 is "+num1)
        len1=num1.length+1
        console.log("len1 is"+len1)
    }
   
   function deletes(){
        document.getElementById("lab1").value="";
    }

    function equals(){
        let num3=document.getElementById("lab1").value;
        len2=num3.length
        num2=num3.slice(len1,len2)
        console.log("num2 is"+num2)
        console.log("len2 is"+len2)
        
        switch(operation){
            case "+":
                ans=Number(num1)+Number(num2);
                console.log("Ans is :"+ans);
                document.getElementById("lab1").value+=" =";
                document.getElementById("lab1").value+=ans;
                break;
            
            case "-":
                ans=Number(num1)-Number(num2);
                console.log("Ans is :"+ans);
                document.getElementById("lab1").value+="=";
                document.getElementById("lab1").value+=ans;
                break;
            
            case "*":
                ans=Number(num1)*Number(num2);
                console.log("Ans is :"+ans);
                document.getElementById("lab1").value+="=";
                document.getElementById("lab1").value+=ans;
                break;
                    
                    
            case "/":
                ans=Number(num1)/Number(num2);
                console.log("Ans is :"+ans);
                document.getElementById("lab1").value+="=";
                document.getElementById("lab1").value+=ans;
                break;
        }
    
    }
   


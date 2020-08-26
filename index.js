
function addsubject()  //Function to Add subjects Dynamically
{
    var cform=document.getElementById("subject2").innerHTML;
    document.getElementById("demo12").innerHTML=cform;
    
}


function testjs()
{
    var nametext=document.getElementById("name").value; //fetch the value from registration page
    localStorage.setItem("studname",nametext);         // value stored in local sorage
    var rolll=document.getElementById("rollno").value;
    localStorage.setItem("studroll",rolll);
    var a=document.getElementById("sub1").value;
    localStorage.setItem("subject1",a);
    var b=document.getElementById("sub2").value;
    localStorage.setItem("subject2",b);
    var c=document.getElementById("sub3").value;
    localStorage.setItem("subject3",c);
    var d=document.getElementById("sub4").value;
    localStorage.setItem("subject4",d);
    var e=document.getElementById("sub5").value;
    localStorage.setItem("subject5",e);
    var f=document.getElementById("mark1").value;
    localStorage.setItem("marks1",f);
    var g=document.getElementById("mark2").value;
    localStorage.setItem("marks2",g);
    var h=document.getElementById("mark3").value;
    localStorage.setItem("marks3",h);
    var i=document.getElementById("mark4").value;
    localStorage.setItem("marks4",i);
    var j=document.getElementById("mark5").value;
    localStorage.setItem("marks5",j);



    
    var z1=document.myForm.selector1.value;
    var z2=document.myForm.selector2.value;
    var z3=document.myForm.selector3.value;
    var z4=document.myForm.selector4.value;
    var z5=document.myForm.selector5.value;

    //calculation of total marks
    var zsum=eval(parseInt(z1)+parseInt(z2)+parseInt(z3)+parseInt(z4)+parseInt(z5));
    localStorage.setItem("zval",zsum);


    //Calculation the Sum of All Marks
    var sum=eval(parseFloat(document.myForm.mark1.value)+parseFloat(document.myForm.mark2.value)
     +parseFloat(document.myForm.mark3.value)+parseFloat(document.myForm.mark4.value)+parseFloat(document.myForm.mark5.value));
        localStorage.setItem("sum1",sum);

    //Calculation of Percentage Of marks
    var percentage=eval(parseFloat(sum*100)/zsum);
        percentage2=percentage.toFixed(2)+"%";
        localStorage.setItem("percentage1",percentage2);



    

    switch(true)
    {
        case(percentage>=75):         //condition
            g="Pass with Distinction";
            localStorage.setItem("grade1",g); //stores the grade in local storage
            break;
        case(percentage<=75 && percentage>=60):
            g="Pass with First class";
            localStorage.setItem("grade1",g);
            break;
        case(percentage<=60 && percentage>=35):
            g="Pass";
            localStorage.setItem("grade1",g);
            break;
        case(percentage<=35):
            g="Fail";
            
            localStorage.setItem("grade1",g);
            break;
    }   
    return false;
}


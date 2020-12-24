var sub1 =prompt("Enter the marks of 1st Subject");
var marks1 =parseInt(sub1);
var sub2 =prompt("Enter the marks of 2nd Subject");
var marks2 =parseInt(sub2);
var sub3 =prompt("Enter the marks of 3rd Subject");
var marks3 =parseInt(sub3);
var total =marks1+marks2+marks3/3;
var avg = parseInt(total);
if(avg>80)
{
    console.log = prompt("Admission Granted!");
}
else
{
    console.log = prompt("Admission not Granted!");
}
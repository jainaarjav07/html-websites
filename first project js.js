    // function abc()
    // {
    //     var retVal=confirm("Do you want to continue?");
    //     if(retVal==true){
    //         document.write("User wants to continue");
    //         return true;
    //     }
    //     else{
    //         document.write("user does not want to continue");
    //         return false;
    //     }
    // }
    // function abc2()
    // {
    //     var retVal=prompt("Enter your name: ","your name here");
    //         document.write("You have entered:"+retVal);

    // }

    // var names = ["Rohit","Rahul","Virat"];
    // document.getElementById("def")= names[0];

    // var person={
    //     firstName:"Rahul",
    //     lastName : "Sharma",
    //     age    : 50
    // };

    // document.getElementById("def").innerHTML=person.fristName + "is" + person.age + "years old.";

    // document.getElementById("pqr").innerHTML=typeof "Rahul"+"<br>"+typeof 3.14

    // //     window.alert("Welcome to LPU")
    //     document.write("HTML Alert Dialog Box Example")
    //     document.getElementById("ab").innerHTML="LPU expects some better placements out of you.";
    // }

    
    // var d=new Date();
    // var day=d.getDay();
    // var daymonth=d.getDate();
    // document.getElementById("stu").innerHTML=day


    var d=new Date();
    var day=d.getDay();
    
    switch(day){
        case 0:
            day="Sunday"
            break;
        case 1:
            day="Monday"
            break;
        // default:
        //     default day="Weekday"  
    }
    document.getElementById("stu").innerHTML=day
    document.write("its a weekend")

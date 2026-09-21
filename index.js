// function showAlert(message){
//         var alertBox=document.getElementById("alertBox");
//         alertBox.innerText=message;
//         alertBox.style.backgroundColor="rgb(60, 63, 63)";
//         alertBox.style.color="rgb(123, 117, 48)";
//         // alertBox.style.position="fixed";
//     }


// function submitting()
// {
//     var name=document.getElementById("name1").value;
//     var email=document.getElementById("email1").value;
//     var msg=document.getElementById("msg1").value;
//     var btn=document.getElementById("btn1").value;

//     console.log("Name:",name);
//     console.log("Email:",email);
//     console.log("Message:",msg);

    
//     if(name==""&&email==""&&msg=="")
//         showAlert("Please enter your details");
//     else if(email=="")
//         showAlert("Please enter your email");
//     else if(msg=="")
//         showAlert("Please enter your message");
//     else if(name=="")
//         showAlert("Please enter your name");
//     else
//         showAlert("Thank you! Your message has been submitted");
// }

function submitting()
{
    var name=document.getElementById("name1").value;
    var email=document.getElementById("email1").value;
    var msg=document.getElementById("msg1").value;
    var btn=document.getElementById("btn1").value;

    if(name==""&&email==""&&msg==""){
        alert("Please enter your details");
    }
    else if(email=="")
        alert("Please enter your email");
    else if(msg=="")
        alert("Please enter your message");
    else if(name=="")
        alert("Please enter your name");
    else
        alert("Thank you! Your message has been submitted");
}

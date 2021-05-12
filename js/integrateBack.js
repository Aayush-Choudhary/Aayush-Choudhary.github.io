function sendMessage()
{
    let name = document.getElementById("dev_name").value;
    if(name === "")
    {
        return
    }
    let email = document.getElementById("dev_email").value;
    if(email === "")
    {
        return
    }
    let message = document.getElementById("dev_message").value;
    if(message === "")
    {
        return
    }
    console.log(name, email, message);
    name = name.replace(' ' , "--");
    message = message.replace(' ', '--');
    link = "https://aayush-choudhary.herokuapp.com/api/message/" + name + "$$$" + email + "$$$" + message;
    console.log(link);
    var a = document.createElement('a'); 
    a.id = "sendMeMessage"
    a.href = link; 
    document.body.appendChild(a); 
    $("#sendMeMessage")[0].click();
}
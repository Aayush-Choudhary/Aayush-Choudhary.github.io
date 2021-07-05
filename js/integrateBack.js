const padCharacter = (char) => {
    let c =  String(char.charCodeAt(0))
    if(c.length===1)
    {
        c = "000" + c;
    }
    else if(c.length===2)
    {
        c = "00" + c;
    }
    else if(c.length===3)
    {
        c = "0" + c;
    }
    return c;
}

const encryptAndSend = (username, projectID, field1='', field2='', field3='', field4='', field5='') => {
    
    username = String(username)
    projectID = String(projectID)
    field1 = String(field1)
    field2 = String(field2)
    field3 = String(field3)
    field4 = String(field4)
    field5 = String(field5)

    let encUsername = "";
    for(let i=0; i<username.length; i++)
    {
        encUsername += padCharacter(username[i])
    }
    let encProjectID = "";
    for(let i=0; i<projectID.length; i++)
    {
        encProjectID += padCharacter(projectID[i])
    }
    let encField1 = "";
    for(let i=0; i<field1.length; i++)
    {
        encField1 += padCharacter(field1[i])
    }
    let encField2 = "";
    for(let i=0; i<field2.length; i++)
    {
        encField2 += padCharacter(field2[i])
    }
    let encField3 = "";
    for(let i=0; i<field3.length; i++)
    {
        encField3 += padCharacter(field3[i])
    }
    let encField4 = "";
    for(let i=0; i<field4.length; i++)
    {
        encField4 += padCharacter(field4[i])
    }
    let encField5 = "";
    for(let i=0; i<field5.length; i++)
    {
        encField5 += padCharacter(field5[i])
    }

    let encURL = encUsername + "zlatan" + encProjectID + "zlatan" + encField1 + "zlatan" + encField2 + "zlatan" + encField3 + "zlatan" + encField4 + "zlatan" + encField5;
    encURL = "https://beyond-static.herokuapp.com/api/addInstance/" + encURL;

    return encURL
}

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
    var a = document.createElement('a'); 
    a.id = "sendMeMessage"
    a.href = encryptAndSend("LionArt", 33, name, email, message); 
    document.body.appendChild(a); 
    $("#sendMeMessage")[0].click();
}

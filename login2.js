function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="admin@123")
{
    alert("login successfully done");
    return false;
}
else
{
    alert("login failed");
}
}
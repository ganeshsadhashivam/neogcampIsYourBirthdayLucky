
var userDate = document.getElementById("Dob");


var LuckNum = document.getElementById("LuckyNum");


var button = document.querySelector("button");

var textArea = document.getElementById("textarea");



button.addEventListener("click", clickEvent)



function clickEvent(){

    if(userDate.value && LuckNum.value)
    {

    var number =userDate.value
    var result = number.replaceAll("-","");
  
    var sum=0;
  
    for(let x in result)
    {
        var value = Number(result.charAt(x));
       
        sum = sum + value;
       
    }
  
    if(sum % LuckNum.value === 0)
    {
        textArea.innerHTML = "your birthday is lucky 🎂🎊🎉🎈🎁";
    }
    else{

        textArea.innerHTML = "☹️😌😔your birthday is NOT lucky, so sad";
    }
}
else{
    textArea.innerHTML = "😞Please Provide Values 😞";
}
}

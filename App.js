
var userDate = document.getElementById("Dob");


var LuckNum = document.getElementById("LuckyNum");


var button = document.querySelector("button");

var textArea = document.getElementById("textarea");



button.addEventListener("click", clickEvent)



function clickEvent(){
    //console.log(userDate.value);
    //console.log(LuckNum.value);
    var number =userDate.value
    var result = number.replaceAll("-","");
    //console.log(result);
    //console.log(typeof result);
    var sum=0;
    //for(let i=0;i<result.length;i++)
    for(let x in result)
    {
        var value = Number(result.charAt(x));
        //console.log(value);
        //console.log(typeof value);
        sum = sum + value;
       
    }
    //console.log(sum);
    if(sum % LuckNum.value === 0)
    {
        textArea.innerHTML = "your birthday is lucky";
    }
    else{

        textArea.innerHTML = "your birthday is NOT lucky, so sad";
    }
}
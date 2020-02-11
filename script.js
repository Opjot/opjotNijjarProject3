$(document).ready(function(){
    
    function number(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $(".next").on("click", function(){
        $(".nextNum").text(number(0, 10));
    })

// pushing that random number into an array
const numberArray = []

// generating next number and checking array that it does not already exist there
while(numberArray.length < 4){
    const randomNumber = number(0, 10);
    console.log(randomNumber)
    const secondNumber = numberArray.indexOf(randomNumber);
    if (secondNumber === -1){
        numberArray.push(randomNumber)
    }
}

$(".num1").append(numberArray[0])
$(".num2").append(numberArray[1])
$(".num3").append(numberArray[2])
$(".num4").append(numberArray[3])

console.log(numberArray);

});



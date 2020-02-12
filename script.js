$(document).ready(function(){
    
    function number(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // pushing that random number into an array.
    const numberArray = []

    // generating random number for card and checking array that it does not already exist there.
    while(numberArray.length < 4){
        const randomNumber = number(0, 10);
        console.log(randomNumber)
        const cardNumber = numberArray.indexOf(randomNumber);
        if (cardNumber === - 1){
            numberArray.push(randomNumber)
        }
    }

    // getting the random numbers generated for the card on to the dom.
    $(".num1").append(numberArray[0])
    $(".num2").append(numberArray[1])
    $(".num3").append(numberArray[2])
    $(".num4").append(numberArray[3])

    // console.log(numberArray);
    // grabbing the random numbers generated and putting them into an array.

    const generatedNumbersCalled = [];

    const numbersGenerated = [];
    for(let i = 0; i <= 10; i++){
        numbersGenerated.push(i);
        // if (i === 12){
        //     alert("All numbers have been called");
        // }
    }


    $(".next").on("click", function(){
        let numberDrawn = number(0, numbersGenerated.length - 1)
        $(".nextNum").text(numbersGenerated[numberDrawn]);
        const removedItem = numbersGenerated.splice(numberDrawn,1);
        // console.log(numbersGenerated);
        generatedNumbersCalled.push(removedItem)
        console.log(generatedNumbersCalled)
        // numbersGenerated.push(numberDrawn)
        if (generatedNumbersCalled.length >= 11 ){
            alert("All numbers have been called!")
        }
    })


    // $(".bingo").on(click, function compare(array1, array2){
    //     const arrayCheck = []

    // })


    // changed the css styling on click.
    $(".gridItem").on("click", function(){
        $(this).toggleClass("selected")
    })


});



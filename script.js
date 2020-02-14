$(document).ready(function(){
    function number(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // pushing that random number into an array.
    const numberArray = []

    // generating random number for card and checking array that it does not already exist there.
    while(numberArray.length < 10){  
        const randomNumber = number(0, 25);  
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
    $(".num5").append(numberArray[4]) 
    $(".num6").append(numberArray[5])
    $(".num7").append(numberArray[6]) 
    $(".num8").append(numberArray[7])
    $(".num19").append(numberArray[8])
    $(".num20").append(numberArray[9])

    // grabbing the random numbers generated and putting them into an array.
    const generatedNumbersCalled = [];
    const numbersGenerated = [];
    for(let i = 0; i <= 25; i++){  
        numbersGenerated.push(i);
    }

    // This generates numbers to be displayed in the card. by randomly pulling out a number from the array and then pushing it into the next array if it doesn't already exist. Once a number has been picked it is spliced(removed) from that array so it cannot be picked again.
    $(".next").on("click", function(){
        let numberDrawn = number(0, numbersGenerated.length - 1);
        $(".nextNum").text(numbersGenerated[numberDrawn]);
        const removedItem = numbersGenerated.splice(numberDrawn,1);
        generatedNumbersCalled.push(removedItem);
        if (generatedNumbersCalled.length >= 27 ){  
            alert("All numbers have been called!");
        }
    })

    //Comparing the 2 arrays by flattening (getting the multi-dimensional array to become singular aka getting past the objects inside the other array) the second one. 
    $(".bingo").one("click", function (){ 
        function checkArrays(array1, array2){
        array2 = array2.flat();
        return array1.every(function(item){
                return array2.includes(item);
            })
        }
        // Appending text to tell user if they won or lost depending on the above function being true. 
    if(checkArrays(numberArray, generatedNumbersCalled) === true){
        $(".message").append("<p class='hello'>Winner Winner Vegan Dinner!</p> <p>PLAYER 1 wins the game!</p>");
        $(".message").css({"display": "flex","flex-direction": "column", "font-size": "3rem","text-align": "center"});
        $(".next").attr("disabled", "disabled");
        $(".bingo2").attr("disabled", "disabled")
        } 
        else {
        $(".message").append("<p class='bye'>Numbers do not match, Player 1 loses.</p> <p>GAME OVER!</p>");
        $(".message").css({"display": "flex","flex-direction": "column", "font-size": "3rem","text-align": "center" });
        $(".next").attr("disabled", "disabled");
        $(".bingo2").attr("disabled", "disabled")
        }
    }) 

    // changed the css styling on click.
    $(".gridItem").on("click", function(){
        $(this).toggleClass("selected");
    });

    // getting random numbers for card 2.
    const numberArray2 = []

        while(numberArray2.length < 10){  
        const randomNumber2 = number(0, 25);  
        const cardNumber2 = numberArray2.indexOf(randomNumber2);
        if (cardNumber2 === - 1){
            numberArray2.push(randomNumber2)
        }
    }

    // appending random numbers to card 2
    $(".num9").append(numberArray2[0])
    $(".num10").append(numberArray2[1])
    $(".num11").append(numberArray2[2])
    $(".num12").append(numberArray2[3])
    $(".num13").append(numberArray2[4]) 
    $(".num14").append(numberArray2[5])
    $(".num15").append(numberArray2[6]) 
    $(".num16").append(numberArray2[7]) 
    $(".num17").append(numberArray2[8]) 
    $(".num18").append(numberArray2[9]) 

    // comparing arrays when player 2 button is clicked. 
    $(".bingo2").one("click", function (){ 
        function checkArrays(array1, array2){
        array2 = array2.flat();
        return array1.every(function(item){
                return array2.includes(item);
            })
        }

        // checking for winner.
        if(checkArrays(numberArray2, generatedNumbersCalled) === true){
            $(".message").append("<p class='hello'>Winner Winner Vegan Dinner!</p> <p>PLAYER 2 wins the game!</p>")
            $(".message").css({"display": "flex","flex-direction": "column", "font-size": "3rem","text-align": "center" });
            $(".next").attr("disabled", "disabled");
            $(".bingo").attr("disabled", "disabled")
            } 
            else {
            $(".message").append("<p class='bye'>Numbers do not match, Player 2 loses.</p> <p>GAME OVER!</p>");
            $(".message").css({"display": "flex","flex-direction": "column", "font-size": "3rem","text-align": "center" });
            $(".next").attr("disabled", "disabled");
            $(".bingo").attr("disabled", "disabled")
            }
    })
})

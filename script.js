$(document).ready(function(){
    function number(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // pushing that random number into an array.
    const numberArray = []

    // generating random number for card and checking array that it does not already exist there.
    while(numberArray.length < 9){  //
        const randomNumber = number(0, 25);  //
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
        $(".message").append("<p class='hello'>Winner Winner Vegan Dinner!</p> <p>You win the game!</p>");
        $(".message").css({"display": "flex","flex-direction": "column", "font-size": "3rem","text-align": "center" });
        $(".next").attr("disabled", "disabled");
        } 
        else {
        $(".message").append("<p class='bye'>All your numbers did not match!</p> <p>Better luck next time!</p>");
        $(".message").css({"display": "flex","flex-direction": "column", "font-size": "3rem","text-align": "center" });
        $(".next").attr("disabled", "disabled");
        }
    }) 

    // changed the css styling on click.
    $(".gridItem").on("click", function(){
        $(this).toggleClass("selected");
    })
    
});



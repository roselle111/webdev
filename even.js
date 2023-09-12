function printEvenNumbers() {
    // Get the input number from the user
    var inputNumber = document.getElementById("input-number").value;
    // Initialize a variable to hold the current number
    var currentNumber = 0;
    // Loop through even numbers up to the input number
    while (currentNumber <= inputNumber) {
        // Check if the current number is even
        if (currentNumber % 2 === 0) {
            // Print the even number
            document.getElementById("output").innerHTML += currentNumber + "<br>";
        }
        // Increment the current number by 1
        currentNumber++;
    }
}
// # Switch if... 


// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

const color = "yellow";

    switch (color) {
        case "red":
            console.log("You have been assigned the colour red!");
        break;
        case "blue":
            console.log("You have been assigned the colour blue!")
        break;
        case "green":
            console.log("You have been assigned the colour green!");
        break;
        case "yellow":
            console.log("You have been assigned the colour yellow!")
        break;
    }

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.

const grade = "D";

    switch (grade) {
        case "A+": 
            console.log("Well done! You have achieved the highest possible grade!")
        break;
        case "A":
            console.log("Grade A. very, very good job indeeed");
        break;
        case "B":
            console.log("Very well done, you got grade B!");
        break;
        case "C":
            console.log("Well done! Grade C is quite good");
        break;
        case "D":
            console.log("YOu have passed the assignment.");
        break;
    }

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

fruits = "apple";

    switch (fruits) {
        case "banana":
            console.log("Thank you for being full of potassium");
        break;
        case "orange":
            console.log("Thank you for being full of vitamin C");
        break;
        case "strawberry":
            console.log("Thank you for making me feel healthy while eating cream");
        break;
        case "apple":
            console.log("Thank you for keeping the doctor away");
        break;
    }

// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 

const percentageComplete = 101;

        if (percentageComplete < 30) {
            console.log("Slowly getting there");
        } else if (percentageComplete >= 30 && percentageComplete < 50) {
            console.log("Still a long way to go");
        } else if (percentageComplete > 50 && percentageComplete < 80) {
            console.log("You can do it!");
        } else if (percentageComplete > 80 && percentageComplete < 100) {
            console.log("This is the last push");
        } else if (percentageComplete === 100) {
            console.log("You're there. Well done!"); 
        } else {
            console.log("Your percentage is invalid. Something is broken");
        }
    

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.

// Use switch statements for more simple stuff. When the code isn't that complicated and is quite repetitive. For example the first three exercises. Then maybe the last exercise would have been better with an if else statement ?



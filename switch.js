let fruit_input;
let fruit_Quantity;


let fruitNames=["papaya","apple","peach","banana","mango","watermelon","lichi","blueberry","orange","grapes","Indianjujube"];


let fruitFalse;
let names="Please Enter fruit among:\nPapaya,\nApple,\nPeach,\nPanana,\nMango,\nWatermelon,\nLichi,\nBlueberry,\nOrange,\nGrapes,\nIndianjujube\n: "

function user_input_fruit()
{
    alert ("Welcome to Fruit-order . \"Please make you order by pressing enter.\"")
fruit_input=window.prompt(names);
while(fruitFalse===true){
    
        alert("The fruit you inputted is invalid!! Please enter correct fruit.\n Press refresh button to order again");
     
}

fruit_Quantity=parseInt(window.prompt("Please Enter amount of fruit you want: "));
fruitFalse=!fruitNames.includes(fruit_input);
}
function output_fruit(){

    user_input_fruit();
 // If fruit input is invalid, show alert and return before switch


switch (fruit_input) {
    case "papaya":
    case "Papaya":
        
        alert("The price of your wanted amount of papaya is $" + fruit_Quantity * 2.01);
        alert("Congartulations! Your order is placed!")
        break;

    case "apple":
    case "Apple":
        alert("The price of your wanted amount of apple is $" + fruit_Quantity * 1.2);
alert("Congartulations! Your order is placed!")
        break;

    case "peach":
    case "Peach":
        alert("The price of your wanted amount of peach is $" + fruit_Quantity * 3.02);
alert("Congartulations! Your order is placed!")
        break;

    case "Indian jujube":
    case "indian jujube":
    case "IndianJujube":
    case "indianJujube":
    case "indianjujube":
        alert("The price of your wanted amount of Indian jujube(Boxes) is $" + fruit_Quantity * 5.98);
alert("Congartulations! Your order is placed!")
        break;

    case "grapes":
    case "Grapes":
        alert("The price of your wanted amount of grapes is $" + fruit_Quantity * 0.76);
alert("Congartulations! Your order is placed!")
        break;

    case "orange":
    case "Orange":
        alert("The price of your wanted amount of orange is $" + fruit_Quantity * 1.04);
alert("Congartulations! Your order is placed!")
        break;

    case "blueberry":
    case "Blueberry":
        alert("The price of your wanted amount of blueberry (Boxes) is $" + fruit_Quantity * 7.09);
alert("Congartulations! Your order is placed!")
        break;

    case "lichi":
    case "Lichi":
        alert("The price of your wanted amount of lichi is $" + fruit_Quantity * 2.8);
alert("Congartulations! Your order is placed!")
        break;

    case "watermelon":
    case "Watermelon":
        alert("The price of your wanted amount of watermelon is $" + fruit_Quantity * 3.65);
alert("Congartulations! Your order is placed!")
        break;

    case "mango":
    case "Mango":
        alert("The price of your wanted amount of mango is $" + fruit_Quantity * 0.1);
alert("Congartulations! Your order is placed!")
        break;

    case "banana":
    case "Banana":
        alert("The price of your wanted amount of banana is $" + fruit_Quantity * 0.4);
alert("Congartulations! Your order is placed!")
        break;

    default:
        alert("The fruit you inputted is not available!! Please try our other fruits.");
        break;
    
    
}

}




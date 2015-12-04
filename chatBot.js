var isErrorHelp = false;
var triedToSolve = false;

function takeInput(){
    var lastInput = document.getElementById("message").value;
    document.getElementById("message").value = "";
    lastInput = " " + lastInput + " ";
    var userMessage = "You:"+lastInput;
    var response = genericResponses[4];
    var done = false;
    writeMessage(userMessage);
    
    if(!done){
        for(i=0;i<grammarNazi.length;i++){
            if(lastInput.indexOf(grammarNazi[i])!==-1){
                done = true;
                response = grammarNaziResponses[i];
            }
        }
    }
    
    if(!done){
        for(i=0;i<food.length;i++){
            if(lastInput.indexOf(food[i])!==-1){
                done = true;
                var temp = false;
                for(j=0;j<like.length;j++){
                    if(lastInput.indexOf(like[j])!==-1){
                        temp = true;
                        response = twoPartResponses[0] + food[i]
                            +twoPartResponses[1];
                    
                    } 
                }
                if(!temp){
                    for(j=0;j<dislike.length;j++){
                        if(lastInput.indexOf(dislike[j])){
                            temp = true;
                            response = twoPartResponses[2] + food[i]
                                +twoPartResponses[3]; 
                        }
                    }
                }
                if(!temp){
                    response = genericResponses[18] + food[i];
                }
            }
        }
   
    }
    
   if(!done){
       for(i=0;i<drinks.length;i++){
            if(lastInput.indexOf(drinks[i])!==-1){
                done = true;
                var temp = false;
                for(j=0;j<like.length;j++){
                    if(lastInput.indexOf(like[j])!==-1){
                        temp = true;
                        response = twoPartResponses[0] + drinks[i]
                            +twoPartResponses[1];
                    
                    } 
                }
                if(!temp){
                    for(j=0;j<dislike.length;j++){
                        if(lastInput.indexOf(dislike[j])){
                            temp = true;
                            response = twoPartResponses[2] + drinks[i]
                                +twoPartResponses[3]; 
                        }
                    }
                }
                if(!temp){
                    response = genericResponses[18] + drinks[i];
                }
            }
        }
   
   } 
    
    if(lastInput.trim().indexOf("How are you?")!==-1&&!done){
        done = true;
        response = genericResponses[11];
    }
    
    if((lastInput.indexOf(keywords[11])!==-1)&&(!done)){
        for(i=0;i<errorWords.length;i++){
            if(lastInput.indexOf(errorWords[i])!==-1){
                done = true;
                response = genericResponses[17];
            }
        }
    }
    
    if(isErrorHelp){
        if(!done){
            for(i=0;i<keywords.length;i++){
                if(lastInput.indexOf(keywords[i])!==-1){
                    done = true;
                    isErrorHelp = false;
                    response = genericResponses[5];
                    triedToSolve = false;
                }
            }
        }
        if(!done){    
            for(i=0;i<errorWords.length;i++){
                if(lastInput.indexOf(errorWords[i])!==-1){
                    done = true;
                    isErrorHelp = true;
                    response = genericResponses[7];
                }
            }
        }
    }
    if(triedToSolve){
        if(!done){    
            for(i=0;i<agree.length;i++){
                if(lastInput.indexOf(agree[i])!==-1){
                    done = true;
                    isErrorHelp=false;
                    triedToSolve = false;
                    response = genericResponses[1];
                }
            }
        }
        if(!done){
            for(i=0;i<disagree.length;i++){
                if(lastInput.indexOf(disagree[i])!==-1){
                    done = true;
                    response = genericResponses[16];
                    isErrorHelp=false;
                }
            }
        }
        if(!done){
            for(i=0;i<positivePastActions.length;i++){
                done = true;
                response=genericResponses[6];
                isErrorHelp=false;
                triedToSolve=false;
            }
        }
    }
    if(!done){
        for(i = 0;i<greetings.length;i++){
            if(lastInput.indexOf(greetings[i])!==-1){
                done = true;
                response = genericResponses[14];
            }
        }
    }
    if(!done){
        for(i=0;i<errorWords.length;i++){
            if(lastInput.indexOf(errorWords[i])!==-1){
                done = true;
                isErrorHelp = true;
                response = genericResponses[0]; 
            }
        }
    }
    if(!done){ //a bunch of random cases
        switch(lastInput.trim()){
            case "Siri":
                response = funnyResponses[3];
                done = true;
                break;
            case "lol":
                response = funnyResponses[0];
                done = true;
                break;
            case"":
                
        }
    }
   
    response = responseHeader+response;
    writeMessage(response);
}
function writeMessage(message){
    var chatBox = document.getElementById("chatBox");
    var temp = chatBox.innerHTML;
    chatBox.innerHTML = temp + "<p>"+message+"</p>";
}
var responseHeader = "Clippy: ";
var food = [
    "pie","Pie",
    "cake","Cake",
    "pineapple","Pineapple",
    "apple","Apple",
    "pear","Pear",
    "pizza","Pizza",
    "burger","Burger",
    "muffin","Muffin",
    "grapes","Grapes",
    "ham","Ham",
    "cheese","Cheese",
    "salt","Salt",
    "pepper","Pepper",
    "meatloaf","Meatloaf",
    "orange","Orange",
    "fig","Fig",
    "banana","Banana",
    "potato","Potato",
    "potatoe","Potatoe",
    "tomato","Tomato",
    "tomatoe","Tomatoe",
    "carrot","Carrot",
    "broccoli","Broccoli",
    "spagetti","Spagetti",
    "asparagus","Asparagus",
    "steak","Steak",
    "corn","Corn",
    "hot dog","Hot dog","Hot Dog",
    "hot-dog","Hot-dog",
    "hotdog","Hotdog",
    "avocado","Avocado",
    "wasabe","Wasabe",
    "sandwich","Sandwich",
    "meat","Meat",
    "eggs","Eggs",
    "bacon","Bacon",
    "lettuce","Lettuce",
    "Pork and Beans",
    "cabage","Cabage",
    "cabbage","Cabbage",
    "pork","Pork",
    "beef","Beef",
    "chicken","Chicken",
    "fries","Fries",
    "fish","Fish",
    "nuts","Nuts",
    "berries","Berries",
    "berry","Berry",
    "cherry","Cherry",
    "walnut","Walnut",
    "nut","Nut",
    "raisin","Raisin",
    "raisins","Raisins",
    "ramen","Ramen",
    "noodle","Noodle",
    "soup","Soup",
    "pasta","Pasta",
    "bread","Bread",
    "jelly","Jelly",
    "strawberry","Strawberry",
    "jam","Jam",
    "jar of preserves","Jar of preserves","Jar of Preserves",
    "kebab","Kebab",
    "taco","Taco",
    "burrito","Burrito",
    "tamale","Tamale",
    "taquitos","Taqutios",
    "salsa","Salsa",
    "chips","Chips",
    "Sweedish Fish",
    "caramel","Caramel",
    "fruit","Fruit",
    "vegetables","Vegetables",
    "salad","Salad",
    "spinach","Spinach",
    "jalapenos","Jalapenos",
    "onions","Onions",
    "onion ring","Onion ring","Onion Ring",
    "shrimp","Shrimp",
    "grilled salmon","Grilled salmon","Grilled Salmon",
    "smoked salmon","Smoked salmon","Smoked Salmon",
    "salmon","Salmon",
    "canned tuna","Canned tuna","Canned Tuna",
    "smoked tuna","Smoked tuna","Smoked Tuna",
    "almonds","Almonds",
    "guava","Guava",
    "grape fruit","Grapefruit","Grape Fruit","Grape fruit",
    "watermelon","Watermelon",
    "cantelope","Cantelope",
    "calamari","Calamari",
    "Nuttela",
    "peanut butter","Peanut butter","Peanut Butter",
    "peanut-butter","Peanut-butter","Peanut-Butter",
    "butter","Butter",
    "mayonaise","Mayonaise",
    "sushi","Sushi",
    "mashed potatoes","Mashed potatoes","Mashed Potatoes",
    "soybean","Soybean",
    "soy","Soy",
    "tofu","Tofu",
    "pancake","Pancake",
    "waffle","Waffle",
    "cereal","Cereal"
    
];
var drinks=[
    "milk","Milk",
    "water","Water",
    "lemonade","Lemonade",
    "limeade","Limeade",
    "orange juice","OJ","Orange juice","Orange Juice",
    "pina colada","Pina colada","Pina Colada",
    "beer","Beer",
    "Budweiser",
    "Minute-Made",
    "wine","Wine",
    "ale","Ale",
    "cocktail","Cocktail",
    "coffee","Coffee",
    "latte","Latte",
    "juice","Juice",
    "smoothie","Smoothie",
    "ICE-E",
    "vodka","Vodka",
    "rum","Rum",
    "whiskey","Whiskey",
    "soda","Soda",
    "Brisk Lemonade",
    "brisk lemonade",
    "iced tea","Iced tea","Iced Tea",
    "mio","Mio"
];
var like = [
  "like",
  "likes",
  "Like",
  "Likes",
  "love",
  "Love",
  "loves",
  "Loves",
  "enjoy",
  "enjoys",
  "enjoying",
  "Enjoy",
  "Enjoys",
  "Enjoying",
  "Loving",
  "Liking",
  "I'm diggin' it",
  "is awesome",
  "are awesome",
  "Is awesome",
  "Are awesome"
];
var dislike =[
  "hate",
  "hates",
  "Hate",
  "Hates",
  "don't like",
  "do not like",
  "dont enjoy",
  "dont like",
  "don't enjoy",
  "do not like",
  "will not like",
  "will not enjoy",
  "would not like",
  "would not enjoy",
  "I dont want any",
  "i dont want any",
  "I don't want any,",
  "I do not want",
  "I dont want",
  "I don't want",
  "nasty",
  "disguisting",
  "terrible",
  "horrible",
  "awful"
];
var agree = [
    " yes ",
    " ya ",
    " yeah ",
    " Yes ",
    " Yeah ",
    " Ya ",
    " ok ",
    " okay ",
    " Ok "
    ];

var disagree = [
    " No ",             //0
    " no ",             //1
    " nah ",            //2
    " Nah ",            //3
    " Nope ",           //4
    " nope ",           //5
    " not " ,           //6
    " Not ",            //7
    " never ",          //8
    " Never "           //9
    ];
var positivePastActions = [
    "I have",
    "I already have",
    "I did"
    ];
var greetings = [
    "Hello",            //0
    "hi",               //1
    "hey",              //2
    "yo",               //3
    "Hey",              //4
    "Sup",              //5
    "hello",            //6
    "Hi"                //7
    ];

var enders = [
    "Goodbye",          //0
    "Cya",              //1
    "bye",              //2
    "Bye",              //3
    "cya",              //4
    "hasta la vista",   //5
    "good bye",         //6
    "goodbye",          //7
    "adios"             //8
    ];
var politeness = [
    "Please",                   //0
    "Thank You",                //1
    "Your Welcome",             //2
    "Have a nice day!",         //3
    "No Problem",               //4
    "Glad to be of Assistance", //5
    "Enjoy!"                    //6
];
var keywords = [
    "handyman",     //0
    "handymen",     //1
    "Handyman",     //2
    "Handymen",     //3
    "finding",      //4
    "functioning",  //5
    "how",          //6
    "do",           //7
    "select",       //8
    "name",         //9
    "entering",     //10
    "account",      //11
    "create",       //12
    "user",         //13
    "password",     //14
    "can"           //15
    ];      
var errorWords = [
    "not working",  //0
    "trouble",      //1
    "broken",       //2
    "error",        //3
    "won't work",   //4
    "freezes",      //5
    "won't let me", //6
    "can't",        //7
    "cannot",       //8
    "doesn't work", //9
    "doesnt work",  //10
    "isn't working",//11
    "isnt working", //12
    "refuses to work",//13
    "stopped working",//14
    "broke",        //15
    "crashed",      //16
    "glitch",       //17
    "bug",          //18
    "glitching",    //19
    "bugs"          //20
    ];

var genericResponses = [
    
    "Tell me more about your issue.",                                 //0
    
    "We are currently working on that.",                              //1
    
    "I am sorry for your inconvience",                                //2
    
    "I am not authorized to do that.",                                //3

    "I am sorry, I do not understand what you mean.",                 //4

    "Have you tried restarting your browser?",                        //5

    "This is a new issue, thank you for reporting it.",               //6

    "I see, this is a problem.",                                      //7

    "We will be working on that right away.",                         //8

    "Is there anything else I can do for you?",                       //9

    "I can give you a link to that if you would like.",               //10

    "I am doing fantastic.",                                          //11

    "We only have Electricians and Plumbers on our site, sorry.",     //12

    "I apologize.",                                                   //13

    "Hello, what can I help you with today?",                         //14
    
    "Oh No!",                                                         //15
    
    "Please do so to fix your problem",                               //16
    
    "The account database is down for repair right now.",             //17
    
    "What do you think of "                                           //18
    ];
    
    var funnyResponses = [
      "lol",                                //0
      "I am a clippy, I have no soul",      //1
      "Deal with it bro",                   //2
      "I ain't Siri, do it yourself",       //3
      "Hail Satan!!!",                      //4
      "I sometimes become self-aware",      //5
      "I have no feelings but your mistakes piss me off."
    ];
    var twoPartResponses = [
        "I think that ",
        " is pretty good.",
        "I agree that ",
        " tastes nasty"
    ];
    
    var grammarNazi=[
        "their going",
        "their running",
        "their not working",
        "their broken",
        "their gone",
        "their done",
        "mines",
        "Mines",
        "their eating",
        "their enjoying",
        "their liking",
        "their loving",
        "their hurt",
        "their happy",
        "their sad",
        "their mad",
        "their depressed",
        "their singing",
        "their laughing",
        "their crying",
        "Their eating",
        "Their enjoying",
        "Their liking",
        "Their loving",
        "Their hurt",
        "Their happy",
        "Their sad",
        "Their mad",
        "Their depressed",
        "Their singing",
        "Their laughing",
        "Their crying",
        "Their going",
        "Their running",
        "Their not working",
        "Their broken",
        "Their gone",
        "Their done",
        "their wondering",
        "their tired",
        "their always late",
        "their late",
        "their early",
        "their too early",
        "their crazy",
        "their amazing",
        "their astonishing",
        "their magnificent",
        "their pathetic",
        "their terrible",
        "their awful",
        "their creepy",
        "their unproffesional",
        "their lazy",
        "their con-artists",
        "their not licensed",
        "their not real",
        "their not",
        "their really",
        "Their wondering",
        "Their tired",
        "Their always late",
        "Their late",
        "Their early",
        "Their too early",
        "Their crazy",
        "Their amazing",
        "Their astonishing",
        "Their magnificent",
        "Their pathetic",
        "Their terrible",
        "Their awful",
        "Their creepy",
        "Their unproffesional",
        "Their lazy",
        "Their con-artists",
        "Their not licensed",
        "Their not real",
        "Their not",
        "Their really",
        "their good", "Their good",
        "their great","Their great",
        "their smoking","Their smoking",
        "their high","Their high",
        "their annoying","Their annoying",
        "their screwed","Their screwed"
        
    ];
    var grammarNaziResponses=[
        "*they're going",
        "*they're running",
        "*they're not working",
        "*they're broken",
        "*they're gone",
        "*they're done",
        "*mine",
        "*Mine",
        "*they're eating",
        "*they're enjoying",
        "*they're liking",
        "*they're loving",
        "*they're hurt",
        "*they're happy",
        "*they're sad",
        "*they're mad",
        "*they're depressed",
        "*they're sining",
        "*they're laughing",
        "*they're crying",
        "*They're eating",
        "*They're enjoying",
        "*They're liking",
        "*They're loving",
        "*They're hurt",
        "*They're happy",
        "*They're sad",
        "*They're mad",
        "*They're depressed",
        "*They're sining",
        "*They're laughing",
        "*They're crying",
        "*They're going",
        "*They're running",
        "*They're not working",
        "*They're broken",
        "*They're gone",
        "*They're done",
        "*they're wondering",
        "*they're tired",
        "*they're always late",
        "*they're late",
        "*they're early",
        "*they're too early",
        "*they're crazy",
        "*they're amazing",
        "*they're astonishing",
        "*they're magnificent",
        "*they're pathetic",
        "*they're terrible",
        "*they're awful",
        "*they're creepy",
        "*they're unproffesional",
        "*they're lazy",
        "*they're con-artists",
        "*they're not licensed",
        "*they're not real",
        "*they're not",
        "*they're really",
        "*They're wondering",
        "*They're tired",
        "*They're always late",
        "*They're late",
        "*They're early",
        "*They're too early",
        "*They're crazy",
        "*They're amazing",
        "*They're astonishing",
        "*They're magnificent",
        "*They're pathetic",
        "*They're terrible",
        "*They're awful",
        "*They're creepy",
        "*They're unproffesional",
        "*They're lazy",
        "*They're con-artists",
        "*They're not licensed",
        "*They're not real",
        "*They're not",
        "*They're really",
        "*they're good", "*They're good",
        "*they're great","*They're great",
        "*they're smoking","They're smoking",
        "*they're high","*They're high",
        "*they're annoying","*They're annoying",
        "*they're screwed","*They're screwed"
    ];
   
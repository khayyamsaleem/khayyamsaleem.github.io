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
    
    if(lastInput.trim().indexOf("How are you?")!==-1){
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
var agree = [" yes "," ya "," yeah "," Yes "," Yeah "," Ya "," ok "," okay "," Ok "];
var disagree = [" No "," no "," nah "," Nah "," Nope "," nope "," not " ," Not ",
    " never "," Never "];
var positivePastActions = ["I have","I already have","I did"];
var greetings = ["Hello","hi","hey","yo","Hey","Sup","hello","Hi"];
var enders = ["Goodbye","Cya","bye","Bye", "cya", "hasta la vista"];
var politeness = ["Please","Thank You","Your Welcome","Have a nice day!"];
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
    "create"        //12
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
    "doesnt work"   //10
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
    
    "The account database is down for repair right now."              //17
    ];
    
    var funnyResponses = [
      "lol",                                //0
      "I am a clippy, I have no soul",      //1
      "Deal with it bro",                   //2
      "I ain't Siri, do it yourself",       //3
      "Hail Satan!!!",                      //4
      "I sometimes become self-aware"       //5
    ];
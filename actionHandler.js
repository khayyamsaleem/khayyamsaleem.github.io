/* global firstname */

var invalidChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","?",";",":","`","~","\\","|","<",">",",","."];
var isLoggedin = false;
var currentAccount;
var jobType = "";
var helpButtonClickedTimes = 0;
var color = "#737373";

/********** General Functions ***********/ 

function htmlChanger(element,text){
    element.innerHTML = text;
}

function textEditor(element,value){
    element.value = value;
}

function colorEditor(element,color){
    element.style.color = color;
}

function formListenerColor(element,color){
    element.addEventListener("click",function(){
        colorEditor(element,color);
    });
}

function numberListener(element,color){
    var text = "";
    element.addEventListener("click",function(){
        textEditor(element,text);
        colorEditor(element,color);
    });
}

function highlightInvalid(element,type){ 
    element.style.border = " 2px solid #F00";
    
    /********** The Number 1 corresponds to a Text Box Type ***********/ 
    if(type===1)
        element.addEventListener("click",function(){
            element.style.border=" 1px groove #f1f1f1";
            element.style.padding="2px";}); //unhighlight on click
    /********** The Number 2 corresponds to a Select Type ***********/ 
    if(type===2)
        element.addEventListener("click",function(){
            element.style.border="1px groove #f1f1f1";}); //same but no padding 
}

function userNameValidator(element,image){
    var input = element.value;
    var valid = true;
    for(i = 0; i<invalidChar.length;i++){
        if(input.indexOf(invalidChar[i])!==-1){
            valid = false;
        }
    }
    if(input===""||input===null){
        valid=false;
    }
    
    if(valid){
        image.src="Pictures/valid.png";
    }else{
        image.src="Pictures/invalid.png";
    }
}


/********** Specific Functions ***********/ 


function login(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var container = document.getElementById("login");
    if(user===null||user===""){
        alert("Enter Your Username");
        document.getElementById("user").value="username";
    }else if(pass===null||pass===""){
        alert("Enter Your Password");
    }else{
        if((user==="admin"&&pass==="pass")){
            container.innerHTML = "<h2>Login Successful!</h2><h3>Welcome Back, " + user +"!</h3>";
            container.style.border="none #FFFFFF";
            isLoggedin=true;
            currentAccount = user;
            loginHeader();
        }else{
            container.innerHTML ="<h3>Username or Password is incorrect</h3>";
            container.style.border="none #FFFFFF";
        }
    }    
}
function logoff(){
    isLoggedin = false;
    currentAccount = null;
}
function loginHeader(){
    if(isLoggedin){
       var text="Logged in as "+
               currentAccount+ " " +"<a onclick ='logoff()' href='index.html'>\n\
               logoff</a>"; 
        htmlChanger(document.getElementById("loggedInHeader"),text);
    }
}

function help(){
    var element = document.getElementById("chat");
    
    /********** Create The Chat Box ***********/ 
    
    var text = "<div id='chatBox'><p>Clippy: You look like you could use some help.</p></div> \n\
      <div id='messageForm'> \n\
        <input id='message' name='message' type='text'> \n\
        <input id='send' name='send' type='button' onclick='takeInput()' value='Send'> \n\
      </div>";
    htmlChanger(element,text);
}

function createAccount(){
    var password1 = document.getElementById("cpass1").value;
    var password2 = document.getElementById("cpass2").value;
    if(password1 !== password2){
        alert("Passwords must match");
    }else{
        var container = document.getElementById("login");
        container.style.width="100%";
        container.style.border="none #FFFFFF";
        var text = "<h2>Account Creation Disabled</h2>";
        htmlChanger(container,text);
    }
}

function find(){
    var valid = true;
    var message = "";
    
    /********** Variables Holding User Input ***********/ 
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var addressp1 = document.getElementById("address").value.trim();
    var addressp2 = document.getElementById("address2").value;
    var homePhone = document.getElementById("homeNum").value;
    var budget = document.getElementById("budget").value;
    var startYear = document.getElementById("startTimeYear").value; 
    var startDay = document.getElementById("startTimeDay").value;
    var startMonth = document.getElementById("startTimeMonth").value;
    var finishYear = document.getElementById("finishTimeYear").value;
    var finishDay = document.getElementById("finishTimeDay").value;
    var finishMonth = document.getElementById("finishTimeMonth").value;
    
    /********** This Is Needed In Another Function ***********/ 
    jobType = document.getElementById("job").value;
     
     
    /********** First Name Validation ***********/ 
    
    if(firstName===""||firstName===null){
        
        highlightInvalid(document.getElementById("firstName"),1);
        valid = false;
        message = message + "\n Please enter your first name";
     }
     
    /********** Last Name Validation***********/ 
    
    if(lastName===""||lastName===null){
        
        highlightInvalid(document.getElementById("lastName"),1);
        valid = false;
        message = message + "\n Please enter your last name";
     }
     
     /********** Email Address Validation ***********/ 
     
    if(email===""||email===null){
        
        highlightInvalid(document.getElementById("email"),1);
        valid = false;
        message = message + "\n Please enter your email address";
        
     }else if(email.indexOf('@')===-1 || email.indexOf('.')===-1){
         
        highlightInvalid(document.getElementById("email"),1);
        message = message + "\n Please enter a valid email address";
        valid = false;
     }
     
     /********** Address Validation ***********/ 
     
    if(addressp1===""||addressp1===null){
        
        highlightInvalid(document.getElementById("address"),1);
        valid = false;
        message = message + "\n Please enter your address";
     }
     
     /********** Phone Number Validation ***********/ 
    
    if(homePhone===""||homePhone===null){
        
        highlightInvalid(document.getElementById("homeNum"),1);
        valid = false;
        message = message + "\n Please enter your home phone number";
        
     }else{
         
        var re = /^\d{3}\-\d{3}\-\d{4}$/;
        var re2 = /^\(\d{3}\)\-\d{3}\-\d{4}$/;
        
        if(!(homePhone.match(re)||homePhone.match(re2))){
            
            highlightInvalid(document.getElementById("homeNum"),1);
            valid = false;
            message = message + "\n Please enter a valid home phone number";
        }
     }
    
     /********** Job Validation ***********/ 
    
    if(jobType===""||jobType===null){
        
        highlightInvalid(document.getElementById("job"),2);
        valid = false;
        message = message + "\n Please select what you are looking for";
     }
     
     /********** Budget Validation ***********/  
     
    if(budget===""||budget===null){
        
        highlightInvalid(document.getElementById("budget"),1);   
        valid = false;
        message = message + "\n Please enter your budget";
     
    }else if(budget <= 100){
         
         highlightInvalid(document.getElementById("budget"),1);
         valid = false;
         message = message + "\n Your budget is too small";
     }
    
     /********** Start Year Validation***********/ 
    
    
    if(startYear===""||startYear===null||
            document.getElementById("startTimeYear").style.color === color){
        
        highlightInvalid(document.getElementById("startTimeYear"),1);
        valid = false;
        message = message + "\n Please enter your desired start year";
     }
     
      /********** Start Month Validation ***********/ 
      
    var dayMax;
    
    if(startMonth===""||startMonth===null||
            document.getElementById("startTimeMonth").style.color === color){
        
        highlightInvalid(document.getElementById("startTimeMonth"),1);
        valid = false;
        message = message + "\n Please enter your desired start month";
        
     }else{
         
         if(startMonth>=1&&startMonth<=12){
             
             /********** Start Day Maximum Value ***********/ 
             
            switch(startMonth){
                case 1:
                    dayMax = 31;
                    break;
                case 2:
                    if(startYear%4===0)
                        dayMax = 29;
                    else
                        dayMax = 28;
                    
                    break;
                default:
                    if(startMonth%2===1)
                        dayMax=31;
                    else
                        dayMax = 30;     
            }
        }else{
            
            highlightInvalid(document.getElementById("startTimeMonth"),1);
            valid = false;
            message = message + "\n Please enter a valid start month";
        }
     }
    
     /********** Start Day Validation ***********/ 
    
    if(startDay===""||startDay===null||
            document.getElementById("startTimeDay").style.color ===color){
        
        highlightInvalid(document.getElementById("startTimeDay"),1);
        valid = false;
        message = message + "\n Please enter your desired start day";
        
    }else if(startDay>dayMax||startDay<1){
        
        highlightInvalid(document.getElementById("startTimeDay"),1);
        valid = false;
        message = message + "\n Please enter a valid start day";
        
        }else{
            
            /********** Start Date Validation ***********/ 
            
            var date = new Date();
            
            if(startYear<date.getFullYear()){
                
                highlightInvalid(document.getElementById("startTimeYear"),1);
                valid = false;
                message = message + "\n You cannot have your project start in the past";
                
            }else if(startYear===date.getFullYear()){
                
                if(startMonth<(date.getMonth()+1)){
                    
                    highlightInvalid(document.getElementById("startTimeMonth"),1);
                    valid = false;
                    message = message + "\n You cannot have your project start in the past";
                    
                }else if(startMonth===date.getMonth()){
                    
                    if(startDay<date.getDate()){
                        
                        highlightInvalid(document.getElementById("startTimeDay"),1);
                        valid = false;
                        message = message + "\n You cannot have your project start in the past"; 
                    }
                }
            }
        }
        
    /********** Finish Year Validation  ***********/ 
    
    if(finishYear===""||finishYear===null||
            document.getElementById("finishTimeYear").style.color ===color){
        
        highlightInvalid(document.getElementById("finishTimeYear"),1);
        valid = false;
        message = message + "\n Please enter your desired completion year";
     }
     
     /********** Finish Month Validation ***********/ 
    
    if(finishMonth===""||finishMonth===null||
            document.getElementById("finishTimeMonth").style.color === color){
        
        highlightInvalid(document.getElementById("finishTimeMonth"),1);
        valid = false;
        message = message + "\n Please enter your desired completion month";
    
    }else{
        
         /********** Finish Day Maximum Value ***********/ 
        
         if(finishMonth>=1&&finishMonth<=12){
            switch(finishMonth){
                case 1:
                    dayMax = 31;
                    break;
                case 2:
                    if(finishYear%4===0)
                        dayMax = 29;
                    else
                        dayMax = 28;
                    
                    break;
                default:
                    if(finishMonth%2===1)
                        dayMax=31;
                    else
                        dayMax = 30;
            }
        }else{
            
            highlightInvalid(document.getElementById("finishTimeMonth"),1);
            valid = false;
            message = message + "\n Please enter a valid completion month";
        }
     }
    
     /********** Finish Day Validation ***********/ 
    
    if(finishDay===""||finishDay===null||
            document.getElementById("finishTimeDay").style.color ===color){
        
        highlightInvalid(document.getElementById("finishTimeDay"),1);
        valid = false;
        message = message + "\n Please enter your desired completion day";
        
    }else if(finishDay>dayMax||finishDay<1){
        
        highlightInvalid(document.getElementById("finishTimeDay"),1);
        valid = false;
        message = message + "\n Please enter a valid completion day";
        }
    
        /********** Full Date Validation ***********/ 
            
        if(startYear>finishYear){
            
            highlightInvalid(document.getElementById("startTimeYear"),1);
            highlightInvalid(document.getElementById("finishTimeYear"),1);
            valid = false;
            message = message + "\n \n Your project cannot finish before it has started";
            
        }else if(startYear===finishYear){
            
            if(startMonth>finishMonth){
                
                highlightInvalid(document.getElementById("startTimeMonth"),1);
                highlightInvalid(document.getElementById("finishTimeMonth"),1);
                valid = false;
                message = message + "\n \n Your project cannot finish before it has started";
                
            }else if(startMonth===finishMonth){
                
                if(startDay>finishDay){
                    
                    highlightInvalid(document.getElementById("startTimeDay"),1);
                    highlightInvalid(document.getElementById("finishTimeDay"),1);
                    valid = false;
                    message = message + "\n \n Your project cannot finish before it has started"; 
                }
            }
        }
       
    
        /********** Action To Be Taken ***********/ 
            
            
    var englishFix = "An";
    
     if(jobType==="Plumber")
        englishFix = "A";
            
    if(valid){
        
        var text = "<h2>Is the follow information correct?</h2> \n\
        <p> "+firstName+" " +lastName+"</p><p>"+email+"</p><p>"+addressp2+"</p><p>\n\
        "+addressp1+"</p><p>"+homePhone+"</p><br><h3>Seeking</h3>\n\
        <p>"+englishFix+" " + jobType+" working on a budget of $"+budget+"</p>"+
        "<p>Starting on "+startMonth+"/"+startDay+"/"+startYear+
        " Finishing on "+finishMonth+"/"+finishDay+"/"+finishYear+"</p>"+
        "<br><br><input id='goButton' type = 'button' onclick='finder()' value='Next'> ";
         
        htmlChanger(document.getElementById("form"),text);
        
    }else{
        
        alert(message);
    }
    
    
}

function finder(){
    var text = "<h3>Thank you for using HandyManLocator.com!</h3>";
    htmlChanger(document.getElementById("form"),text);
    window.open("./popup.html","Your HandyMan","width = 500, height = 350");
    
}

function helper(){
    document.getElementById("clippy").src = "Pictures/Shrek.gif";
    
}

function popup(){
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    var image = document.getElementById("handyman");
    var data = document.getElementById("data");
    
  
        switch(randomNumber){
            case 1:
                image.src ='Pictures/electrician1.jpg';
                data.innerHTML="You have been matched with Peggy";
                break;
            
            case 2:
                image.src ='Pictures/electrician.jpg';
                data.innerHTML="You have been matched with Dave";
                break;
        
            case 3:
                image.src ='Pictures/electrician2.jpg';
                data.innerHTML="You have been matched with Brian";
                break;
            
            case 4:
                image.src ='Pictures/electrician3.jpg';
                data.innerHTML="You have been matched with Gus";
                break;
            
            case 5:
                image.src ='Pictures/electrician4.jpg';
                data.innerHTML="You have been matched with Bill";
                break;
            
            case 6:
                image.src ='Pictures/plumber1.jpg';
                data.innerHTML="You have been matched with Jimithy";                
                break;
            
            case 7:
                image.src ='Pictures/plumber2.jpg';
                data.innerHTML="You have been matched with Fred";
                break;
            
            case 8:
                image.src ='Pictures/plumber3.jpg';
                data.innerHTML="You have been matched with Dr. Tickles";
                break;
            
            case 9:
                image.src ='Pictures/plumber4.jpg';
                data.innerHTML="You have been matched with Carl";
                break;
            
            default:
                image.src ='Pictures/plumber5.jpg';
                data.innerHTML="You have been matched with The Great Papyrus";
        
    }
}

function formOnLoad(){
    find();
    var date = new Date();
    
    var color2 = "#000000";//final color
    
    /********** Set Default Dates***********/ 
    
    textEditor(document.getElementById("finishTimeYear"),date.getFullYear());
    textEditor(document.getElementById("finishTimeMonth"),date.getMonth()+1);
    textEditor(document.getElementById("finishTimeDay"),date.getDate()+1);
    
    textEditor(document.getElementById("startTimeYear"),date.getFullYear());
    textEditor(document.getElementById("startTimeMonth"),date.getMonth()+1);
    textEditor(document.getElementById("startTimeDay"),date.getDate());
    
    /********** Change Color of Default Dates***********/ 
    
    colorEditor(document.getElementById("finishTimeYear"),color);
    colorEditor(document.getElementById("finishTimeMonth"),color);
    colorEditor(document.getElementById("finishTimeDay"),color);
    
    colorEditor(document.getElementById("startTimeYear"),color);
    colorEditor(document.getElementById("startTimeMonth"),color);
    colorEditor(document.getElementById("startTimeDay"),color);
    
    /********** Revert Color Of The Date On Click***********/ 
    
    formListenerColor(document.getElementById("finishTimeYear"),color2);
    formListenerColor(document.getElementById("finishTimeMonth"),color2);
    formListenerColor(document.getElementById("finishTimeDay"),color2);
    
    
    formListenerColor(document.getElementById("startTimeYear"),color2);
    formListenerColor(document.getElementById("startTimeMonth"),color2);
    formListenerColor(document.getElementById("startTimeDay"),color2);
    
    /********** Shows User Proper Phone Number Style ***********/ 
    
    var phoneText = "(###)-###-####";
    textEditor(document.getElementById("homeNum"),phoneText);
    colorEditor(document.getElementById("homeNum"),color);
    numberListener(document.getElementById("homeNum"),color2);
    
}     

/* global aStartYear, aStartDay, aStartMonth, aFinishYear, aFinishDay, aFinishDay, aFinishMonth, date */
var invalidChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","?",";",":","`","~","\\","|","<",">",",","."];
var isLoggedin = false;
var currentAccount = null;
var jobType = "";
var color = "#737373";
var ticker =0;
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
    element.addEventListener("click",function(){colorEditor(element,color);});
}
function numberListener(element,color){
    element.addEventListener("click",function(){
        textEditor(element,"");colorEditor(element,color);});
}
function borderEditor(element,border){
    element.style.border=border;
}
function paddingEditor(element,padding){
    element.style.padding = padding;
}
function highlightInvalid(element,type){ 
    var text = "2px solid #F00";
    borderEditor(element,text);
    if(type===1)
        element.addEventListener("click",function(){
            borderEditor(element," 1px groove #f1f1f1");paddingEditotr(element,"2px");}); 
    if(type===2)
        element.addEventListener("click",function(){
            borderEditor(element," 1px groove #f1f1f1");});
}
function userNameValidator(element,image){
    var input = element.value;
    var valid = true;
    for(i = 0; i<invalidChar.length;i++)
        if(input.indexOf(invalidChar[i])!==-1)
            valid = false;
    if(input.trim()===""||input===null)
        valid=false;
    if(valid)
        image.src="Pictures/valid.png";
    else
        image.src="Pictures/invalid.png";
}
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
            var text="<h2>Login Successful!</h2><h3>Welcome Back, "+user+"!</h3>";
            htmlChanger(container,text);
            borderEditor(container,"none #FFFFFF");
            isLoggedin=true;
            currentAccount = user;
            loginHeader();
        }else{
            htmlChanger(container,"<h3>Username or Password is incorrect</h3>");
            container.style.border="none #FFFFFF";
        }
    }    
}
function loginHeader(){
    if(isLoggedin){
        var text="Logged in as "+
            currentAccount+ "<a href='index.html'>logoff</a>"; 
        htmlChanger(document.getElementById("loggedInHeader"),text);
    }
}
function help(){
    var text = "<div id='chatBox'><p>Clippy: You look like you could use some help.</p></div>"+
      "<div id='messageForm'>"+"<input id='message' name='message' type='text'>"+
        "<input id='send' name='send' type='button' onclick='takeInput()' value='Send'>"+
      "</div>";
    htmlChanger(document.getElementById("chat"),text);
    htmlChanger(document.getElementById("help"),"");
}
function createAccount(){
    var password1 = document.getElementById("cpass1").value;
    var password2 = document.getElementById("cpass2").value;
    if(password1 !== password2){
        alert("Passwords must match");
    }else{
        var container = document.getElementById("login");
        container.style.width="100%";
        borderEditor(container,"none #FFFFFF");
        var text = "<h2>Account Creation Disabled</h2>";
        htmlChanger(container,text);
    }
}
function find(){
    var valid = true;
    var message = "";
    title = document.getElementById("title").value;
    firstName = document.getElementById("firstName").value.trim();
    lastName = document.getElementById("lastName").value.trim();
    email = document.getElementById("email").value.trim();
    addressp1 = document.getElementById("address").value.trim();
    addressp2 = document.getElementById("address2").value.trim();
    homePhone = document.getElementById("homeNum").value;
    budget = document.getElementById("budget").value;
    startYear = document.getElementById("startTimeYear").value; 
    startDay = document.getElementById("startTimeDay").value;
    startMonth = document.getElementById("startTimeMonth").value;
    finishYear = document.getElementById("finishTimeYear").value;
    finishDay = document.getElementById("finishTimeDay").value;
    finishMonth = document.getElementById("finishTimeMonth").value; 
    jobType = document.getElementById("job").value;
    if(firstName===""||firstName===null){
        highlightInvalid(document.getElementById("firstName"),1);
        valid = false;
        message = message + "\n Please enter your first name";
     } 
    if(lastName===""||lastName===null){
        highlightInvalid(document.getElementById("lastName"),1);
        valid = false;
        message = message + "\n Please enter your last name";
     }
    if(email===""||email===null){
        highlightInvalid(document.getElementById("email"),1);
        valid = false;
        message = message + "\n Please enter your email address";
    }else if(email.indexOf('@')===-1 || email.indexOf('.')===-1){ 
        highlightInvalid(document.getElementById("email"),1);
        message = message + "\n Please enter a valid email address";
        valid = false;
    } 
    if(addressp1===""||addressp1===null){
        highlightInvalid(document.getElementById("address"),1);
        valid = false;
        message = message + "\n Please enter your address";
    }
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
    if(jobType===""||jobType===null){
        highlightInvalid(document.getElementById("job"),2);
        valid = false;
        message = message + "\n Please select what you are looking for";
     }  
    if(budget===""||budget===null){
        highlightInvalid(document.getElementById("budget"),1);   
        valid = false;
        message = message + "\n Please enter your budget";
    }else if(budget <= 100){
         highlightInvalid(document.getElementById("budget"),1);
         valid = false;
         message = message + "\n Your budget is too small";
     }
    if(startYear===""||startYear===null){
        highlightInvalid(document.getElementById("startTimeYear"),1);
        valid = false;
        message = message + "\n Please enter your desired start year";
    } 
    if(startMonth===""||startMonth===null){
        highlightInvalid(document.getElementById("startTimeMonth"),1);
        valid = false;
        message = message + "\n Please enter your desired start month";  
    }
    if(startDay===""||startDay===null){
        highlightInvalid(document.getElementById("startTimeDay"),1);
        valid = false;
        message = message + "\n Please enter your desired start day";
    }
    if(finishYear===""||finishYear===null){
        highlightInvalid(document.getElementById("finishTimeYear"),1);
        valid = false;
        message = message + "\n Please enter your desired completion year";
     }
    if(finishMonth===""||finishMonth===null){
        highlightInvalid(document.getElementById("finishTimeMonth"),1);
        valid = false;
        message = message + "\n Please enter your desired completion month";
    }
    if(finishDay===""||finishDay===null){
        highlightInvalid(document.getElementById("finishTimeDay"),1);
        valid = false;
        message = message + "\n Please enter your desired completion day"; 
    }
    var address2 = "";
    if(addressp2!==""&&addressp2!==null)
        address2 = "<p>"+addressp2+"</p>";   
    var englishFix = "An";
    if(jobType==="Plumber")
        englishFix = "A"; 
    if(ticker===1){    
        if(valid){
            var text = "<h2>Is the follow information correct?</h2>"+
                "<p> "+firstName+" " +lastName+"</p><p>"+email+"</p>"+address2+"<p>"+
                addressp1+"</p><p>"+homePhone+"</p><br><h3>Seeking</h3>"+
                "<p>"+englishFix+" " + jobType+" working on a budget of $"+budget+"</p>"+
                "<p>Starting on "+startMonth+"/"+startDay+"/"+startYear+" Finishing on "
                +finishMonth+"/"+finishDay+"/"+finishYear+"</p><br><br>"+
                "<input id = 'back' class='back' type='button' onclick='goBack()' value='Back'>"+
                "<input id='goButton' class='next' type = 'button' onclick='finder()' value='Next'>";
            htmlChanger(document.getElementById("form"),text);        
        }else
            alert(message);
    }else
        ticker = 1;
}
function goBack(){
    var container = document.getElementById("form");
    var text = "<form>"+
        "<h3>Enter your Contact Information</h3>"+
        "<ul>"+
          "<li><label>Title</label>"+
            "<select id ='title' name = 'title'>"+
              "<option></option>"+
              "<option>Dr</option>"+
              "<option>Mr</option>"+
              "<option>Mrs</option>"+
              "<option>Ms</option>"+
            "</select>"+
          "</li>"+
          "<li><label>First Name </label>"+
            "<input id ='firstName' type='text' name ='firstName'></li>"+
          "<li><label>Last Name </label>"+
            "<input id='lastName' type='text' name = 'lastName'></li>"+
          "<li><label>Email Address </label>"+
            "<input id='email' type='email' name ='email'></li>"+
          "<li><label>Street Address </label>"+
            "<input id ='address' type ='text' name='address'></li>"+
          "<li><label>PO Box/APT# </label>"+
            "<input id='address2' type='text' name='address2'></li>"+
          "<li><label>Phone Number </label>"+
            "<input id='homeNum' type='text' name='homeNum'></li>"+
        "</ul>"+
        "<h3>What are you looking for?</h3>"+
        "<ul>"+
          "<li>"+
            "<select id ='job' name='job'>"+
              "<option></option>"+
              "<option id='electrician'>Electrician</option>"+
              "<option id='plumber'>Plumber</option>"+
            "</select><br>"+ 
          "</li>"+
          "<li><label>Budget </label>"+
            "<input id='budget' type='number' name='budget'><br></li>"+
          "<li id='sDate'><label>Start Date </label>"+
            "<input id='startTimeMonth' onchange = 'dateBlock()' class='monthday' type='number'"+
              ">-<input id='startTimeDay' onchange = 'dateBlock()' class='monthday' type='number'"+
              ">-<input id='startTimeYear' onchange = 'dateBlock()' class='year' type='number'>"+
          "</li>"+
          "<li id='fDate'><label>Finish Date </label>"+
            "<input id = 'finishTimeMonth' onchange = 'dateBlock()' class='monthday' type='number'"+
              ">-<input id ='finishTimeDay' onchange = 'dateBlock()' class='monthday' type='number'"+
              ">-<input id ='finishTimeYear' onchange = 'dateBlock()' class='year' type='number'>"+
          "</li>"+
        "</ul>"+            
      "</form>"+
      "<input id='reset' class='back' type='button' onclick='resetForm()' value='Reset'>"+
        "<input id='goButton' class='next' type='button' onclick='find()' value='Go!'>";
    htmlChanger(container,text);  
    textEditor(atitle,title);
    textEditor(aFirstName,firstName);
    textEditor(aLastName,lastName);
    textEditor(aEmail,email);
    textEditor(aAddressp1,addressp1);
    textEditor(aAddressp2,addressp2);
    textEditor(aHomePhone,homePhone);
    textEditor(aBudget,budget);
    textEditor(aStartYear,startYear);
    textEditor(aStartDay,startDay);
    textEditor(aStartMonth,startMonth);
    textEditor(aFinishYear,finishYear);
    textEditor(aFinishDay,finishDay);
    textEditor(aFinishMonth,finishMonth);
    textEditor(jType,jobType);  
}
function resetForm(){
    textEditor(atitle,"");
    textEditor(aFirstName,"");
    textEditor(aLastName,"");
    textEditor(aEmail,"");
    textEditor(aAddressp1,"");
    textEditor(aAddressp2,"");
    textEditor(aHomePhone,"");
    textEditor(aBudget,"");
    textEditor(aStartYear,"");
    textEditor(aStartDay,"");
    textEditor(aStartMonth,"");
    textEditor(aFinishYear,"");
    textEditor(aFinishDay,"");
    textEditor(aFinishMonth,"");
    textEditor(jType,"");
    ticker = 0;
    formOnLoad();
}
function dateBlock(){
    startYear = aStartYear.value; 
    startDay = aStartDay.value;
    startMonth = aStartMonth.value;
    finishYear = aFinishYear.value;
    finishDay = aFinishDay.value;
    finishMonth = aFinishMonth.value;
    var dayMax = 30;
    var text;
    if(startYear<date.getFullYear()||startYear===""||startYear===null)
        textEditor(aStartYear,date.getFullYear());
    if(startDay<1||startDay===""||startMonth===null)
        textEditor(aStartDay,"1");
    if(startMonth<1||startMonth===""||startMonth===null)
        textEditor(aStartMonth,"1");
    if(finishYear<startYear||finishYear===""||finishYear===null||finishYear===" ")
        textEditor(aFinishYear,startYear);
    if(finishDay<1||finishDay===""||finishDay===null)
        textEditor(aFinishDay,"1");
    if(finishMonth<1||finishMonth===""||finishMonth===null)
        textEditor(aFinishMonth,"1");
    if(finishMonth>12)
        textEditor(aFinishMonth,"12");
    if(startMonth<=12){         
        if(startMonth==="4"||startMonth==="6"||startMonth==="9"||startMonth==="11")
            dayMax=30;    
        if(startMonth==="1"||startMonth==="3"||startMonth==="5"||startMonth==="7"||
                startMonth==="8"||startMonth==="10"||startMonth==="12")
            dayMax=31;
        if(startMonth==="2"){
            if(startYear%4===0)
                dayMax=29;
            else
                dayMax=28;
        }
    }else
            dayMax = 31;
    if(finishMonth==="4"||finishMonth==="6"||finishMonth==="9"||finishMonth==="11")
        dayMax=30;
    if(finishMonth==="1"||finishMonth==="3"||finishMonth==="5"||finishMonth==="7"||
        finishMonth==="8"||finishMonth==="10"||finishMonth==="12")
        dayMax=31;
    if(finishMonth==="2"){
        if(finishYear%4===0)
            dayMax=29;
        else
            dayMax=28;
    }
    if(startMonth>12){
        textEditor(aStartMonth,"1");
        textEditor(aStartDay,"1");
        textEditor(aFinishMonth,"1");
        textEditor(aFinishDay,"1");
        text = (Number(finishYear) + 1) + "";
        textEditor(aStartYear,text);
        textEditor(aFinishYear,text);
    }else{        
        if(startDay>dayMax){
            if(startMonth==="12"){
                text = (Number(finishYear) + 1) + "";
                textEditor(aFinishYear,text);
                textEditor(aStartYear,text);
                textEditor(aStartMonth,"1");
                textEditor(aStartDay,"1");
                textEditor(aFinishDay,"1");
                textEditor(aFinishDay,"1");                        
            }else{
                text = (Number(finishMonth)+1)+"";
                textEditor(aFinishMonth,text);
                textEditor(aStartMonth,text);
                textEditor(aFinishDay,"1");
                textEditor(aStartDay,"1");
            }
        }
        if(startYear>finishYear)
            textEditor(aFinishYear,startYear);
        if(startYear===finishYear){
            if(startMonth>finishMonth)
                textEditor(aFinishMonth,startMonth);
            if(startMonth===finishMonth){
                if(startDay>finishDay)
                    textEditor(aFinishDay,startDay);
                if(startDay<date.getDate())
                        textEditor(aStartDay,date.getDate()); 
            }
        }else{
            if(startMonth===finishMonth){
                if(startDay>finishDay)
                    textEditor(aFinishDay,startDay);
            }else{        
                if(startMonth>finishMonth)
                    textEditor(aFinishMonth,startMonth); 
            }
        }
    }    
}
function finder(){
    var text = "<h3>Thank you for using HandyManLocator.com!</h3>";
    htmlChanger(document.getElementById("form"),text);
    window.open("./popup.html","Your HandyMan","width = 500, height = 350");
}
function popup(){
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    var image = document.getElementById("handyman");
    var data = document.getElementById("data");
    switch(randomNumber){
        case 1:
            image.src ='Pictures/electrician1.jpg';
            htmlChanger(data,"You have been matched with Peggy");
            break;
        case 2:
            image.src ='Pictures/electrician.jpg';
            htmlChanger(data,"You have been matched with Dave");
            break;
        case 3:
            image.src ='Pictures/electrician2.jpg';
            htmlChanger(data,"You have been matched with Brian");
            break;
        case 4:
            image.src ='Pictures/electrician3.jpg';
            htmlChanger(data,"You have been matched with Gus");
            break;
        case 5:
            image.src ='Pictures/electrician4.jpg';
            htmlChanger(data,"You have been matched with Bill");
            break;
        case 6:
            image.src ='Pictures/plumber1.jpg';
            htmlChanger(data,"You have been matched with Jimithy");                
            break;
        case 7:
            image.src ='Pictures/plumber2.jpg';
            htmlChanger(data,"You have been matched with Fred");
            break;
        case 8:
            image.src ='Pictures/plumber5.jpeg';
            htmlChanger(data,"You have been matched with Carl");
            break;
        case 9:
            image.src ='Pictures/plumber4.jpg';
            htmlChanger(data,"You have been matched with Dr. Tickles");
            break;
        default:
            image.src ='Pictures/plumber5.jpg';
            htmlChanger(data,"You have been matched with The Great Papyrus");
    }
}
function formOnLoad(){
    date = new Date();
    find();
    aFirstName = document.getElementById("firstName");
    aLastName = document.getElementById("lastName");
    aEmail = document.getElementById("email");
    aAddressp1 = document.getElementById("address");
    aAddressp2 = document.getElementById("address2");
    aHomePhone = document.getElementById("homeNum");
    aBudget = document.getElementById("budget");
    aStartYear = document.getElementById("startTimeYear"); 
    aStartDay = document.getElementById("startTimeDay");
    aStartMonth = document.getElementById("startTimeMonth");
    aFinishYear = document.getElementById("finishTimeYear");
    aFinishDay = document.getElementById("finishTimeDay");
    aFinishMonth = document.getElementById("finishTimeMonth");
    jType = document.getElementById("job");
    atitle = document.getElementById("title");
    var color2 = "#000000";//final color
    textEditor(aFinishYear,date.getFullYear());
    textEditor(aFinishMonth,date.getMonth()+1);
    textEditor(aFinishDay,date.getDate()+1);
    textEditor(aStartYear,date.getFullYear());
    textEditor(aStartMonth,date.getMonth()+1);
    textEditor(aStartDay,date.getDate());
    dateBlock();
    colorEditor(aFinishYear,color);
    colorEditor(aFinishMonth,color);
    colorEditor(aFinishDay,color);
    colorEditor(aStartYear,color);
    colorEditor(aStartMonth,color);
    colorEditor(aStartDay,color);
    formListenerColor(aFinishYear,color2);
    formListenerColor(aFinishMonth,color2);
    formListenerColor(aFinishDay,color2);
    formListenerColor(aStartYear,color2);
    formListenerColor(aStartMonth,color2);
    formListenerColor(aStartDay,color2);
    textEditor(aHomePhone,"(###)-###-####");
    colorEditor(aHomePhone,color);
    numberListener(aHomePhone,color2);
}    
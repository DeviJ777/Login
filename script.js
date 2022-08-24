const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  form1 = id("form1"),
  loginemail=id('loginemail'),
  loginpassword=id('loginpassword'),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
  let users=[];
// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
  adduser();
});
form1.addEventListener("submit", (e) => {
    e.preventDefault();
  
    
    engine(loginemail, 3, "Email cannot be blank");
    engine(loginpassword, 4, "Password cannot be blank")
    loginuser();

  });

// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    
    return;
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    
    return;
    
  }
  
};
function adduser()
{
    let user = {
        
        email:email.value,
        password:password.value,
      };
      users.push(user);
      localStorage.setItem('person', JSON.stringify(users));
      
     
   
      
}
function loginuser()
{
    checkemail={email:loginemail.value,password:loginpassword.value};
    
   
    const persons=JSON.parse(localStorage.getItem('person'));
    console.log(persons);
    console.log(checkemail);
    console.log(persons.indexOf(checkemail) > -1)
    if(persons.indexOf(checkemail) > -1){
        alert("not ok");
    } else{
        window.location.href = "./index.html";
    }
    
}


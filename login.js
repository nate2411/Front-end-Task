let login_form = document.querySelector(".signin-form");
let reg_form = document.querySelector(".signinbtn");

if (login_form != null) {
    login_form.addEventListener("submit", e => {
        e.preventDefault();

        let user_details = {
            username: document.querySelector(".username").value, 
            password: document.querySelector(".password").value
        }

        console.log(user_details);

        fetch("https://end-of-term.herokuapp.com//user-login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_details)
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data); 
            
            if (data["status_code"] == 201) {
                console.log(data);
                getToken(user_details);
                // console.log(localStorage.getItem("jwt_token", JSON.stringify(data.access_token)))   

                window.location.href="index.html"
              }else{
                  alert("Login Unsuccessful, please try again")
              }
        });
    })
}

if (reg_form != null) {
    reg_form.addEventListener("submit", e => {
      
        e.preventDefault();
        
 
        let new_user = {
            first_name: document.querySelector(".first_name").value,
            last_name: document.querySelector(".last_name").value, 
            username: document.querySelector(".username").value,
            email_address: document.querySelector(".email_address").value,
            address: document.querySelector(".address").value, 
            password: document.querySelector(".password").value
        }
    
        console.log(new_user);
        
        fetch("https://end-of-term.herokuapp.com/user-registration/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(new_user)
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data); 
            
            let current_user = data.current_user;
            localStorage.setItem("current_user", JSON.stringify(current_user))
            window.location.href="login.html"
            
        });
    })
}

function getToken(user_details) {
    fetch("https://end-of-term.herokuapp.com/auth", {
        method: "POST",
        body: JSON.stringify(user_details),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.access_token) {
            localStorage.setItem("jwt_token", JSON.stringify(data.access_token))
        }

    });
}
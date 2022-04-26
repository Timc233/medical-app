<template>
<div class="wrapper">
            <h1 class="portal-title">
                Create your account
            </h1>
            <div class="input-fields">
                <input placeholder="Username">
                <hr class="line-separator">
                <input text="Email" placeholder="Email" id="email-text">
                <hr class="line-separator">
                <input text="Password" placeholder="Password" id="password-text">
                <hr class="line-separator">
                <input placeholder="Confirm">
                <hr class="line-separator">
                
                <button id="signup-button" >Sign up</button>
                
            </div>
            <footer></footer>
</div>
        

    
</template>

<style>

@font-face{
    font-family:"Alef";
    font-weight:400;
    src:local("Alef"), url("src/assets/fonts/Alef-Regular.ttf")
}

body{
    background: rgb(93,171,255);
    background: radial-gradient(circle, rgba(93,171,255,1) 0%, rgba(255,255,255,1) 55%);
    
    /* background-color: rgba(255, 255, 255, .15);   */
    /* backdrop-filter: blur(25px); */
  }

h1, a, p, #signin-button, input{
    font-family: "Alef";
}

.wrapper{
    margin:12% auto;
    padding:20px;
    border-radius: 5px;
    width:max-content;
    background-color: #ffffff;
}

.portal-title{
    margin: 3rem 0;
    width: 100%;
    text-align: center;
}

.input-fields{
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    margin:0 auto;
    max-width: 20rem;
    /* margin-top: 5rem; */
}

input{
    width:20rem;
    height:1.5rem;
    margin:0.5rem 0 0 0;
    border:0;
    padding:0.5rem;

}

input:focus{
    outline: none;
}

.line-separator{
    border: 1px solid #bbb;
    width:20rem;
    margin:0;
}

#signup-button{
    margin:2rem auto;
    width:20.5rem;
    height:2rem;
    background-color: #007AFF;
    color: #ffffff;
    border-radius: 10px;
    border-style: solid;
    transition: 0.2s;
}

#signin-button:hover{
    background-color: #1b66ca;
}

#signin-button:active{
    background-color: #1d539c;
}

#forgot-password{
    color:#007AFF;
    text-align: end;
    margin:1rem 0;
}

#no-account{
    color:#8a8a8e;
}

#create-account{
    color: #007AFF;
    transition: 0.2s;
}

#create-account:hover{
    color: #064384;
}

#create-account:active{
    color: #000f1f;
}
</style>

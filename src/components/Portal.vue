<script setup>

</script>

<template>
<div class="wrapper">
            <h1 class="portal-title">
                Portal Here
            </h1>

            <div class="input-fields">
            <input text="Email" placeholder="Email" id="email-text">
            <hr id="line-separator">
            <input text="Password" placeholder="Password" id="password-text">
            <hr id="line-separator">
            <a text="Forgot password?" id="forgot-password"></a>
            <button id="signin-button">Sign in</button>
            <p id="no-account">Don't have an account? <span id="create-account"><a>Create Account</a></span></p>
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
    /* background: rgb(93,171,255);
    background: radial-gradient(circle, rgba(93,171,255,1) 0%, rgba(255,255,255,1) 55%);
     */
    /* background-color: rgba(255, 255, 255, .15);   */
    /* backdrop-filter: blur(25px); */
  }

h1, a, p, #signin-button, input{
    font-family: "Alef";
}

.wrapper{
    margin:15% auto;
    padding:20px;
    border-radius: 5px;
    width:max-content;
    background-color: #ffffff;
}

.portal-title{
    margin: auto;
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

#email-text, #password-text{
    width:20rem;
    height:1.5rem;
    margin:0.5rem 0 0 0;
    border: 0;

}

#line-separator{
    border-top: 1px solid #bbb;
    width:20rem;
    margin:0;
}

#signin-button{
    margin:0 auto;
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
}

</style>
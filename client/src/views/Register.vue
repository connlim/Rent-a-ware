<template>
    <div id="register">
        <h1>Register</h1>
        <input type="text" name="Username" v-model="input.username" placeholder="Username" />
        <input type="password" name="Password" v-model="input.password" placeholder="Password" />
        <!--<button type="button" v-on:click="login()">Login</button>-->
        <a class="button is-primary" v-on:click="register()">
            <span>Register</span>
        </a>
    </div>
</template>

<script>
    import {register as registerServer} from '../data/api';

    export default {
        name: 'Register',
        data() {
            return { //stores creds here
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            register() {
                if(this.input.username != "" && this.input.password != "") {
                    registerServer(this.input.username, this.input.password);
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #register {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #f1f8e9;
        margin: auto;
        margin-top: 350px;
        padding: 20px;
    }
</style>
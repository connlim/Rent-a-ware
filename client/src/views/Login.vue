<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="Username" v-model="input.username" placeholder="Username" />
        <input type="password" name="Password" v-model="input.password" placeholder="Password" />
        <!--<button type="button" v-on:click="login()">Login</button>-->
        <a class="button is-primary" v-on:click="login()">
            <span>Sign In</span>
        </a>
    </div>
</template>

<script>
    import auth from '../data/auth';
    export default {
        name: 'Login',
        data() {
            return { //stores creds here
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            async login() {
                if(this.input.username != "" && this.input.password != "") {
                    let {username, password} = this.input;
                    let resp = await auth.login(username, password);
                    if(resp.status === 200) {
                        this.$emit("authenticated", true);//use passport
                        this.$router.replace({ name: "product" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #f1f8e9;
        margin: auto;
        margin-top: 350px;
        padding: 20px;
    }
</style>
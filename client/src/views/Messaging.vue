<script>
import Card from '../components/chatcomponents/card';
import List from '../components/chatcomponents/list';
import Text from '../components/chatcomponents/text';
import Message from '../components/chatcomponents/message';
import NavbarTransparent from '../components/NavbarTransparent';
import '../store';
export default {
    components: { Card, List, Text, Message, NavbarTransparent },
    mounted () {
        this.$store.commit('initData');
    }
}
</script>

<template>
<div id="app">
    <div class="sidebar">
        <card></card>
        <list></list>
    </div>
    <div class="main">
        <div class="main-head">
            <NavbarTransparent />
        </div>
        <message></message>
        <text></text>
    </div>
</div>
</template>

<style lang="less" scoped>
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;
    overflow: hidden;
    border-radius: 3px;
    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
</style>
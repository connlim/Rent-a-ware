<script>
import '../../store';
import { mapGetters } from 'vuex';
export default {
    methods: {
        onKeyup (e) {
            this.search(e.target.value);
        }
    },
    computed: {
        ...mapGetters([
            'user',
            'filterKey',
        ])
    }
};
</script>

<template>
<div class="card">
    <header>
        <img class="avatar" width="40" height="40" :alt="user.name" src="../../assets/user.png">
        <p class="name">{{user.name}}</p>
    </header>
    <footer>
        <input class="search" type="text" placeholder="search user..." on-keyup="onKeyup | debounce 150">
    </footer>
</div>
</template>

<style scoped lang="less">
.card {
    padding: 12px;
    border-bottom: solid 1px #24272C;
    background-color: #2E3238;
    footer {
        margin-top: 10px;
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
        font-size: 16px;
    }
    .search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: solid 1px #3a3a3a;
        border-radius: 4px;
        outline: none;
        background-color: #26292E;
    }
}
</style>
/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        // 当前用户
        user: {
            name: 'Albert',
            img: 'dist/images/1.jpg'
        },
        // 会话列表
        sessions: [
            {
                id: 1,
                user: {
                    name: 'Akash',
                    img: 'assets/logo.png'//replace with his face later
                },
                messages: [
                    {
                        messageText: 'Hello，May I rent a labcoat every wednesday for my chemistry prac.',
                        date: now
                    }, {
                        messageText: 'Please.',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'Shi Hern',
                    img: 'assets/logo.png'
                },
                messages: [
                    {
                        messageText: 'Hi i need to borrow GC.',
                        date: now
                    }
                ]
            }
        ],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    mutations: {
        initData (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        sendMessage ({ sessions, currentSessionId }, messageText) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                messageText: messageText,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        selectSession (state, id) {
            state.currentSessionId = id;
        } ,
        // 搜索
        search (state, value) {
            state.filterKey = value;
        }
    },
    getters: {
        user: ({ user }) => user,
        filterKey: ({ filterKey }) => filterKey,
        // 过滤后的会话列表
        sessions: ({ sessions, filterKey }) => {
            let result = sessions.filter(session => session.user.name.includes(filterKey));
            return result;
        },
        // 当前会话index
        currentId: ({ currentSessionId }) => currentSessionId,
        session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId)
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
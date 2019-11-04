export const setUser = ({ commit }, user) => {
  commit('userStatus', user)
}
export const setToken = ({ commit }, userToken) => {
  commit('userToken', userToken)
}
export const getMessages = ({ commit }) => {
  /* axios.get('api/message/list').then((response) => {
        const messages = response.data
        commit(RECEIVE_MESSAGES, { messages })
      }) */
  setTimeout(() => {
    const messages = [
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000025',
        content: '今天天气不错',
        time: '2019-10-31 15:54:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000002',
          name: 'Evan Yo',
          avatar: 'https://avatars2.githubusercontent.com/u/499550?s=460&v=4'
        },
        id: 'msg_0000024',
        content: 'Vue is fun',
        time: '2019-10-31 15:52:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000023',
        content: '今天天气不错',
        time: '2019-10-31 15:51:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000003',
          name: '王昭君',
          avatar: 'https://avatars3.githubusercontent.com/u/16809729?s=460&v=4'
        },
        id: 'msg_0000022',
        content: '隐约雷鸣，阴霾天空，但盼风雨来，能留你在此。',
        time: '2019-10-31 15:50:30',
        likes: ['Super Admin', 'Jack']
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000021',
        content: '今天天气不错',
        time: '2019-10-31 15:45:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000004',
          name: '李白',
          avatar: 'https://avatars3.githubusercontent.com/u/39814390?s=460&v=4'
        },
        id: 'msg_0000020',
        content: '我左边画一条龙，我右边画一道彩虹',
        time: '2019-10-31 15:44:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000019',
        content: '今天天气不错',
        time: '2019-10-31 14:54:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000005',
          name: '西施',
          avatar: 'https://avatars1.githubusercontent.com/u/9712785?s=460&v=4'
        },
        id: 'msg_0000018',
        content: '欲把西湖比西子,淡妆浓抹总相宜',
        time: '2019-10-31 14:52:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000017',
        content: '今天天气不错',
        time: '2019-10-31 14:51:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000006',
          name: '哆啦A梦',
          avatar: 'https://avatars3.githubusercontent.com/u/3580607?s=460&v=4'
        },
        id: 'msg_0000016',
        content: '我是谁!我在哪!',
        time: '2019-10-31 14:44:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000015',
        content: '今天天气不错',
        time: '2019-10-31 14:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000014',
        content: '今天天气不错',
        time: '2019-10-31 14:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000013',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000012',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000011',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000010',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000009',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000008',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000007',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000006',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000005',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000004',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000003',
        content: '今天天气不错',
        time: '2019-10-31 12:25:30',
        likes: []
      },
      {
        user: {
          id: 'user_0000007',
          name: '小明',
          avatar: 'https://avatars1.githubusercontent.com/u/13792373?s=460&v=4'
        },
        id: 'msg_0000002',
        content: '把我的屠龙刀拿来',
        time: '2019-10-31 12:22:40',
        likes: []
      },
      {
        user: {
          id: 'user_0000001',
          name: 'Jack',
          avatar:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        id: 'msg_0000001',
        content: '今天天气不错',
        time: '2019-10-31 12:15:30',
        likes: []
      }
    ]
    commit('receiveMessages', { messages })
  }, 1000)
}
export const addMessage = ({ commit }, message) => {
  /* axios.post('api/message/add', {
      message
    }).then((response) => {

    }) */
  commit('addMessage', { message })
  commit('resetStart')
}
export const increaseStart = ({ commit }) => {
  commit('increaseStart')
}
export const decreaseStart = ({ commit }) => {
  commit('decreaseStart')
}
export const resetStart = ({ commit }) => {
  commit('resetStart')
}
export const increaseLikes = ({ commit }, { messageId, username }) => {
  commit('increaseLikes', { messageId, username })
}
export const decreaseLikes = ({ commit }, { messageId, username }) => {
  commit('decreaseLikes', { messageId, username })
}

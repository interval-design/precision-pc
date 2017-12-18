<template>
  <transition name="page">
    <div class="itv-base-message" v-show="visible">
      <div class="itv-base-message-wrap">
        <header class="itv-base-message-header">
          <span class="itv-base-message-close itv-icon itv-icon-close" @click="close"></span>
        </header>
        <section class="itv-base-message-body">
          <h3 class="itv-base-message-title">给客服留言</h3>
          <ul class="itv-base-message-list" v-show="messageList.length>0">
            <li v-for="item in messageList" :key="item.id" :class="{user: item.user}"
                class="itv-base-message-list-item">
              <div class="itv-base-message-list-item-time">
                <span class="itv-base-message-list-item-time-line"></span>
                {{item.iso_create_time | toTime}}
                <span class="itv-base-message-list-item-time-line"></span>
              </div>
              <div class="itv-base-message-list-item-msg">
                <img v-if="item.user && $store.state.user.wx_user_info.headimgurl" :src="$store.state.user.wx_user_info.headimgurl">
                <img v-else src="../assets/default-avatar.png">
                <p>{{item.content}}</p>
              </div>
            </li>
          </ul>
          <div class="itv-base-message-reply">
            <textarea v-model="replyVal" @keyup.enter="submit"></textarea>
          </div>
        </section>
        <footer class="itv-base-message-footer">
          <base-button szie="big" class="itv-base-message-submit" @click="submit">提交</base-button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  import ApiUser from '../api/user.js'
  export default {
    name: 'BaseMessage',
    props: ['visible','orderId'],
    mounted() {
      this.list = this.$el.querySelector('.itv-base-message-list');
      this.getMessage();
    },
    data() {
      return {
        list: null,
        replyVal: '',
        messageList: []
      }
    },
    methods: {
      // 关闭弹窗
      close () {
        this.$emit('update:visible', false);
      },
      // 提交留言
      submit() {
        ApiUser.createMessageByOrder(this.orderId,{
          content: this.replyVal
        }).then(
          res => {
            if (res.data.code === 0) {
              this.getMessage();
              this.replyVal = '';
            }
          }
        )
      },
      // 留言列表滚动至底部
      scrollToBottom() {
        // 这里需要等dom渲染完再调用滚至底部
        this.$nextTick(()=>{
          this.list.scrollTop = this.list.scrollHeight;
        });
      },

      /**
       * 根据订单列出留言
       */
      getMessage() {
        ApiUser.getMessageByOrder(this.orderId).then(
          res => {
            if (res.data.code === 0) {
              this.messageList = res.data.data.messages;
            }
          }
        )
      },
    },
    filters: {
      toTime(val) {
        /**
         * 数字补零
         */
        var addZero = (num) => {
          return (num<10? '0':'') + num;
        }
        var time = new Date(val);
        // 本地时间零点
        var nowTime = new Date().setHours(0,0,0,0);
        // 时间差
        var timeVal = nowTime - time;

        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var day = time.getDate();
        var hour = addZero(time.getHours());
        var min = addZero(time.getMinutes());
        var sec = addZero(time.getSeconds());

        if (timeVal > 30*24*60*60*1000) {
          return `${year}-${month}-${day} ${hour}:${min}`;
        }else if (timeVal> 24*60*60*1000) {
          return Math.floor(timeVal/(24*60*60*1000)) + '天前'
        }else if (timeVal > 0) {
          return `昨天 ${hour}:${min}`;
        }else {
          return `${hour}:${min}`;
        }
      }
    },
    watch: {
      visible(newVal,oldVal) {
        newVal && this.scrollToBottom();
      },
      messageList() {
        this.scrollToBottom();
      },
      // 更换id时就更新消息列表
      orderId() {
        this.getMessage();
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/style/variable.scss';
.itv-base-message {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 9999;
  &-wrap {
    box-sizing: border-box;
    margin: 10vh auto 0;
    border: 1px solid $border;
    border-radius: 2px;
    width: 400px;
    background: #fff;
  }
  &-header {
    position: relative;
    height: 44px;
  }
  &-close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  &-body {
    padding: 0 24px;
  }
  &-title {
    font-size: 18px;
    text-align: center;
  }
  &-list {
    margin-top: 24px;
    height: 220px;
    overflow-y: auto;
    transition: .5s;
    &-item {
      margin-top: 16px;
      &-msg {
        display: flex;
        img {
          margin-right: 16px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
        p {
          position: relative;
          padding: 8px;
          margin-bottom: auto;
          width: 230px;
          border-radius: 2px;
          font-size: 12px;
          color: $font-sub;
          background: #f7f7f7;
          &:before {
            content: "";
            position: absolute;
            left: -12px;
            top: 6px;
            border: 6px solid transparent;
            border-right-color: #f7f7f7;
          }
        }
      }
      &.user {
        .itv-base-message-list-item-msg {
          flex-direction: row-reverse;
          img {
            margin-right: 0;
            margin-left: 16px;
          }
          p {
            &:before {
              left: auto;
              right: -12px;
              border-right-color: transparent;
              border-left-color: #f7f7f7;
            }
          }
        }
      }
      &-time {
        padding: 8px 0;
        display: flex;
        justify-content: center;
        &-line {
          margin: auto 8px;
          width: 18px;
          height: 0;
          border-bottom: 1px solid $border;
        }
      }
    }
  }
  &-reply {
    margin-top: 40px;
    textarea {
      padding: 8px;
      border: 1px solid $border;
      width: 100%;
      height: 144px;
      background: #f7f7f7;
    }
  }

  &-footer {
    padding: 24px 56px 32px;
  }
  &-submit {
    width: 100%;
  }
}
</style>

<template>
  <transition name="page">
    <div class="itv-base-message" v-show="visible">
      <div class="itv-base-message-wrap">
        <header class="itv-base-message-header">
          <span class="itv-base-message-close itv-icon itv-icon-close" @click="close"></span>
        </header>
        <section class="itv-base-message-body">
          <h3 class="itv-base-message-title">给客服留言</h3>
          <ul class="itv-base-message-list">
            <li v-for="item in messageList" :key="item.id" :class="{user: item.type==='user'}">
              <img :src="item.img">
              <p>{{item.message}}</p>
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
  export default {
    name: 'BaseMessage',
    props: ['visible'],
    mounted() {
      this.list = this.$el.querySelector('.itv-base-message-list');
    },
    data() {
      return {
        list: null,
        replyVal: '',
        messageList: [
          {
            type: 'user',
            img: 'https://avatars1.githubusercontent.com/u/25037123?s=200&v=4',
            message: '我的留言我的留言我的留言我的留言我的留言我的留言我的留言我的留言我的留言'
          },
          {
            type: 'precision',
            img: 'https://avatars1.githubusercontent.com/u/25037123?s=200&v=4',
            message: '客服回复2222客服回复2222客服回复2222客服回复'
          }
        ]
      }
    },
    methods: {
      // 关闭弹窗
      close () {
        this.$emit('update:visible', false);
      },
      // 提交留言
      submit() {
        this.messageList.push(
          {
            type: 'user',
            img: 'https://avatars1.githubusercontent.com/u/25037123?s=200&v=4',
            message: this.replyVal
          },
        );
        this.replyVal = '';
      },
      // 留言列表滚动至底部
      scrollToBottom() {
        // 这里需要等dom渲染完再调用滚至底部
        this.$nextTick(()=>{
          this.list.scrollTop = this.list.scrollHeight;
        });
      }
    },
    watch: {
      visible(newVal,oldVal) {
        newVal && this.scrollToBottom();
      },
      messageList() {
        this.scrollToBottom();
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
    >li {
      margin-top: 16px;
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
        width: 230px;
        border-radius: 2px;
        font-size: 12px;
        color: $font-sub;
        background: #f7f7f7;
        &:before {
          content: "";
          position: absolute;
          left: -20px;
          top: 8px;
          border: 10px solid transparent;
          border-right-color: #f7f7f7;
        }
      }
      &.user {
        flex-direction: row-reverse;
        img {
          margin-right: 0;
          margin-left: 16px;
        }
        p {
          &:before {
            left: auto;
            right: -20px;
            border-right-color: transparent;
            border-left-color: #f7f7f7;
          }
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

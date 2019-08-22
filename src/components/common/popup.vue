<template>
  <div class="modal" v-show='isShow'>
    <div class="modal-content">
      <div class="content-top">
        <slot name='title'></slot>
        <slot name='text'></slot>
      </div>
      <div class="content-btm" @click="confirm()">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: ['isShow'],
  methods: {
    confirm () {
      this.$emit('sure')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .modal {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);

    .modal-content {
      border-radius: 13px;
      overflow: hidden;
      background-color: #FFFFFF;
      width: 80%;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;

      .content-top {
        padding: 15px;
      }

      .content-btm {
        height: 44px;
        line-height: 44px;
        border-top: 1px solid #f0f0f0;
      }

      .modal-title {
        padding: 0 0 10px;
      }
    }
  }
</style>

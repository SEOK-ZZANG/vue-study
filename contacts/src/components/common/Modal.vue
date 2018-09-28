<template>
  <transition>
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title">Title</h5>
            </slot>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body">
              <p>Modal body text goes here.</p>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-primary" @click="save">Save</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
      props: {
        useBackDrop: {
          type: Boolean,
          default: true
        }
      },
      methods: {
        save() {
          this.$emit('save')
        },
        close() {
          this.$emit('close')
        }
      }
    }
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9990;
    overflow: hidden;
    display: block;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity 0.15s linear;
}

.modal-dialog {
    max-width: 550px;
    margin: 30px auto;
    vertical-align: middle;
}

.modal-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}

.modal-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
}

button.close {
    padding: 0;
    background: transparent;
    border: 0;
    -webkit-appearance: none;
}

.close {
    float: right;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}

.modal-footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 15px;
    border-top: 1px solid #e9ecef;
}
</style>
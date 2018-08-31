<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(item, index) in items" :key="index" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ item }}
                <span class="removeBtn" type="button" @click="removeTodo(item, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
   </section>
</template>

<script>
    export default {
        props:['items'],
        methods: {
            removeTodo(item, index){
                this.$emit('removeItem', item, index)
            }
        }

    }
</script>

<style scoped>
    .list-enter-acvive, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: o;
        transform: translateY(30px);
    }

    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color:#62ACDE;
        margin-right: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #DE4343
    }
</style>
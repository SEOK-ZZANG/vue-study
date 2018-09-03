<template>
    <!-- Child (Child.vue) Template -->
    <div>
        <hr>
        Child counter : {{ counter }} <br>
        <button @click="addCounter">+ 2</button>
        <button @click="subCounter">- 2</button>
    </div>
</template>

<script>
    export default {
        // props: ['passedCounter']

        computed: {
            counter(){
                return this.$store.getters.getCounter
            }
        },
        methods:{
            addCounter() {
                this.$store.dispatch('asyncIncrement',{
                    'by' : 2,
                    'duration' : 1000
                })
            },
            subCounter() {
                this.$store.dispatch('asyncDecrement',{
                    'by' : 2,
                    'duration' : 1000
                })
            }
        }
    }
</script>

<style scoped>

</style>
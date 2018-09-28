<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" v-if="startPageNo > 1" @click="pre">
                <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li v-for="n in pagging" :key="n" class="page-item" :class="{ active: pageNo == n }" @click="move(n)">
                <span class="page-link">{{ n }}</span>
            </li>
            <li class="page-item" v-if="endPageNo * pageSize < totalCount" @click="next">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                paggingSize : 10
            }
        },
        props: {
            pageNo: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 5
            },
            totalCount: {
                type:Number,
                default: 0
            }
        },

        computed: {
            startPageNo() {
                return parseInt((this.pageNo -1) / this.paggingSize) * this.paggingSize + 1
            },

            endPageNo() {
                let lastPage = parseInt(this.totalCount / this.pageSize) + 1

                if(lastPage > this.startPageNo + this.paggingSize - 1)
                    return this.startPageNo + this.paggingSize - 1
                else
                    return lastPage
            },

            pagging() {
                return Array.from({length: (this.endPageNo - this.startPageNo + 1)}, (v, k) => k + this.startPageNo)
            }
        },

        methods: {
            pre(){
                this.move(this.startPageNo - 10 )
            },

            next(){
                this.move(this.endPageNo + 1)
            },

            move(no){
                this.$emit('movePage', no)
            }
        },
    }
</script>

<style scoped>

</style>
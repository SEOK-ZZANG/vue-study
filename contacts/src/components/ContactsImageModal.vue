<template>
    <div class="wrap">
        <modal @close="cancel">
            <h3 slot="header">이미지 수정</h3>
            <div slot="body">
                <form>
                    <img class="img-thumbnail" :src="photo" alt="photo"  @click="trigger"/>
                    <input type="file" id="file2" ref="fileInput" @change="preview" accept="image/*" hidden>
                </form>
            </div>
            <span slot="footer">
                <button class="btn btn-secondary mr-1" @click="cancel">취소</button>
                <button class="btn btn-primary" @click="save">저장</button>
            </span>
        </modal>
    </div>
</template>

<script>
    import modal from '../components/common/Modal.vue'
    import axios from 'axios'

    export default {
        data() {
            return {
                no: this.item.no,
                photo: this.item.photo
            }
        },

        props: {
            item: {
                type: Object,
                default () {
                    return {
                        no: '',
                        photo:''
                    }
                }
            }
        },

        components: {
            modal
        },

        methods: {
            trigger(){
                this.$refs.fileInput.click()
            },
            preview(){
                let input = this.$refs.fileInput

                if (input.files && input.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                        this.photo = e.target.result;
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            },
            save() {
                let input = this.$refs.fileInput

                if (input.files && input.files[0]){
                    let formData = new FormData()
                    formData.append('photo', input.files[0])
                    
                    axios({
                        method: 'post',
                        url: `http://sample.bmaster.kro.kr/contacts/${this.no}/photo`,
                        data: formData,
                        headers: {'Content-Type': 'multipart/form-data'}
                    }).then((response) => {
                        alert(response.data.message)
                        if(response.data.status === 'success')
                            this.$emit('save')
                    }).catch((ex) => {
                        console.log('Updata Photo failed', ex);
                    })
                }
            },
            cancel() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .img-thumbnail {
        width: 200px;
        cursor: pointer;
    }

    .img-thumbnail:hover {
        border-color: blue;
    }
</style>
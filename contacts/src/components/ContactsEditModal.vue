<template>
    <div class="wrap">
        <modal @close="cancel">
            <h3 slot="header">연락처 {{ isNew ? "등록" : "수정" }}</h3>
            <div slot="body">
                <form>
                    <div v-if="!isNew" class="form-group row">
                        <label for="contactsNo" class="text-left col-sm-2 col-form-label">번호</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control-plaintext" id="contactsNo" v-model='contacts.no'>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contactsName" class="text-left col-sm-2 col-form-label">이름</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="contactsName" v-model='contacts.name'>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contactsTel" class="text-left col-sm-2 col-form-label">전화번호</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="contactsTel" v-model='contacts.tel'>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contactsAddress" class="text-left col-sm-2 col-form-label">주소</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="contactsAddress" v-model='contacts.address'>
                        </div>
                    </div>
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
                contacts: Object.assign({}, this.item)
            }
        },

        props: {
            isNew: {
                type: Boolean,
                default: true
            },
            item: {
                type: Object,
                default () {
                    return {
                        no: '',
                        name: '',
                        tel: '',
                        address: ''
                    }
                }
            }
        },

        components: {
            modal
        },

        methods: {
            save() {
                if(this.isNew)
                    this.addContacts()
                else
                    this.modifyContacts()
            },
            cancel() {
                this.$emit('close')
            },

            addContacts() {
                axios.post('http://sample.bmaster.kro.kr/contacts/', this.contacts)
                .then(() => {
                    this.$emit('save')
                })
                .catch((ex) => {
                    console.log('Add Contacts failed', ex);
                });
            },

            modifyContacts() {
                axios.put(`http://sample.bmaster.kro.kr/contacts/${this.contacts.no}/`, this.contacts)
                .then(() => {
                    this.$emit('save')
                })
                .catch((ex) => {
                    console.log('Modify Contacts failed', ex);
                });
            },
        }
    }
</script>

<style scoped>

</style>
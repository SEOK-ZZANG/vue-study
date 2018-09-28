<template>
    <div class="container">
        <div class="text-left m-2">
            <button type="button" class="btn btn-primary" @click="add">추가</button>
        </div>

        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">이름</th>
                    <th scope="col">주소</th>
                    <th scope="col">전화번호</th>
                    <th scope="col">사진</th>
                    <th class="text-center" scope="col">편집/삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-left" v-for="(item, index) in contacts" :key="index">
                    <th class="align-middle" scope="row">{{ item.no }}</th>
                    <td class="align-middle">{{ item.name }}</td>
                    <td class="align-middle">{{ item.address }}</td>
                    <td class="align-middle">{{ item.tel }}</td>
                    <td class="align-middle"><img class="img-thumbnail" :src="item.photo" alt="photo" style="max-width: 100px" @click="image(index)"/></td>
                    <td class="text-center align-middle">
                        <button type="button" class="btn btn-info mr-1" @click="modify(index)">편집</button>
                        <button type="button" class="btn btn-info" @click="remove(index)">삭제</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagin-nation
            :pageNo="pageNo"
            :pageSize="pageSize"
            :totalCount="totalCount"
            @movePage="movePage"></pagin-nation>
        <contacts-edit-modal 
            v-if="showModal && (modalType == 'add' || modalType == 'modify')"
            :item="contactsItem" 
            :isNew="showAddModal"
            @close="closeModal"
            @save="saveContacts"></contacts-edit-modal>
        <contacts-image-modal v-if="showModal && modalType == 'image'"
            :item="imageItem"
            @close="closeModal"
            @save="savePhoto"></contacts-image-modal>
    </div>
</template>

<script>
    import ContactsEditModal from '../components/ContactsEditModal'
    import ContactsImageModal from '../components/ContactsImageModal'
    import PaginNation from '../components/common/PagiNation'
    import axios from 'axios'

    export default {
        data() {
            return {
                contacts: [],
                pageNo: 1,
                pageSize: 5,
                totalCount: 0,
                showModal: false,
                modalType: '',
                contactsItem: undefined
            }
        },

        created() {
            this.loadContats().then(console.log(this.totalCount))
        },

        computed: {
            showAddModal() {
                return this.modalType == 'add'
            },

            imageItem() {
                return {
                    'no': this.contactsItem.no,
                    'photo': this.contactsItem.photo,
                }
            }
        },

        components: {
            ContactsEditModal,
            ContactsImageModal,
            PaginNation
        },

        methods: {
            add() {
                this.showModal = true
                this.modalType = 'add'
            },

            modify(index) {
                this.showModal = true
                this.modalType = 'modify'
                this.contactsItem = this.contacts[index]
            },

            remove(index) {
                this.removeContact(this.contacts[index].no)
            },

            image(index){
                this.showModal = true
                this.modalType = 'image'
                this.contactsItem = this.contacts[index]
            },
            
            closeModal() {
                this.showModal = false
                this.modalType = ''
                this.contactsItem = undefined 
            },

            saveContacts() {
                this.loadContats()
                this.closeModal()
            },

            savePhoto() {
                this.loadContats()
                this.closeModal()
            },

            movePage(no) {
                this.loadContats(no)
            },

            loadContats(pageNo, pageSize) {
                pageNo = pageNo ? pageNo : this.pageNo
                pageSize = pageSize ? pageSize : this.pageSize

                return axios.get(`http://sample.bmaster.kro.kr/contacts/?pageno=${pageNo}&pagesize=${pageSize}`)
                .then((response) => {
                    let resultData = response.data
                    this.contacts = resultData.contacts
                    this.pageNo = resultData.pageno
                    this.pagesize = resultData.pagesize
                    this.totalCount = resultData.totalcount
                })
                .catch((ex) => {
                    console.log('Load Contacts failed', ex);
                })
            },

            removeContact(no) {
                axios.delete(`http://sample.bmaster.kro.kr/contacts/${no}/`)
                .then(() => {
                    this.loadContats()
                })
                .catch((ex) => {
                    console.log('Remove Contacts failed', ex);
                });
            }
        }
    }
</script>

<style scoped>

</style>
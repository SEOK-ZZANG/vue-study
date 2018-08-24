// components
const body={template: '<div>This is Body</div>'}
const header={template: '<div>This is Header</div>'}
const footer={template: '<div>This is Footer</div>'}

const loginBody = {template: '<div>This is Login Body</div>'}
const loginHeader = {template: '<div>This is Login Header</div>'}
const loginFooter = {template: '<div>This is Login Footer</div>'}

// routes
const routes = [
    {
        path: '/',
        components: {
            header,
            footer,
            default: body
        }
    },
    {
        path: '/login',
        components: {
            header: loginHeader,
            footer: loginFooter,
            default: loginBody
        }
    }
]
const router = new VueRouter({
    routes
})

new Vue({
    router
}).$mount('#app')
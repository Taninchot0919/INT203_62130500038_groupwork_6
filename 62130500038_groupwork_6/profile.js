const app = {
    data() {
        return {
            name: 'Taninchot Phuwaloetthiwat',
            career:'Full stack developer',
            article:'593',
            follower:'1.2M',
            following:'746',
            pictureUrl:'../images/IMG_1615.jpg',
            backgroundUrl:'../images/background.png',
        }
    },
}
var mountedApp = Vue.createApp(app).mount('#app')


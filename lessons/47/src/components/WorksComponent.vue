<template>
    <section id="works" class="works section no-padding">
        <div class="container-fluid">
            <div class="row no-gutter">
                <div v-for="(item, index) in worksComponentData" :key="index" class="col-lg-3 col-md-6 col-sm-6 work">
                    <a :href="require('@/assets/images/'+item.img)" class="work-box" @click.prevent="showImage(item.img)">
                        <img :src="require(`@/assets/images/`+item.img)" :alt="item.title">
                        <div class="overlay">
                            <div class="overlay-caption">
                                <h5>{{ item.title }}</h5>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <modal-window v-if="showModal" @close="showModal = false">
            <template #header></template>
            <template #body>
                <img :src="require(`@/assets/images/` + previewImage)">
            </template>
        </modal-window>
    </section>
</template>

<script>
import axios from 'axios'
import ModalWindow from '@/components/ModalWindow.vue'
export default {
    name: 'WorksComponent',
    components: {
        ModalWindow
    },
    data() {
        return {
            worksComponentData: [],
            showModal: false,
            previewImage: ''
        }
    },
    created() {
        axios
            .get('../data/works.json')
            .then(resp => {
                this.worksComponentData = resp.data
            })
    },
    methods: {
        showImage(src) {
            this.previewImage = src
                this.showModal = true
        }
    }
}
</script>

<style scoped>
.work {
    -moz-box-shadow: 0 0 0 1px #fff;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
    min-height: 350px;
    overflow: hidden;
    position: relative;
}

.work .overlay {
    background: rgba(232, 69, 69, 0.9);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    -moz-transition: opacity, 0.3s;
    -o-transition: opacity, 0.3s;
    -webkit-transition: opacity, 0.3s;
    transition: opacity, 0.3s;
}

.work .overlay-caption {
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.work h5,
.work p,
.work img {
    -moz-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    -webkit-transition: all, 0.5s;
    transition: all, 0.5s;
}

.work h5,
.work p {
    color: #fff;
    margin: 0;
    opacity: 0;
}

.work h5 {
    margin-bottom: 5px;
    -moz-transform: translate3d(0, -200%, 0);
    -ms-transform: translate3d(0, -200%, 0);
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
}

.work p {
    -moz-transform: translate3d(0, 200%, 0);
    -ms-transform: translate3d(0, 200%, 0);
    -webkit-transform: translate3d(0, 200%, 0);
    transform: translate3d(0, 200%, 0);
}

.work-box:hover img {
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

.work-box:hover .overlay {
    opacity: 1;
}

.work-box:hover .overlay h5,
.work-box:hover .overlay p {
    opacity: 1;
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
</style>


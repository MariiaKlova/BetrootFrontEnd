<!--= Компонент який приймає в себе назву, зображення і може виводити їх як окремо так і у вигляді background-->

<template>
    <div class="promo" :style="`background-image: url(${require('@/assets/images/' + pic)})`">
        <!-- <img :src="require('@/assets/images/' + pic)" :alt="title" /> -->
        <br>
        <h1>{{ title }}</h1>
        <h3>This is Promo-block</h3>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        pic: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.promo {
    margin: 20px auto;
}

h1, h3 {
    color: white;
    text-align: center;
    padding-bottom: 40px;
}
</style>
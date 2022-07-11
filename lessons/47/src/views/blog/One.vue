<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>

export default {
    name: "BlogOne",
    data(){
        return {
            title: 'One article',
        }
    },
    created(){
        //TODO get one article
    }
}
</script>
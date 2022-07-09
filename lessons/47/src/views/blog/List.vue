<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>

export default {
    name: "BlogOne",
    // components: { BlogList }
    data(){
        return {
            title: 'One',
        }
    },
    created(){
        //TODO get one article
    }
}
</script>
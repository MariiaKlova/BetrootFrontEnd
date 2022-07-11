<template>
  <div class="home">
    <FeaturesList/>
    <WorksComponent/>
    <PromoBlock  title="Hello Vue" pic="banner.jpg"/>
  </div>
</template>

<script>
import FeaturesList from '../components/FeaturesList.vue';
import WorksComponent from '../components/WorksComponent.vue';
import PromoBlock from '../components/PromoBlock.vue';

export default {
    name: "HomeView",
    components: { FeaturesList, WorksComponent, PromoBlock }
}
</script>

<template>
  <div class="home">
    <PromoBlock  title="Hello Vue" pic="work-1.jpg"/>
    <FeaturesList/>
    <WorksComponent/>
  </div>
</template>

<script>
import FeaturesList from '@/components/FeaturesList.vue';
import WorksComponent from '@/components/WorksComponent.vue';
import PromoBlock from '@/components/PromoBlock.vue';

export default {
    name: "HomeView",
    components: { FeaturesList, WorksComponent, PromoBlock }
}
</script>

<template>
  <div class="home">
    <FeaturesList/>
    <WorksComponent/>
  </div>
</template>

<script>
import FeaturesList from '@/components/FeaturesList.vue';
import WorksComponent from '@/components/WorksComponent.vue';

export default {
    name: "HomeView",
    components: { FeaturesList, WorksComponent }
}
</script>

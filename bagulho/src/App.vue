<script>
import HeaderComp from "./components/HeaderComp.vue";
import Section1Comp from "./components/section1Comp.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  components: {
    HeaderComp,
    Section1Comp,
    FooterComp,
  },
};
</script>

<template>
  <div class="container">
    <HeaderComp />
    <Section1Comp />
    <FooterComp />
  </div>
</template>

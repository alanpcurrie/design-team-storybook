<template functional>
  <img class="img--hero" :src="props.imageUrl" :alt="props.altText" />
</template>

<script>
import HeroDefault from "../../images/e-signatures3.jpg";
export default {
  name: "hero",
  props: {
    imageUrl: {
      type: String,
      default() {
        return HeroDefault;
      }
    },
    altText: {
      type: String,
      default: ""
    }
  }
};
</script>
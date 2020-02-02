<template functional>
  <img class="img--hero" :src="props.imageUrl" :alt="props.altText" />
</template>

<script>
import imagehero from "../../images/e-signatures2.jpg";
export default {
  name: "Imagehero",
  props: {
    imageUrl: {
      type: String,
      default() {
        return imageHero;
      }
    },
    altText: {
      type: String,
      default: ""
    }
  }
};
</script>
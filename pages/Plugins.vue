<template>
  <section>
    <header>
      <h1>Customising Storybook</h1>
    </header>
    <segment-list-block-media :items="items" />
    <segment-list-block-media :items="itemsSmall" size="small" />
  </section>
</template>

<script>
import Hero from '../images/e-signatures3.jpg'
import StoryBookLogo from '../images/story-book-logo.png'
import SopraSteriaLogo from '../images/Sopra_Steria_logo.png'
import SegmentListBlockMedia from '../segments/SegmentListBlockMedia'
export default {
  name: 'PluginsPage',
  components: {
    SegmentListBlockMedia
  },
  data() {
    return {
      items: [
        {
          title: 'Addons - plugins',
          text: 'A11y, knob, links, notes, storysource – deprectaed syntax viewport, design tokens',
          imageUrl: SopraSteriaLogo,
        },
      ]
    }
  }
}
</script>

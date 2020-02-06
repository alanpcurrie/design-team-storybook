<template>
  <section>
    <header>
      <h1>Storybook for Design Systems</h1>
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
  name: 'ResourcesPage',
  components: {
    SegmentListBlockMedia
  },
  data() {
    return {
      items: [
        {
          title: 'Le StoryBookLogo',
          text:
            "Un StoryBookLogo est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le StoryBookLogo passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: SopraSteriaLogo,
          size: 'small'
        },
        {
          title: 'Le StoryBookLogo',
          text:
            "Un StoryBookLogo est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le StoryBookLogo passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: SopraSteriaLogo
        },
        {
          title: 'Le StoryBookLogo',
          text:
            "Un StoryBookLogo est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le StoryBookLogo passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: SopraSteriaLogo
        },
        {
          title: 'Le StoryBookLogo',
          text:
            "Un StoryBookLogo est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le StoryBookLogo passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: SopraSteriaLogo
        }
      ],
      itemsSmall: [
        {
          title: 'Attrapez-les tous !',
          text:
            'Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.',
          imageUrl: SopraSteriaLogo
        },
        {
          title: 'Attrapez-les tous !',
          text:
            'Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.',
          imageUrl: SopraSteriaLogo
        },
        {
          title: 'Attrapez-les tous !',
          text:
            'Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.',
          imageUrl: SopraSteriaLogo
        },
        {
          title: 'Attrapez-les tous !',
          text:
            'Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.',
          imageUrl: SopraSteriaLogo
        }
      ]
    }
  }
}
</script>

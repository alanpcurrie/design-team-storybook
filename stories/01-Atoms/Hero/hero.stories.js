import { storiesOf } from "@storybook/vue";
import { files, text } from "@storybook/addon-knobs";

/* Components */
import Hero from "../../../components/hero/Hero.vue";

/* Spec */
import SpecMedias from "./spec.medias.md";

storiesOf("Atoms/Hero", module).add(
  "Hero",
  () => ({
    components: {
      Hero
    },
    props: {
      file: {
        default: files("Image", [".jpg", ".png"], [])
      },
      alt: {
        default: text("Alt", "")
      }
    },
    template: `
        <Hero :imageUrl="file[0] ? file[0] : undefined" :altText="alt"/>
      `
  }),
  {
    notes: SpecMedias
  }
);

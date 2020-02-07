import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import Philosophy from "../../pages/Philosophy.vue";

/* Spec */

storiesOf("Pages", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Philosophy",
    () => ({
      components: {
        Philosophy
      },
      template: `
        <philosophy/>
      `
    }),
    {
      notes: null
    }
  );

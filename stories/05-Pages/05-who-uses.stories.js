import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import WhoUses from "../../pages/WhoUses.vue";

/* Spec */

storiesOf("Pages", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Who Uses",
    () => ({
      components: {
        WhoUses
      },
      template: `
        <who-uses/>
      `
    }),
    {
      notes: null
    }
  );

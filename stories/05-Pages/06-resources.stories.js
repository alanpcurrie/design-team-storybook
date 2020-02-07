import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import Resources from "../../../pages/Resources.vue";

/* Spec */

storiesOf("Pages", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Resources",
    () => ({
      components: {
        Resources
      },
      template: `
        <resources/>
      `
    }),
    {
      notes: null
    }
  );

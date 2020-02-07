import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import Plugins from "../../../pages/Plugins.vue";

/* Spec */

storiesOf("Pages", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Plugins",
    () => ({
      components: {
        Plugins
      },
      template: `
        <plugins/>
      `
    }),
    {
      notes: null
    }
  );

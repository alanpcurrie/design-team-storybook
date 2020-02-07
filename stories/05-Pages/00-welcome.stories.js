import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import Welcome from "../../pages/Welcome.vue";

/* Spec */

storiesOf("Pages", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    'Welcome',
    () => ({
      components: {
        Welcome
      },
      template: `
        <welcome/>
      `
    }),
    {
      notes: null
    }
  );

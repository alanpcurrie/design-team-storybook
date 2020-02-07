import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import DesignSystems from "../../pages/DesignSystems.vue";

/* Spec */

storiesOf("Pages", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Design Systems",
    () => ({
      components: {
        DesignSystems
      },
      template: `
        <design-systems/>
      `
    }),
    {
      notes: null
    }
  );

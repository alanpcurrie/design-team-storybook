import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

/* Spec */

storiesOf("Atoms/links", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Links",
    () => ({
      props: {
        link1: {
          default: text('Examples', 'https://storybook.js.org/docs/examples/')
        },
        link2: {
          default: text("Use cases", "https://storybook.js.org/use-cases/")
        },
        link3: {
          default: text("Gov Uk Storybook", "https://govuk-react.github.io/govuk-react/?path=/story/welcome--to-govuk-react")
        },
        link4: {
          default: text("IBM Vue Carbon", "http://vue.carbondesignsystem.com/")
        },
        link5: {
          default: text("Testing", "https://storybook.js.org/docs/testing/automated-visual-testing/")
        },
        link6: {
          default: text("Storybook Development guide", "https://www.learnstorybook.com/design-systems-for-developers/")
        },
        link7: {
          default: text("Stroybook for Design", "https://medium.com/storybookjs/storybook-for-design-3ff761c579bf")
        },
        link8: {
          default: text("Writing Stories", "https://storybook.js.org/docs/basics/writing-stories/")
        },
      },
      template: `
    <div>
      <a>{{link1}}</a>
      <a>{{link2}}</a>
      <a>{{link3}}</a>
      <a>{{link4}}</a>
      <a>{{link5}}</a>
      <a>{{link6}}</a>
      <a>{{link7}}</a>
      <a>{{link8}}</a>
    </div>
    `
    }),
    {
      notes: null
    }
  );

import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";

/* Components */
import ColorItem from "../../../components/color/index.vue";

/* Spec */
import SpecColors from "./spec.colors.md";

storiesOf("Atoms/Colors", module)
  .add(
    "Global Colors",
    () => ({
      components: {
        ColorItem
      },
      data() {
        return {
          colors: [
            { colorName: "$mc--med", colorHex: "#76FF03" },
            { colorName: "$sc--med", colorHex: "#0000ff" }]
        };
      },
      template: `
      <div>
        <p>Global colors</p>
        <ul class="sg-colors">
          <li v-for="color in colors">
            <color-item :colorHex="color.colorHex" :colorName="color.colorName"/>
          </li>
        </ul>
      </div>
    `
    }),
    {
      notes: SpecColors
    }
  )
  .add(
    "Accent Colors",
    () => ({
      components: {
        ColorItem
      },
      data() {
        return {
          colors: [
            { colorName: "$ac--1", colorHex: "#F18AAE" },
            { colorName: "$ac--2", colorHex: "#A020F0" }
          ]
        };
      },
      template: `
      <div>
        <p>Accent colors</p>
        <ul class="sg-colors">
          <li v-for="color in colors">
            <color-item :colorHex="color.colorHex" :colorName="color.colorName"/>
          </li>
        </ul>
      </div>
    `
    }),
    {
      notes: SpecColors
    }
  )
  .add(
    "Neutral Colors",
    () => ({
      components: {
        ColorItem
      },
      data() {
        return {
          colors: [
            { colorName: "$nc--00", colorHex: "#FDFDFD" },
            { colorName: "$nc--100", colorHex: "#24292E" }
          ]
        };
      },
      template: `
      <div>
        <p>Neutral colors</p>
        <ul class="sg-colors">
          <li v-for="color in colors">
            <color-item :colorHex="color.colorHex" :colorName="color.colorName"/>
          </li>
        </ul>
      </div>
    `
    }),
    {
      notes: SpecColors
    }
  )
  .add(
    "Utility Colors",
    () => ({
      components: {
        ColorItem
      },
      data() {
        return {
          colors: [
            { colorName: "$uc--positive", colorHex: "#008000" },
            { colorName: "$uc--caution", colorHex: "#ffa501" },
            { colorName: "$uc--warning", colorHex: "#ff0000" }
          ]
        };
      },
      template: `
      <div>
        <p>Utility colors</p>
        <ul class="sg-colors">
          <li v-for="color in colors">
            <color-item :colorHex="color.colorHex" :colorName="color.colorName"/>
          </li>
        </ul>
      </div>
    `
    }),
    {
      notes: SpecColors
    }
  );

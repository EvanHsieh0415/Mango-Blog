import { defineClientConfig } from "vuepress/client";
import { Component, DefineComponent } from "vue/dist/vue.js";

import BadgeComponent from "./components/shields/index.js";
import testLayout from "./layouts/testLayout.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    const addComponentFn = ([name, component]) => app.component(name, component);
    const addComponent = (components: { [name: string]: Component | DefineComponent }) =>
      Object.entries(components).forEach(addComponentFn);

    // Add components

    addComponent(BadgeComponent);
  },
  layouts: {
    testLayout,
  },
});

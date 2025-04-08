import { defineClientConfig } from "vuepress/client";

import CustomComponents from "./components/index.js";
import layouts from "./layouts/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    const addComponent = ([name, component]) => app.component(name, component);

    Object.entries(CustomComponents).forEach(addComponent);
  },
  layouts,
});

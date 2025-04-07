import BadgeComponent from "./shields/index.js";
import Attachment from "./attachment/Attachment.vue";
import ModInfo from "./layout/AddonPage/ModInfo.vue";
import ArticleSource from "./layout/AddonPage/ArticleSource.vue";

const alias = {
  Attach: Attachment,
};

export default {
  ...BadgeComponent,
  Attachment,
  ModInfo,
  ArticleSource,

  ...alias,
};

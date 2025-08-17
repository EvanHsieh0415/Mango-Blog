<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td v-for="badge in available" :key="badge.path">
            <component
              :is="badgeComponents[badge.key]"
              :path="badge.path"
              :name="badge.name"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BadgeCurseForge from "./BadgeCurseForge.vue";
import BadgeModrinth from "./BadgeModrinth.vue";
import BadgeWiki from "./BadgeWiki.vue";
import BadgeGitHub from "./BadgeGitHub.vue";
import BadgeMcMod from "./BadgeMcMod.vue";

const props = defineProps<{
  CurseForge?: string;
  Modrinth?: string;
  Wiki?: string;
  GitHub?: string;
  McMod?: string;
  name?: string;
}>();

const badgeComponents = {
  CurseForge: BadgeCurseForge,
  Modrinth: BadgeModrinth,
  Wiki: BadgeWiki,
  GitHub: BadgeGitHub,
  McMod: BadgeMcMod,
};

const keys = ["CurseForge", "Modrinth", "Wiki", "GitHub", "McMod"] as const;

const available = computed(() =>
  keys
    .filter((key) => props[key])
    .map((key) => ({
      key,
      path: props[key]!,
      name: props.name,
    }))
);
</script>

<style scoped lang="scss">
div {
  align-items: center;
}
</style>

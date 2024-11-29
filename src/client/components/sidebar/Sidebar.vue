<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'
import Announcement from './Announcement.vue'
import TagCloud from './TagCloud.vue'
import CategoryList from './CategoryList.vue'
</script>

<template>
  <aside class="sticky top-24">
    <div class="space-y-6 transition-all duration-300">
      <ProfileCard />
      <Announcement />
      <CategoryList />
      <TagCloud />
    </div>
  </aside>
</template>
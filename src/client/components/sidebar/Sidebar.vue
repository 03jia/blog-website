<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'
import Announcement from './Announcement.vue'
import TagCloud from './TagCloud.vue'
import CategoryList from './CategoryList.vue'
</script>

<template>
  <div class="space-y-6">
    <ProfileCard />
    <Announcement />
    <CategoryList />
    <TagCloud />
  </div>
</template>
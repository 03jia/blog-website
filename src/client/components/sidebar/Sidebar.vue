<script setup lang="ts">
import { theme } from '@/shared/config/theme'
import ProfileCard from '@/client/components/sidebar/ProfileCard.vue'
import CategoryList from '@/client/components/sidebar/CategoryList.vue'
import TagCloud from '@/client/components/sidebar/TagCloud.vue'
import Announcement from '@/client/components/sidebar/Announcement.vue'
</script>

<template>
  <div class="space-y-6">
    <ProfileCard />
    <Announcement />
    <CategoryList />
    <TagCloud />
  </div>
</template>
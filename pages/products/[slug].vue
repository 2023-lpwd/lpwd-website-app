<template>
  <main class="p-slug">
    <nuxt-link to="/">retour à la liste</nuxt-link>
    <div class="p-slug__product">
      {{ product.name }}
    </div>
  </main>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: product, pending, error, refresh } = useAsyncData(
    'product',
    () => $fetch(`/api/products/${route.params.slug}`)
)
</script>

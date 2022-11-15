<template>
  <main class="p-index">
    <ul class="p-index__products">
      <li v-for="(product, index) in products" class="p-index__product">
        <nuxt-link :to="`products/${product.slug}`">{{ product.name }} : ${{ product.price }}</nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
const { data: products , pending, error, refresh } = await useAsyncData(
    'products',
    () => $fetch('/api/products')
)
</script>

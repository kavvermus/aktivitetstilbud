<script setup>
definePageMeta({
  layout: "landing",
});

// Antag at disse er stierne til dine billeder i assets/img mappen
const teamImages = [
  '~/assets/img/heste.jpeg',
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>We are a small passionate team.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with Nuxt.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        We're a multi-cultural team from around the world! We come from diverse
        backgrounds, bringing different personalities, experiences and skills to
        the job. This is what makes our team so special.
      </p>
    </div>

     <!-- Billedgalleri -->
     <div class="mt-12">
      <h3 class="text-2xl font-semibold text-gray-800 mb-6">Meet Our Team</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(image, index) in teamImages" :key="index" class="overflow-hidden rounded-lg shadow-lg">
          <img :src="image" :alt="`Team member ${index + 1}`" class="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105">
        </div>
      </div>
    </div>
  </LandingContainer>
</template>

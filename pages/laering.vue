<script setup>
definePageMeta({
  layout: 'landing',
})

// Antag at disse er stierne til dine billeder i assets/img mappen
const teamImages = [
  '/img/heste.jpeg',
  '/img/fisk.jpeg',
  '/img/baad.jpeg',
]

// Reactive state for modal
const isModalOpen = ref(false)
const selectedImageIndex = ref(0)

// Function to open modal
function openModal(index) {
  selectedImageIndex.value = index
  isModalOpen.value = true
}

// Function to close modal
function closeModal() {
  isModalOpen.value = false
}

// Function to show next image
function nextImage() {
  if (selectedImageIndex.value < teamImages.length - 1) {
    selectedImageIndex.value++
  }
  else {
    selectedImageIndex.value = 0 // Loop back to the first image
  }
}

// Function to show previous image
function prevImage() {
  if (selectedImageIndex.value > 0) {
    selectedImageIndex.value--
  }
  else {
    selectedImageIndex.value = teamImages.length - 1 // Loop back to the last image
  }
}

// Function to handle keyboard events
function handleKeydown(event) {
  if (isModalOpen.value) {
    if (event.key === 'ArrowRight') {
      nextImage()
    }
    else if (event.key === 'ArrowLeft') {
      prevImage()
    }
    else if (event.key === 'Escape') {
      closeModal()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        Læring og Udvikling
      </template>
      <template #desc>
        Udvid din horisont
      </template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Udvid Din Horisont med Aktivitetstilbud
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Hos <strong>Aktivitetstilbud</strong> tror vi på, at læring og personlig udvikling er afgørende for livskvaliteten. Vi tilbyder en række aktiviteter, der fremmer viden og færdigheder i et inkluderende miljø, hvor alle kan deltage og bidrage.
      </p>

      <h2 class="font-bold text-2xl text-gray-800 mt-6">
        Vores Aktiviteter for Læring og Udvikling
      </h2>
      <ul class="list-disc list-inside text-lg leading-relaxed text-slate-500 mt-4">
        <li class="mb-2">
          <strong>Handicapvenlige Foredrag:</strong> Deltag i inspirerende foredrag, der dækker en bred vifte af emner, fra videnskab og teknologi til kunst og kultur.
        </li>
        <li class="mb-2">
          <strong>Workshops:</strong> Engager dig i praktiske workshops, hvor du kan lære nye færdigheder og udvide din viden inden for forskellige områder.
        </li>
        <li class="mb-2">
          <strong>Kurser:</strong> Tilmeld dig vores kurser, der tilbyder dybdegående læring og udvikling inden for specifikke emner, som interesserer dig.
        </li>
        <li class="mb-2">
          <strong>Gruppediskussioner:</strong> Deltag i gruppediskussioner, hvor du kan dele dine tanker og lære af andres erfaringer i en åben og støttende atmosfære.
        </li>
      </ul>

      <h2 class="font-bold text-2xl text-gray-800 mt-6">
        Deltag og Udvikl Dig Selv
      </h2>
      <p class="text-lg leading-relaxed text-slate-500 mt-4">
        Vores inkluderende miljø sikrer, at alle kan deltage i aktiviteterne og få glæde af læring og personlig udvikling. Uanset om du er nybegynder eller erfaren, vil vores erfarne instruktører og faciliteter støtte dig i din rejse mod ny viden og færdigheder. Kontakt os for at finde ud af, hvordan du kan blive en del af vores læringsfællesskab og begynde at udvide din horisont i dag.
      </p>

      <p class="text-lg leading-relaxed text-slate-500 mt-4">
        Hos <strong>Aktivitetstilbud</strong> handler det om at fremme læring og udvikling gennem meningsfulde aktiviteter. Vi ser frem til at hjælpe dig med at nå dine læringsmål og skabe en bedre livskvalitet!
      </p>
    </div>

    <!-- Billedgalleri -->
    <div class="mt-12">
      <h3 class="text-2xl font-semibold text-gray-800 mb-6">
        Mød os
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(image, index) in teamImages"
          :key="index"
          class="overflow-hidden rounded-lg shadow-lg"
        >
          <img
            :src="image"
            :alt="`Team member ${index + 1}`"
            class="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            @click="openModal(index)"
          >
        </div>
      </div>
    </div>

    <!-- Modal Komponent -->
    <transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div class="relative max-w-4xl max-h-4xl w-4/5 h-4/5 bg-white rounded-lg p-4 flex flex-col items-center justify-center">
          <button class="absolute top-2 right-2 text-black text-3xl font-bold" @click="closeModal">
            &times;
          </button>
          <img :src="teamImages[selectedImageIndex]" class="w-full h-full object-contain">
          <div class="absolute bottom-2 left-2 right-2 flex justify-between items-center">
            <button class="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded" @click="prevImage">
              &lt;
            </button>
            <button class="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded" @click="nextImage">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </transition>
  </LandingContainer>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

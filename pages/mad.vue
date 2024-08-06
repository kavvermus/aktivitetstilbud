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
        Madlavning og Hygge
      </template>
      <template #desc>
        Del gode stunder med andre.
      </template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Nyd Madlavning og Hygge med Aktivitetstilbud
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Hos <strong>Aktivitetstilbud</strong> mener vi, at madlavning og fællesskab går hånd i hånd. Vi tilbyder tilgængelige køkkenfaciliteter, hvor du kan deltage i fælles madlavning og hygge i en varm og indbydende atmosfære.
      </p>

      <h2 class="font-bold text-2xl text-gray-800 mt-6">
        Vores Aktiviteter for Madlavning og Hygge
      </h2>
      <ul class="list-disc list-inside text-lg leading-relaxed text-slate-500 mt-4">
        <li class="mb-2">
          <strong>Fælles Madlavning:</strong> Deltag i madlavningssessioner, hvor vi laver enkle og lækre måltider sammen i et socialt og støttende miljø.
        </li>
        <li class="mb-2">
          <strong>Sociale Middage:</strong> Nyd hyggelige middage sammen med andre, hvor vi deler måltider og skaber gode minder omkring middagsbordet.
        </li>
        <li class="mb-2">
          <strong>Temaaftener:</strong> Deltag i temaaftener med madlavning og spisning, hvor vi fejrer forskellige kulturer og traditioner.
        </li>
        <li class="mb-2">
          <strong>Hyggelige Sammenkomster:</strong> Vær med til afslappede sammenkomster, hvor vi nyder god mad og godt selskab i en afslappet og hyggelig atmosfære.
        </li>
      </ul>

      <h2 class="font-bold text-2xl text-gray-800 mt-6">
        Deltag og Skab Minder
      </h2>
      <p class="text-lg leading-relaxed text-slate-500 mt-4">
        Vores inkluderende miljø sikrer, at alle kan deltage i aktiviteterne og få glæde af madlavning og fællesskab. Uanset om du er nybegynder eller erfaren, vil vores erfarne instruktører støtte dig i at nyde madlavning og hyggelige stunder. Kontakt os for at finde ud af, hvordan du kan blive en del af vores fællesskab og begynde at skabe minder gennem madlavning og hygge.
      </p>

      <p class="text-lg leading-relaxed text-slate-500 mt-4">
        Hos <strong>Aktivitetstilbud</strong> handler det om at bringe mennesker sammen gennem mad og fællesskab. Vi ser frem til at dele mange hyggelige og velsmagende stunder med dig!
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

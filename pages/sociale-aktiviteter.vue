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
        Sociale Aktiviteter
      </template>
      <template #desc>
        Styrk venskaber i trygge rammer
      </template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Oplev Sociale Aktiviteter med Aktivitetstilbud
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Hos <strong>Aktivitetstilbud</strong> mener vi, at sociale aktiviteter er afgørende for at skabe stærke og varige venskaber. Vi tilbyder en række inkluderende fællesaktiviteter og festlige sammenkomster, hvor der er plads til alle.
      </p>

      <h2 class="font-bold text-2xl text-gray-800 mt-6">
        Vores Aktiviteter for Sociale Sammenkomster
      </h2>
      <ul class="list-disc list-inside text-lg leading-relaxed text-slate-500 mt-4">
        <li class="mb-2">
          <strong>Inkluderende Fællesaktiviteter:</strong> Deltag i en række forskellige fællesaktiviteter, der er designet til at fremme samarbejde og styrke sociale bånd.
        </li>
        <li class="mb-2">
          <strong>Festlige Sammenkomster:</strong> Nyd vores festlige sammenkomster, hvor vi fejrer forskellige lejligheder med musik, dans og glæde i en inkluderende atmosfære.
        </li>
        <li class="mb-2">
          <strong>Spilaftener:</strong> Deltag i hyggelige spilaftener, hvor vi spiller brætspil, kortspil og andre sjove aktiviteter sammen.
        </li>
        <li class="mb-2">
          <strong>Kreative Workshops:</strong> Engager dig i kreative workshops, hvor du kan udtrykke dig gennem kunst og håndværk samtidig med at du knytter bånd med andre.
        </li>
      </ul>

      <h2 class="font-bold text-2xl text-gray-800 mt-6">
        Deltag og Styrk Dine Venskaber
      </h2>
      <p class="text-lg leading-relaxed text-slate-500 mt-4">
        Vores inkluderende miljø sikrer, at alle kan deltage i aktiviteterne og få glæde af sociale sammenkomster. Uanset om du er nybegynder eller erfaren, vil vores erfarne instruktører støtte dig i at nyde fællesskabet og skabe stærke venskaber. Kontakt os for at finde ud af, hvordan du kan blive en del af vores sociale fællesskab og begynde at styrke dine venskaber i dag.
      </p>

      <p class="text-lg leading-relaxed text-slate-500 mt-4">
        Hos <strong>Aktivitetstilbud</strong> handler det om at bringe mennesker sammen gennem sociale aktiviteter og fællesskab. Vi ser frem til at dele mange hyggelige og sjove stunder med dig!
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
    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Kontakt AktivitetsTilbud
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Har du noget at sige? Vi er her for at hjælpe. Udfyld formularen, send en mail eller ring til os.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
              <path fill-rule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clip-rule="evenodd" />
            </svg>

            <span>Stationsvej 61, 3650 Ølstykke</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <a
              href="mailto:aktivitetstilbud@gmail.com"
            >aktivitetstilbud@gmail.com</a>
          </div>
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
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

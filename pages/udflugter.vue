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
        Oplev Verdenen
      </template>
      <template #desc>
        Inkluderende Busudflugter for Alle
      </template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Så ruller bussen
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Hos Aktivitetstilbud er vores mission at skabe meningsfulde oplevelser for alle med handicap over 18 år. Vi tilbyder skræddersyede busudflugter, der kombinerer komfort, tilgængelighed og sjov på en måde, der sikrer, at alle kan deltage og nyde øjeblikket.
      </p>
      <h3 class="font-bold text-xl text-gray-800">
        En Komfortabel Rejse med Fokus på God Stemning
      </h3>
      <p class="text-lg leading-relaxed text-slate-500">
        Vores udflugter starter med, at vi henter dig direkte hjemmefra i vores moderne og handicapvenlige busser. Vi prioriterer din komfort og sikrer, at hver tur er både behagelig og afslappende. Vores erfarne chauffører og venlige personale sørger for en sikker rejse og en god stemning hele vejen. Uanset hvor vi skal hen, er det vigtigt for os, at du føler dig velkommen og godt tilpas.
      </p>
      <h3 class="font-bold text-xl text-gray-800">
        Oplev Verden i Fællesskab
      </h3>
      <p class="text-lg leading-relaxed text-slate-500">
        Vores udflugter er ikke bare transport fra A til B. Vi skaber oplevelser, der er fyldt med sjove og inspirerende aktiviteter. Vi arbejder sammen med dig for at planlægge ture, der er tilpasset dine interesser og behov. Selvom vi har mange forslag til spændende destinationer og aktiviteter, værdsætter vi dine ønsker og input. Din tilfredshed er vores højeste prioritet, og vi tilpasser turene, så de bliver en oplevelse, du vil huske.
      </p>
      <h3 class="font-bold text-xl text-gray-800">
        Forslag til Udforskning
      </h3>
      <p class="text-lg leading-relaxed text-slate-500">
        Her er nogle af de udflugter, vi foreslår:
      </p>
      <ul class="list-disc list-inside mb-6 text-lg leading-relaxed text-slate-500">
        <li class="mb-2">
          <strong>Kulturelle Eventyr:</strong> Udforsk museer, kunstgallerier og historiske steder, der giver indsigt i lokal kultur og historie.
        </li>
        <li class="mb-2">
          <strong>Naturoplevelser:</strong> Oplev skønheden i vores naturlandskaber med guidede ture til parker og naturskønne områder.
        </li>
        <li class="mb-2">
          <strong>Underholdning og Begivenheder:</strong> Deltag i lokale events, teaterforestillinger, koncerter og meget mere.
        </li>
        <li class="mb-2">
          <strong>Kreative Workshops:</strong> Engager dig i kunst- og håndværksaktiviteter, der giver mulighed for kreativ udfoldelse.
        </li>
      </ul>
      <p class="text-lg leading-relaxed text-slate-500">
        Vi er her for at gøre din oplevelse så behagelig og mindeværdig som muligt. Kontakt os i dag for at finde ud af, hvordan vi kan planlægge din næste udflugt. Vi ser frem til at samarbejde med dig for at skabe en tur, der er fyldt med glæde, spænding og nye oplevelser.
      </p>

      <p class="text-lg leading-relaxed text-slate-500">
        Hos Aktivitetstilbud handler det ikke kun om at rejse, men om at opleve verden på en måde, der er tilpasset dine behov og interesser. Lad os tage dig med på en rejse, du sent vil glemme!
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

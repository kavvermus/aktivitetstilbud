<script setup lang="ts">
import { AcademicCapIcon, CakeIcon, FaceSmileIcon, TruckIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/vue/24/solid'

const features = [
  {
    title: 'Udflugter med vores turbus',
    description:
      'Oplev verden omkring os. Vores handicapvenlige bus kører til spændende attraktioner og kulturelle begivenheder. God stemning garanteret!',
    icon: TruckIcon,
  },
  {
    title: 'Kreative Udfoldelser',
    description:
      'Slip din indre kunstner løs. Tilgængelige kreative aktiviteter hvor alle kan udtrykke sig gennem kunst og musik i en positiv atmosfære.',
    icon: FaceSmileIcon,
  },
  {
    title: 'Fysisk Aktivitet og Velvære',
    description:
      'Tilpasset motion og afslapning for alle. Vi arrangerer handicapvenlige gåture og velvære-aktiviteter i et støttende miljø.',
    icon: UserGroupIcon,
  },
  {
    title: 'Madlavning og Hygge',
    description:
      'Del gode stunder med andre. Tilgængelige køkkenfaciliteter til fælles madlavning og hyggelige sammenkomster i en varm atmosfære.',
    icon: CakeIcon,
  },
  {
    title: 'Læring og Udvikling',
    description:
      'Udvid din horisont. Handicapvenlige foredrag og workshops i et inkluderende miljø, hvor alle kan deltage og bidrage.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Sociale Aktiviteter',
    description:
      'Styrk venskaber i trygge rammer. Vi arrangerer inkluderende fællesaktiviteter og festlige sammenkomster med plads til alle.',
    icon: UserCircleIcon,
  },
]
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Vores Inkluderende Aktiviteter
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Oplev en verden af muligheder med tilgængelige aktiviteter, god stemning og komfortabel bustransport.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" :key="item.title" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0 text-white flex items-center justify-center">
        <component :is="item.icon" class="w-6 h-6" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">
          {{ item.title }}
        </h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

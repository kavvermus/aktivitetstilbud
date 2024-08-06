<script setup>
const menuitems = [
  {
    title: 'Oplevelser',
    path: '/oplevelser',
    submenu: [
      { title: 'Udflugter med Bus', path: '/udflugter' },
      { title: 'Kreative Udfoldelser', path: '/kreative' },
      { title: 'Fysisk Aktivitet og Velvære', path: '/fysisk' },
      { title: 'Madlavning og Hygge', path: '/mad' },
      { title: 'Læring og Udvikling', path: '/laering' },
      { title: 'Sociale Aktiviteter', path: '/sociale-aktiviteter' },
    ],
  },
  {
    title: 'Priser',
    path: '/pricing',
  },
  {
    title: 'Om os',
    path: '/about',
  },
  {
    title: 'Kontakt',
    path: '/contact',
  },
]

const open = ref(false)

const activeDropdown = ref(null)

function toggleDropdown(index) {
  if (activeDropdown.value === index) {
    activeDropdown.value = null
  }
  else {
    activeDropdown.value = index
  }
}
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-lg"><span class="font-bold text-slate-800">Aktivitets</span><span class="text-slate-500">Tilbud</span>
        </a>
        <div class="block lg:hidden">
          <button class="text-gray-800" @click="open = !open">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="(item, index) in menuitems" :key="index" class="relative">
            <div v-if="item.submenu" class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer" @click="toggleDropdown(index)">
              {{ item.title }}
              <svg class="w-4 h-4 ml-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
            <a v-else :href="item.path" class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
              {{ item.title }}
            </a>
            <ul v-if="item.submenu && activeDropdown === index" class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <li v-for="subItem in item.submenu" :key="subItem.title">
                <a :href="subItem.path" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {{ subItem.title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  </LandingContainer>
</template>

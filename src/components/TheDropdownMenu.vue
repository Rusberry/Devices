<template>
  <div class="flex mt-4 flex-col">
    <!-- Выпадающий список для выбора ОС -->
    <div
      class="relative inline-block text-left mr-4 mb-4"
      v-if="operatingSystems.length"
    >
      <button
        type="button"
        class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        @click="toggleOSDropdown"
      >
        {{ selectedOS ? selectedOS.name : 'Выберите ОС' }}
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div
        class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col"
        v-if="showOSDropdown"
      >
        <div class="py-1">
          <a
            v-for="os in operatingSystems"
            :key="os.id"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            @click.prevent="selectOS(os)"
          >
            {{ os.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Выпадающий список для выбора бренда -->
    <div
      class="relative inline-block text-left mr-4 mb-4"
      v-if="selectedOS && brands.length"
    >
      <button
        type="button"
        class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        @click="toggleBrandDropdown"
      >
        {{ selectedBrand ? selectedBrand.name : 'Выберите Бренд' }}
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div
        class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        v-if="showBrandDropdown"
      >
        <div class="py-1">
          <a
            v-for="brand in brands"
            :key="brand.id"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            @click.prevent="selectBrand(brand)"
          >
            {{ brand.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Выпадающий список для выбора модели -->
    <div
      class="relative inline-block text-left"
      v-if="selectedBrand && models.length"
    >
      <button
        type="button"
        class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        @click="toggleModelDropdown"
      >
        {{ selectedModel ? selectedModel.name : 'Выберите Модель' }}
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div
        class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        v-if="showModelDropdown"
      >
        <div class="py-1">
          <a
            v-for="model in models"
            :key="model.id"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            @click.prevent="selectModel(model)"
          >
            {{ model.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      operatingSystems: [
        { id: 1, name: 'Windows' },
        { id: 2, name: 'Linux' },
        { id: 3, name: 'MacOS' }
      ],
      brands: [],
      models: [],
      selectedOS: null,
      selectedBrand: null,
      selectedModel: null,
      showOSDropdown: false,
      showBrandDropdown: false,
      showModelDropdown: false
    }
  },
  methods: {
    toggleOSDropdown () {
      this.showOSDropdown = !this.showOSDropdown
    },
    selectOS (os) {
      this.selectedOS = os
      this.showOSDropdown = false
      this.fetchBrands()
      this.selectedBrand = null
      this.selectedModel = null
    },
    toggleBrandDropdown () {
      this.showBrandDropdown = !this.showBrandDropdown
    },
    selectBrand (brand) {
      this.selectedBrand = brand
      this.showBrandDropdown = false
      this.fetchModels()
      this.selectedModel = null
    },
    toggleModelDropdown () {
      this.showModelDropdown = !this.showModelDropdown
    },
    selectModel (model) {
      this.selectedModel = model
      this.showModelDropdown = false
    },
    fetchBrands () {
      // Замените этот метод на фактический вызов API для получения брендов
      this.brands = [
        { id: 1, name: 'HP' },
        { id: 2, name: 'Canon' },
        { id: 3, name: 'Xerox' },
        { id: 4, name: 'Samsung' },
        { id: 5, name: 'Kyocera' }
      ]
    },
    fetchModels () {
      // Замените этот метод на фактический вызов API для получения моделей на основе выбранного бренда и ОС
      this.models = [
        { id: 1, name: 'WC3025' },
        { id: 2, name: '25245' },
        { id: 3, name: 'rc9029' }
      ]
    }
  }
}
</script>

<template>
  <div class="">
    <h1 class="text-2xl font-bold mb-4">Принтеры</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Бренд
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Модель
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Подробнее
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="printer in printers" :key="printer.id">
            <td class="py-2 px-4 border-b border-gray-200">
              {{ printer.brand }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ printer.model }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              <!-- <router-link
                :to="{ name: 'DeviceDetails', params: { id: printer.id } }"
              >-->
              <router-link to="/details"> Подробнее </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintersPage',
  data () {
    return {
      printers: [
        { id: 1, brand: 'Canon', model: 'IPF 770' },
        { id: 2, brand: 'Canon', model: 'LBP 623C' },
        { id: 3, brand: 'HP', model: 'color LJ CP3525' },
        { id: 4, brand: 'HP', model: 'color LJ Pro 200' },
        { id: 5, brand: 'HP', model: 'LJ 2420' },
        { id: 6, brand: 'HP', model: 'LJ 300' },
        { id: 7, brand: 'HP', model: 'LJ 4200' },
        { id: 8, brand: 'HP', model: 'LJ 5200' },
        { id: 9, brand: 'HP', model: 'LJ 9040' },
        { id: 10, brand: 'HP', model: 'LJ P2035' },
        { id: 11, brand: 'HP', model: 'LJ P3015' },
        { id: 12, brand: 'HP', model: 'LJ Pro CP1025' },
        { id: 13, brand: 'Kyocera', model: 'P2040' },
        { id: 14, brand: 'Pantum', model: 'M7100DW' },
        { id: 15, brand: 'Xerox', model: '5019' },
        { id: 16, brand: 'Xerox', model: '6128' },
        { id: 17, brand: 'Xerox', model: 'M118' }
      ]
    }
  }
}
</script>
<style scoped></style>

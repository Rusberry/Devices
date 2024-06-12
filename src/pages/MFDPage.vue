<template>
  <div class="">
    <h1 class="text-2xl font-bold mb-4">МФУ</h1>
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
          <tr v-for="printer in mfds" :key="printer.id">
            <td class="py-2 px-4 border-b border-gray-200">
              {{ printer.brand }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ printer.model }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
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
  name: 'MFDPage',
  data () {
    return {
      mfds: [
        { id: 1, brand: 'Canon', model: 'IR 2425' },
        { id: 2, brand: 'Canon', model: 'IR C3720i' },
        { id: 3, brand: 'Canon', model: 'MF 643' },
        { id: 4, brand: 'Canon', model: 'MF 223' },
        { id: 5, brand: 'Canon', model: 'MF 443' },
        { id: 6, brand: 'Canon', model: 'MF4890dw' },
        { id: 7, brand: 'HP', model: '1536' },
        { id: 8, brand: 'HP', model: 'color 5220' },
        { id: 9, brand: 'HP', model: 'LJ 2727' },
        { id: 10, brand: 'HP', model: 'LJ 3052' },
        { id: 11, brand: 'HP', model: 'LJ M225' },
        { id: 12, brand: 'HP', model: 'LJ m400' },
        { id: 13, brand: 'HP', model: 'M1120' },
        { id: 14, brand: 'HP', model: 'M1212' },
        { id: 15, brand: 'Kyocera', model: 'FS-6530' },
        { id: 16, brand: 'Kyocera', model: 'M2235' },
        { id: 17, brand: 'Kyocera', model: 'M2635' },
        { id: 18, brand: 'Kyocera', model: 'M4132' },
        { id: 19, brand: 'Samsung', model: '3870' },
        { id: 20, brand: 'Xerox', model: '3635' },
        { id: 21, brand: 'Xerox', model: '5222' },
        { id: 22, brand: 'Xerox', model: '5225' },
        { id: 23, brand: 'Xerox', model: '5230' },
        { id: 24, brand: 'Xerox', model: '5325' },
        { id: 25, brand: 'Xerox', model: '5735' },
        { id: 26, brand: 'Xerox', model: 'WC 3220' },
        { id: 27, brand: 'Xerox', model: 'WC 423' },
        { id: 28, brand: 'Xerox', model: '3325' }
      ]
    }
  }
}
</script>

<style scoped></style>

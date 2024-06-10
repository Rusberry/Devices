<template>
    <div class="">
      <h1 class="text-2xl font-bold mb-4">Принтеры</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Бренд</th>
              <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Модель</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="printer in printers" :key="printer.id">
              <td class="py-2 px-4 border-b border-gray-200">{{ printer.brand }}</td>
              <td class="py-2 px-4 border-b border-gray-200">{{ printer.model }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PrintersPage',
    data() {
      return {
        printers: [
          { id: 1, brand: 'HP', model: 'LaserJet Pro M404dn' },
          { id: 2, brand: 'Canon', model: 'PIXMA TS9120' },
          { id: 3, brand: 'Epson', model: 'EcoTank ET-2720' },
          { id: 4, brand: 'Brother', model: 'HL-L2350DW' },
          { id: 5, brand: 'Xerox', model: 'Phaser 6510' },
        ],
      };
    },
  };
  

 </script> 
  <style scoped>

  </style>
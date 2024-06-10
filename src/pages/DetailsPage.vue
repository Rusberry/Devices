<template>
  <div class="">
    <h1 class="text-2xl font-bold mb-4">Детали устройства</h1>
    <div class="mb-6">
      <p><strong>Тип устройства:</strong> {{ device.deviceType }}</p>
      <p><strong>Бренд:</strong> {{ device.brand }}</p>
      <p><strong>Модель:</strong> {{ device.model }}</p>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              ОС
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Поддержка Ред ОС
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Разрядность ОС
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Название драйвера
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Ссылка на скачивание
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Описание
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="driver in device.drivers"
            :key="driver.id"
            @click="showDescription(driver)"
            class="cursor-pointer"
          >
            <td class="py-2 px-4 border-b border-gray-200">{{ driver.os }}</td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ driver.redOsSupport }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ driver.osBit }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ driver.driverName }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              <a :href="driver.downloadLink" class="text-blue-500 underline"
                >Скачать</a
              >
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ driver.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <transition name="fade">
      <div
        v-if="selectedDriver"
        class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg p-8">
          <h2 class="text-xl font-bold mb-4">Описание установки</h2>
          <p>{{ selectedDriver.installationDescription }}</p>
          <button
            @click="selectedDriver = null"
            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Закрыть
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      device: {
        deviceType: 'Принтер',
        brand: 'HP',
        model: 'LaserJet Pro M404dn',
        drivers: [
          {
            id: 1,
            os: 'Windows',
            redOsSupport: 'Полная',
            osBit: 'x64',
            driverName: 'HP LaserJet Pro Driver',
            downloadLink: '#',
            description: 'Описание драйвера',
            installationDescription:
              'Инструкция по установке драйвера для HP LaserJet Pro M404dn на Windows'
          },
          {
            id: 2,
            os: 'Linux',
            redOsSupport: 'Частичная',
            osBit: 'x86',
            driverName: 'HP LaserJet Pro Driver',
            downloadLink: '#',
            description: 'Описание драйвера',
            installationDescription:
              'Инструкция по установке драйвера для HP LaserJet Pro M404dn на Linux'
          },
          {
            id: 3,
            os: 'MacOS',
            redOsSupport: 'Не поддерживается',
            osBit: 'x64',
            driverName: 'HP LaserJet Pro Driver',
            downloadLink: '#',
            description: 'Описание драйвера',
            installationDescription:
              'Инструкция по установке драйвера для HP LaserJet Pro M404dn на MacOS'
          }
          // Добавьте больше данных драйверов по необходимости
        ]
      },
      selectedDriver: null
    }
  },
  methods: {
    showDescription (driver) {
      this.selectedDriver = driver
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

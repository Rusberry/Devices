<template>
  <div class="">
    <h1 class="text-2xl font-bold mb-4">Драйверы</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Тип устройства
            </th>
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
          <tr v-for="driver in drivers" :key="driver.id">
            <td class="py-2 px-4 border-b border-gray-200">
              {{ driver.deviceType }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ driver.brand }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ driver.model }}
            </td>
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
            <td
              class="py-2 px-4 border-b border-gray-200 cursor-pointer"
              @click="showDescription(driver)"
            >
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
        <div class="bg-white rounded-lg p-8 w-1/2">
          <h2 class="text-xl font-bold mb-4">Описание установки</h2>
          <pre style="white-space: pre-wrap">{{
            selectedDriver.installationDescription
          }}</pre>
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
  name: 'DriversPage',
  data () {
    return {
      drivers: [
        {
          id: 1,
          deviceType: 'МФУ',
          brand: 'Canon',
          model: 'IR 2425',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon IR Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon IR 2425 на Windows'
        },
        {
          id: 2,
          deviceType: 'МФУ',
          brand: 'Canon',
          model: 'IR C3720i',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon IR C3720i Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon IR C3720i на Windows'
        },
        {
          id: 3,
          deviceType: 'МФУ',
          brand: 'Canon',
          model: 'MF 643',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon MF 643 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon MF 643 на Windows'
        },
        {
          id: 4,
          deviceType: 'МФУ',
          brand: 'Canon',
          model: 'MF 223',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon MF 223 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon MF 223 на Windows'
        },
        {
          id: 5,
          deviceType: 'МФУ',
          brand: 'Canon',
          model: 'MF 443',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon MF 443 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon MF 443 на Windows'
        },
        {
          id: 6,
          deviceType: 'МФУ',
          brand: 'Canon',
          model: 'MF4890dw',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon MF4890dw Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon MF4890dw на Windows'
        },
        {
          id: 7,
          deviceType: 'МФУ',
          brand: 'HP',
          model: '1536',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP 1536 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP 1536 на Windows'
        },
        {
          id: 8,
          deviceType: 'МФУ',
          brand: 'HP',
          model: '1536',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP 1536 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP 1536 на Windows'
        },
        {
          id: 9,
          deviceType: 'МФУ',
          brand: 'HP',
          model: 'color 5220',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP color 5220 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP color 5220 на Windows'
        },
        {
          id: 10,
          deviceType: 'МФУ',
          brand: 'HP',
          model: 'LJ 2727',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ 2727 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ 2727 на Windows'
        },
        {
          id: 11,
          deviceType: 'МФУ',
          brand: 'HP',
          model: 'LJ 3052',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ 3052 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ 3052 на Windows'
        },
        {
          id: 12,
          deviceType: 'МФУ',
          brand: 'HP',
          model: 'LJ M225',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ M225 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ M225 на Windows'
        },
        {
          id: 13,
          deviceType: 'МФУ',
          brand: 'HP',
          model: 'LJ m400',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ m400 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ m400 на Windows'
        },
        {
          id: 14,
          deviceType: 'МФУ',
          brand: 'HP',
          model: 'M1120',
          os: 'Windows',
          redOsSupport: 'Частичная',
          osBit: 'x64',
          driverName: 'HP M1120 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription: `Решаются проблемы следующим образом: /n
1) Войдите в систему как root (можно сделать и в консольном окне MATE/Cinnamon)./n
2) Удалите пакет system-config-printer-udev: /n
dnf remove system-config-printer-udev /n
3) В папке /etc/udev/rules.d создайте файл, например, «60-hp_brainless.rules», где пропишите следующее правило для менеджера устройств udev. Данное правило будет запускать команду загрузки firmware по наступлении события «Включение принтера»:/n
ACTION!="add", GOTO="skip_hp"
SUBSYSTEM!="usb", GOTO="skip_hp"
ATTRS{idVendor}=="03f0", ATTRS{idProduct}=="2b17", ATTRS{dev}=="*", RUN+="hp-firmware  -n --device=hp:/usb/HP_LaserJet_1020?serial=FN1DNNJ"
LABEL="skip_hp"/n
Здесь idVendor и idProduct указаны для HP LaserJet 1020, если у вас другая модель, то эти значения можно узнать в выводе команды lsusb.
Значение параметра --device так же приведено в качестве примера. /n Для вашего принтера, подключенного к ПК, вы сможете получить его из вывода команды lpinfo -v./n
В позиции аргументов утилиты hp-firmware укажите значения для Вашего принтера и укажите обязательно неинтерактивный режим (подробнее об этой команде и её опциях см. здесь)./n
4) Обязательно перезапустите менеджер udev следующими командами:/n
 udevadm control --reload-rules /n
 udevadm trigger/n
`
        },
        {
          id: 15,
          deviceType: 'МФУ',
          brand: 'HP',
          model: 'M1212',
          os: 'Windows',
          redOsSupport: 'Частичная',
          osBit: 'x64',
          driverName: 'HP M1212 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription: `Решаются проблемы следующим образом: /n
1) Войдите в систему как root (можно сделать и в консольном окне MATE/Cinnamon)./n
2) Удалите пакет system-config-printer-udev: /n
dnf remove system-config-printer-udev /n
3) В папке /etc/udev/rules.d создайте файл, например, «60-hp_brainless.rules», где пропишите следующее правило для менеджера устройств udev. Данное правило будет запускать команду загрузки firmware по наступлении события «Включение принтера»:/n
ACTION!="add", GOTO="skip_hp"
SUBSYSTEM!="usb", GOTO="skip_hp"
ATTRS{idVendor}=="03f0", ATTRS{idProduct}=="2b17", ATTRS{dev}=="*", RUN+="hp-firmware  -n --device=hp:/usb/HP_LaserJet_1020?serial=FN1DNNJ"
LABEL="skip_hp"/n
Здесь idVendor и idProduct указаны для HP LaserJet 1020, если у вас другая модель, то эти значения можно узнать в выводе команды lsusb.
Значение параметра --device так же приведено в качестве примера. /n Для вашего принтера, подключенного к ПК, вы сможете получить его из вывода команды lpinfo -v./n
В позиции аргументов утилиты hp-firmware укажите значения для Вашего принтера и укажите обязательно неинтерактивный режим (подробнее об этой команде и её опциях см. здесь)./n
4) Обязательно перезапустите менеджер udev следующими командами:/n
 udevadm control --reload-rules /n
 udevadm trigger/n
`
        },
        {
          id: 16,
          deviceType: 'МФУ',
          brand: 'Kyocera',
          model: 'FS-6530',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Kyocera FS-6530 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Kyocera FS-6530 на Windows'
        },
        {
          id: 17,
          deviceType: 'МФУ',
          brand: 'Kyocera',
          model: 'M2235',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Kyocera M2235 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Kyocera M2235 на Windows'
        },
        {
          id: 18,
          deviceType: 'МФУ',
          brand: 'Kyocera',
          model: 'M2635',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Kyocera M2635 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Kyocera M2635 на Windows'
        },
        {
          id: 19,
          deviceType: 'МФУ',
          brand: 'Kyocera',
          model: 'M4132',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Kyocera M4132 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Kyocera M4132 на Windows'
        },
        {
          id: 20,
          deviceType: 'МФУ',
          brand: 'Samsung',
          model: '3870',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Samsung 3870 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Samsung 3870 на Windows'
        },
        {
          id: 21,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: '3635',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 3635 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 3635 на Windows'
        },
        {
          id: 22,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: '5222',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 5222 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 5222 на Windows'
        },
        {
          id: 23,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: '5225',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 5225 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 5225 на Windows'
        },
        {
          id: 24,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: '5230',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 5230 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 5230 на Windows'
        },
        {
          id: 25,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: '5325',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 5325 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 5325 на Windows'
        },
        {
          id: 26,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: '5735',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 5735 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 5735 на Windows'
        },
        {
          id: 27,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: 'WC 3220',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox WC 3220 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox WC 3220 на Windows'
        },
        {
          id: 28,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: 'WC 423',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox WC 423 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox WC 423 на Windows'
        },
        {
          id: 29,
          deviceType: 'МФУ',
          brand: 'Xerox',
          model: '3325',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 3325 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 3325 на Windows'
        },
        {
          id: 30,
          deviceType: 'Принтер',
          brand: 'Canon',
          model: 'IPF 770',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon IPF 770 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon IPF 770 на Windows'
        },
        {
          id: 31,
          deviceType: 'Принтер',
          brand: 'Canon',
          model: 'LBP 623C',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Canon LBP 623C Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Canon LBP 623C на Windows'
        },
        {
          id: 32,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'color LJ CP3525',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP color LJ CP3525 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP color LJ CP3525 на Windows'
        },
        {
          id: 33,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'color LJ Pro 200',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP color LJ Pro 200 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP color LJ Pro 200 на Windows'
        },
        {
          id: 34,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ 2420',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ 2420 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ 2420 на Windows'
        },
        {
          id: 35,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ 300',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ 300 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ 300 на Windows'
        },
        {
          id: 36,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ 4200',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ 4200 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ 4200 на Windows'
        },
        {
          id: 37,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ 5200',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ 5200 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ 5200 на Windows'
        },
        {
          id: 38,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ 9040',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ 9040 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ 9040 на Windows'
        },
        {
          id: 39,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ P2035',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ P2035 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ P2035 на Windows'
        },
        {
          id: 40,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ P3015',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'HP LJ P3015 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для HP LJ P3015 на Windows'
        },
        {
          id: 41,
          deviceType: 'Принтер',
          brand: 'HP',
          model: 'LJ Pro CP1025',
          os: 'Windows',
          redOsSupport: 'Частично',
          osBit: 'x64',
          driverName: 'HP LJ Pro CP1025 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription: `Решаются проблемы следующим образом: /n
1) Войдите в систему как root (можно сделать и в консольном окне MATE/Cinnamon)./n
2) Удалите пакет system-config-printer-udev: /n
dnf remove system-config-printer-udev /n
3) В папке /etc/udev/rules.d создайте файл, например, «60-hp_brainless.rules», где пропишите следующее правило для менеджера устройств udev. Данное правило будет запускать команду загрузки firmware по наступлении события «Включение принтера»:/n
ACTION!="add", GOTO="skip_hp"
SUBSYSTEM!="usb", GOTO="skip_hp"
ATTRS{idVendor}=="03f0", ATTRS{idProduct}=="2b17", ATTRS{dev}=="*", RUN+="hp-firmware  -n --device=hp:/usb/HP_LaserJet_1020?serial=FN1DNNJ"
LABEL="skip_hp"/n
Здесь idVendor и idProduct указаны для HP LaserJet 1020, если у вас другая модель, то эти значения можно узнать в выводе команды lsusb.
Значение параметра --device так же приведено в качестве примера. /n Для вашего принтера, подключенного к ПК, вы сможете получить его из вывода команды lpinfo -v./n
В позиции аргументов утилиты hp-firmware укажите значения для Вашего принтера и укажите обязательно неинтерактивный режим (подробнее об этой команде и её опциях см. здесь)./n
4) Обязательно перезапустите менеджер udev следующими командами:/n
 udevadm control --reload-rules /n
 udevadm trigger/n
`
        },
        {
          id: 42,
          deviceType: 'Принтер',
          brand: 'Kyocera',
          model: 'P2040',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Kyocera P2040 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Kyocera P2040 на Windows'
        },
        {
          id: 43,
          deviceType: 'Принтер',
          brand: 'Pantum',
          model: 'M7100DW',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Pantum M7100DW Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Pantum M7100DW на Windows'
        },
        {
          id: 44,
          deviceType: 'Принтер',
          brand: 'Xerox',
          model: '5019',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 5019 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 5019 на Windows'
        },
        {
          id: 45,
          deviceType: 'Принтер',
          brand: 'Xerox',
          model: '6128',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox 6128 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox 6128 на Windows'
        },
        {
          id: 46,
          deviceType: 'Принтер',
          brand: 'Xerox',
          model: 'M118',
          os: 'Windows',
          redOsSupport: 'Полная',
          osBit: 'x64',
          driverName: 'Xerox M118 Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription:
            'Инструкция по установке драйвера для Xerox M118 на Windows'
        },
        {
          id: 2,
          deviceType: 'МФУ',
          brand: 'Canon',
          model: 'PIXMA TS9120',
          os: 'Linux',
          redOsSupport: 'Частичная',
          osBit: 'x86',
          driverName: 'Canon PIXMA Driver',
          downloadLink: '#',
          description: 'Описание драйвера',
          installationDescription: ''
        }
        // Добавьте больше данных драйверов по необходимости
      ],
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

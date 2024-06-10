<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-4">Сравнение программного обеспечения</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Категория
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Зарубежная программа
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Отечественные аналоги
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="program in programs" :key="program.id">
            <td class="py-2 px-4 border-b border-gray-200">
              {{ program.category }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ program.foreignSoftware }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              <ul>
                <li v-for="analog in program.domesticAnalogs" :key="analog">
                  {{ analog }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'compatible',
  data () {
    return {
      programs: [
        {
          id: 1,
          category: 'Офисные программы',
          foreignSoftware: 'Microsoft Office 2013',
          domesticAnalogs: ['Мой офис', 'AlterOffice', 'Р7-Office']
        },
        {
          id: 2,
          category: 'PDF-программы',
          foreignSoftware: 'Adobe Acrobat Reader',
          domesticAnalogs: [
            'Система оптического распознавания текста «SETERE OCR»',
            'ContentReader PDF'
          ]
        },
        {
          id: 3,
          category: 'PDF-программы',
          foreignSoftware: 'Adobe Acrobat Professional',
          domesticAnalogs: [
            'Система оптического распознавания текста «SETERE OCR»',
            'ContentReader PDF'
          ]
        },
        {
          id: 4,
          category: 'Архиваторы',
          foreignSoftware: '7-ZIP',
          domesticAnalogs: ['ARZip']
        },
        {
          id: 5,
          category: 'СУБД',
          foreignSoftware: 'Borland Database Engine',
          domesticAnalogs: ['СУБД Ред База Данных']
        },
        {
          id: 6,
          category: 'Виртуализация',
          foreignSoftware: 'Citrix Receiver',
          domesticAnalogs: ['zVirt']
        },
        {
          id: 7,
          category: 'Мультимедиа',
          foreignSoftware: 'K-Lite Codec Pack 11',
          domesticAnalogs: ['САРМА.ПЛЕЕР под Linux/Windows']
        },
        {
          id: 8,
          category: 'Криптография',
          foreignSoftware: 'CryptoPro CSP',
          domesticAnalogs: [
            'Средство криптографической защиты информации «КриптоПро CSP» версии 5.0'
          ]
        },
        {
          id: 9,
          category: 'Криптография',
          foreignSoftware: 'eToken PKI Client 5.1',
          domesticAnalogs: [
            'Карточная ОС Рутокен',
            'Программный комплекс Единый Клиент JaCarta'
          ]
        },
        {
          id: 10,
          category: 'Программы для разработки',
          foreignSoftware: 'Java Runtime Enviroment 6.30',
          domesticAnalogs: ['Java "Axiom JDK Pro"']
        },
        {
          id: 11,
          category: 'Антивирусы',
          foreignSoftware: 'Kaspersky Security',
          domesticAnalogs: ['Kaspersky Security']
        },
        {
          id: 12,
          category: 'Графические редакторы',
          foreignSoftware: 'Corel DRAW',
          domesticAnalogs: [
            'AliveColors — многофункциональный российский графический редактор'
          ]
        },
        {
          id: 13,
          category: 'Офисные программы',
          foreignSoftware: 'R7-Office',
          domesticAnalogs: ['R7-Office']
        },
        {
          id: 14,
          category: 'Графические редакторы',
          foreignSoftware: 'Adobe Photoshop',
          domesticAnalogs: [
            'AliveColors — многофункциональный российский графический редактор'
          ]
        },
        {
          id: 15,
          category: 'Графические редакторы',
          foreignSoftware: 'Adobe Illustrator',
          domesticAnalogs: [
            'AliveColors — многофункциональный российский графический редактор'
          ]
        },
        {
          id: 16,
          category: 'PDF-программы',
          foreignSoftware: 'Master PDF',
          domesticAnalogs: ['Master PDF Editor']
        },
        {
          id: 17,
          category: 'OCR-программы',
          foreignSoftware: 'ABBYY FineReader',
          domesticAnalogs: [
            'Система оптического распознавания текста «SETERE OCR»',
            'ContentReader PDF'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped></style>

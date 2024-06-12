HTML
<template>
  <div class="">
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
              Отечественное ПО
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Зарубежный аналог
            </th>
            <th
              class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
            >
              Сертификат совместимости с РЕД ОС
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="program in programs" :key="program.id">
            <td class="py-2 px-4 border-b border-gray-200">
              {{ program.category }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              <ul>
                <li v-for="analog in program.domesticAnalogs" :key="analog">
                  {{ analog }}
                </li>
              </ul>
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              {{ program.foreignSoftware }}
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              <a
                :href="program.compatibilityLink"
                class="text-blue-500 underline"
                target="_blank"
                >Сертификат</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
]
<script>
export default {
  name: 'compatible',
  data() {
    return {
      programs: [
        {
          id: 1,
          category: 'Офисные программы',
          domesticAnalogs: ['Мой офис'],
          foreignSoftware: 'Microsoft Office 2013',
          compatibilityLink:
            'http://redos.red-soft.ru/upload/vote/431/sjoxwsphd1owo60qkl46r8wf2zrwxs36.pdf'
        },
        {
          id: 2,
          category: 'Офисные программы',
          domesticAnalogs: ['Р7-Office'],
          foreignSoftware: 'Microsoft Office 2013',
          compatibilityLink:
            'http://redos.red-soft.ru/upload/vote/39b/qg66445o3en4fu43bf5hlagw1dsp7hsn/Сертификат_Совместимость_РЕД_ОС_8_2.pdf'
        },
        {
          id: 3,
          category: 'Офисные программы',
          domesticAnalogs: ['AlterOffice'],
          foreignSoftware: 'Microsoft Office 2013',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/f69/0wyz5wduulmo85fgqs31oceyo4wkkat3/Сертификат_совместимости_AlterOffice_и_РЕД_ОС.pdf'
        },
        {
          id: 4,
          category: 'PDF-программы',
          domesticAnalogs: ['ContentReader PDF'],
          foreignSoftware:
            'Adobe Acrobat Reader, Adobe Acrobat Professional, ABBYY FineReader',
          compatibilityLink:
            ' https://redos.red-soft.ru/upload/vote/f69/0wyz5wduulmo85fgqs31oceyo4wkkat3/Сертификат_совместимости_AlterOffice_и_РЕД_ОС.pdf'
        },
        {
          id: 5,
          category: 'PDF-программы',
          domesticAnalogs: [
            'Система оптического распознавания текста «SETERE OCR»'
          ],
          foreignSoftware: 'ABBYY FineReader',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/290/j8ahik3h0l2f0isetuhlse2409st1ilv.pdf'
        },
        {
          id: 6,
          category: 'PDF-программы',
          domesticAnalogs: ['Master PDF'],
          foreignSoftware: 'Adobe Acrobat Professional',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/8f4/rk0zxtbzozhreb66kclha788ciix5435.pdf'
        },
        {
          id: 7,
          category: 'СУБД',
          domesticAnalogs: ['СУБД Ред База Данных'],
          foreignSoftware: 'Borland Database Engine',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/ac3/qw0gg82qvypf4zxpemqrwks9dvr22239/zVirt_-_RedOs.pdf'
        },
        {
          id: 8,
          category: 'Виртуализация',
          domesticAnalogs: ['zVirt'],
          foreignSoftware: 'Citrix Receiver',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/ac3/qw0gg82qvypf4zxpemqrwks9dvr22239/zVirt_-_RedOs.pdf'
        },
        {
          id: 9,
          category: 'Мультимедиа',
          domesticAnalogs: ['САРМА.ПЛЕЕР под Linux/Windows'],
          foreignSoftware: 'K-Lite Codec Pack 11',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/266/x3jpujrzgin32qtcfgay9nywt8euhh1r/Sarma_-_RedOs.pdf'
        },
        {
          id: 10,
          category: 'Криптография',
          domesticAnalogs: [
            'Средство криптографической защиты информации «КриптоПро CSP» версии 5.0'
          ],
          foreignSoftware: 'CryptoPro CSP',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/fba/dlvjsx9ftsz636gl3vzg19a0aic84ky2.pdf'
        },
        {
          id: 11,
          category: 'Программы для разработки',
          domesticAnalogs: ['Java "Axiom JDK Pro"'],
          foreignSoftware: 'Java Runtime Enviroment 6.30',
          compatibilityLink:
            'https://redos.red-soft.ru/upload/vote/e21/ttdgs33w7k69nv5vlww642rzfkwwrg1x/Сертификат%20РЕД%20ОС%20-%20%20Axiom%20JDK%20Pro_2.pdf'
        }
      ]
    }
  }
}
</script>

<style scoped></style>

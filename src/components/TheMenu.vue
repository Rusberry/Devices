<template>
  <div class="mt-[18px]">
    <ul class="flex flex-row items-end">
      <li class="mr-8">
        <router-link to="/drivers">
          <img src="/src/assets/settings.png" class="w-20 h-20" alt="" />
          <span class="text-black">Драйверы</span>
        </router-link>
      </li>
      <li class="mr-8">
        <router-link to="/printers">
          <img src="/src/assets/printer3.png" class="w-28 h28" alt="" />
          <span class="text-black">Принтеры</span>
        </router-link>
      </li>
      <li class="mr-8">
        <router-link to="/mfp">
          <img src="/src/assets/mfp4.png" class="w-24 h-24" alt="" />
          <span class="text-black">МФУ</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

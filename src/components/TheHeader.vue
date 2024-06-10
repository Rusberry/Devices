<template>
  <header class="flex flex-col bg-fulloffice h-1/2 bg-cover">
    <div class="ml-40">
      <div class="flex items-center">
        <div class="w-1/2 flex mt-[50px]">
          <router-link to="/">
            <button class="mr-10">
              <svg
                width="22"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.7735 27.2265H9.32126V16.7912H17.5077V27.2265H24.0555V11.265L13.4145 3.21687L2.7735 11.265V27.2265ZM1 29V10.3783L13.4145 1L25.829 10.3783V29H15.7342V18.5647H11.0948V29H1Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </button>
          </router-link>
          <div class="flex items-center">
            <input
              type="text"
              class="block w-full p-2 border border-grey-700 rounded-s-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Введите модель..."
              name="search"
            />
            <button class="bg-red p-2 rounded-e-full">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8667 21.5L12.5167 14.15C11.9333 14.6167 11.2625 14.9861 10.5042 15.2583C9.74583 15.5306 8.93889 15.6667 8.08333 15.6667C5.96389 15.6667 4.17033 14.9324 2.70267 13.464C1.235 11.9956 0.500778 10.202 0.5 8.08333C0.5 5.96389 1.23422 4.17033 2.70267 2.70267C4.17111 1.235 5.96467 0.500778 8.08333 0.5C10.2028 0.5 11.9967 1.23422 13.4652 2.70267C14.9336 4.17111 15.6674 5.96467 15.6667 8.08333C15.6667 8.93889 15.5306 9.74583 15.2583 10.5042C14.9861 11.2625 14.6167 11.9333 14.15 12.5167L21.5 19.8667L19.8667 21.5ZM8.08333 13.3333C9.54167 13.3333 10.7814 12.8231 11.8027 11.8027C12.8239 10.7822 13.3341 9.54244 13.3333 8.08333C13.3333 6.625 12.8231 5.38561 11.8027 4.36517C10.7822 3.34472 9.54244 2.83411 8.08333 2.83333C6.625 2.83333 5.38561 3.34394 4.36517 4.36517C3.34472 5.38639 2.83411 6.62578 2.83333 8.08333C2.83333 9.54167 3.34394 10.7814 4.36517 11.8027C5.38639 12.8239 6.62578 13.3341 8.08333 13.3333Z"
                  fill="white"
                />
              </svg>
            </button>
            <router-link to="/compatible">
              <div class="text-white ml-4">Совместимость</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="mt-[18px] w-2/3 mb-[50px]">
        <h2 class="text-white">
          Добро пожаловать на наш сайт по поиску драйверов для орг техники и их
          совместимости с РЕД ОС!
        </h2>
        <h2 class="text-white mt-[18px] w-2/3">
          Здесь вы можете найти необходимые драйверы для своей модели принтера
          или МФУ
        </h2>
      </div>
    </div>
  </header>
</template>

<template>
  <div
    class="flex items-center p-2 border border-gray-300 rounded-full focus focus:outline-none focus:border-primary-400"
  >
    <input
      v-model.trim="result"
      class="flex-grow font-thin focus:outline-none"
      placeholder="キーワードを入力..."
      type="text"
      @input="inputEvent"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 fill-stroke text-gray-600 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</template>

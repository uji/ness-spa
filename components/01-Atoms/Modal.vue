<template>
  <div
    ref="keyCapture"
    class="z-10 flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
    @click="clickEvent(false)"
    @keydown.esc="clickEvent(false)"
  >
    <div
      class="z-20 m-4 w-full md:max-w-xl bg-white rounded-md shadow-lg"
      @click.stop
    >
      <div class="flex justify-between pl-4 border-b">
        <h1 class="self-center text-xl text-gray-700">{{ title }}</h1>
        <button
          class="py-2 px-4 text-3xl text-gray-500 font-light focus:outline-none hover:text-gray-800"
          @click="clickEvent(false)"
        >
          ×
        </button>
      </div>
      <div class="px-4 py-8">
        <slot name="contents">contents</slot>
      </div>
      <div class="flex justify-end p-4">
        <button
          v-if="closeButton !== ''"
          text="close"
          design="secondary"
          class="mr-2 p-2 border rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-800 focus:outline-none"
          @click="clickEvent(false)"
        >
          {{ closeButton }}
        </button>
        <GorgeousButton
          v-if="gorgeousButton !== ''"
          class="p-2"
          :text="gorgeousButton"
          @click="clickEvent(true)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    closeButton: {
      type: String,
      default: '',
    },
    gorgeousButton: {
      type: String,
      default: '',
    },
  },
  setup(_, { emit }) {
    const escEvent = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        clickEvent(false)
      }
    }
    const clickEvent = (flg: Boolean) => {
      window.removeEventListener('keydown', escEvent)
      emit('click', flg)
    }
    onMounted(() => {
      window.addEventListener('keydown', escEvent)
    })
    return {
      clickEvent,
    }
  },
})
</script>

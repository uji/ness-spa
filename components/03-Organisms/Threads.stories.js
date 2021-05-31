import '@/assets/css/tailwind.css'

export default {
  title: 'Threads',
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template: '<Threads v-bind="args" />',
})

export const Normal = Template.bind({})
Normal.args = {
  threads: [
    { title: 'CTOを救いたい', id: '213214212' },
    {
      title:
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      id: '213214213',
    },
    { title: 'title', id: '213214214' },
    { title: 'title', id: '213214215' },
    { title: 'title', id: '213214216' },
  ],
}

import '@/assets/css/tailwind.css'

export default {
  title: 'Checkbox',
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template: '<Checkbox v-bind="args" />',
})

export const Normal = Template.bind({})
Normal.args = {
  id: 'checkbox',
  name: 'sample',
  value: '1',
  text: 'check',
}
console.log(Normal)

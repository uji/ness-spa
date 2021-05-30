import '@/assets/css/tailwind.css'
import { storiesOf } from '@storybook/vue'

storiesOf('Checkbox', module).add('Normal', () => ({
  data() {
    return {
      number1: '10',
    }
  },
  template:
    '<Checkbox id="checkbox" name="sample" value="1" :text="number1"></Checkbox>',
}))

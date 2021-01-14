import '@/assets/css/tailwind.css'
export default {
  title: 'Button',
}

export const all = () => `
<ul>
  <li>
    <p>normal</p>
    <Button text="button text" />
  </li>
  <li>
    <p>secondary</p>
    <SecondaryButton text="button text" />
  </li>
</ul>
`

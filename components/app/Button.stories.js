import ButtonComponent from '~/components/app/Button'
export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
    round: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Awesome Button',
    },
  },
}

export const Button = (_, { argTypes }) => ({
  components: { Button: ButtonComponent },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />',
})

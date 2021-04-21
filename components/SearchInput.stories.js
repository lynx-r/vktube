import SearchInputComponent from './SearchInput'

export default {
  title: 'Search Input',
  component: SearchInputComponent,
  argTypes: {
    // type: {
    //   control: {
    //     type: 'select',
    //     options: ['primary', 'secondary'],
    //   },
    //   defaultValue: 'primary',
    // },
    // round: { control: 'boolean' },
    // text: {
    //   control: 'text',
    //   defaultValue: 'Awesome Button',
    // },
  },
}

export const SearchInput = (_, { argTypes }) => ({
  components: { SearchInput: SearchInputComponent },
  props: Object.keys(argTypes),
  template: '<SearchInput v-bind="$props" />',
})

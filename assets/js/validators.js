  import { helpers } from 'vuelidate/lib/validators'
  export const color = helpers.regex('color', /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
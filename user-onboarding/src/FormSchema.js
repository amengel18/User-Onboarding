import * as Yup from 'yup'

const stringSchema = Yup.string()

const FormSchema = Yup.object().shape({
    name: Yup
        .string()
        .trim()
        .required()
        .min(3, "Name must be at least 3 characters"),
    email: Yup
        .string()
        .email()
        .required(),
    password: Yup
        .string()
        .trim()
        .required(),
    terms: Yup.boolean()
})

export default FormSchema
import {computed, watch} from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate';
export function useLoginForm() {
    const {handleSubmit, isSubmitting, submitCount} = useForm()
        const {value: email, errorMessage: eError, handlerBlur: eBlur} = useField(
            'email',
            yup
                .string()
                .trim()
                .required('Пожалуйста введите email')
                .email('Необходимо ввести корректный email')
        )
        const {value: password, errorMessage: pError, handlerBlur: pBlur} = useField(
            'password',
            yup
                .string()
                .trim()
                .required('Пожалуйста введите пароль')
                .min(6, 'Пароль не может быть меньше 6 символов')
        )
        const onSubmit = handleSubmit(values => {

        })
        const isTooManyAttempts = computed(() => submitCount.value >= 3)
        watch(isTooManyAttempts, val => {
            if(val) {
                setTimeout(() => submitCount.value = 0, 1000)
            }
        })
        return {
            email,
            password,
            eError,
            pError,
            eBlur,
            pBlur,
            onSubmit,
            isSubmitting,
            isTooManyAttempts
        }
}
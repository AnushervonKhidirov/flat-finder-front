import type { FC, FormEvent } from 'react'
import type { IFormInputs, IConvertedFormData } from '@utils/types/form'

import { useRef } from 'react'

import Input from '../input/input'
import Button from '../button/Button'

import styles from './form.module.css'

const Form: FC<IFormInputs> = ({ inputs, submitText, callback }) => {
    const formElem = useRef<HTMLFormElement | null>(null)

    function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!formElem.current) return

        const formData = new FormData(formElem.current)
        const dataToSubmit: IConvertedFormData = {}

        for (const input of formData.entries()) {
            dataToSubmit[input[0]] = input[1]
        }

        callback(dataToSubmit)
    }

    return (
        <form className={styles.form} ref={formElem} onSubmit={e => submitForm(e)}>
            {inputs.map(input => (
                <Input name={input.name} type={input.type} placeholder={input.placeholder} key={input.name} />
            ))}
            <Button type='submit'>{submitText}</Button>
        </form>
    )
}

export default Form

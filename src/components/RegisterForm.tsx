'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { ComponentProps, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Box } from './DesignSystem/Box'
import { Button } from './DesignSystem/Button'
import { Text } from './DesignSystem/Text'
import { TextInput } from './DesignSystem/TextInput'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Usuário deve ter 3 letas.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'O usuário pode ter letras e hifens' })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'Usuário deve ter 3 letas.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export type RegisterFormProps = ComponentProps<'form'>

export function RegisterForm(props: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('username')) {
      setValue('username', String(searchParams.get('username')))
    }
  }, [searchParams, setValue])

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <Box
      as="form"
      className="flex w-full max-w-[572px] flex-col gap-4"
      onSubmit={handleSubmit(handleRegister)}
      {...props}
    >
      <label className="flex flex-col gap-2">
        <Text size="xs">Nome de usuário</Text>
        <TextInput
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />

        {errors.username ? (
          <Text size="xs" className="-mt-1 text-error-500 dark:text-error-500">
            {errors.username?.message}
          </Text>
        ) : (
          <Text className="-mt-1">{'\u200B'}</Text>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <Text size="xs">Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />

        {errors.name ? (
          <Text size="xs" className="-mt-1 text-error-500 dark:text-error-500">
            {errors.name?.message}
          </Text>
        ) : (
          <Text className="-mt-1">{'\u200B'}</Text>
        )}
      </label>

      <Button type="submit" disabled={isSubmitting}>
        Próximo passo
        <ArrowRight />
      </Button>
    </Box>
  )
}

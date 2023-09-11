'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Box } from './DesignSystem/Box'
import { Button } from './DesignSystem/Button'
import { Text } from './DesignSystem/Text'
import { TextInput } from './DesignSystem/TextInput'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Mínimo de 3 letras' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens' })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsernameForm(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
      <Box
        className="mt-4 grid items-center gap-4 p-4 lg:grid-cols-claim-form"
        onSubmit={handleSubmit(handleClaimUsernameForm)}
        as="form"
      >
        <TextInput
          sizes="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Box>

      <div className="mt-2">
        <Text size="xxs" className="text-gray-400 dark:text-gray-400">
          {errors.username ? errors.username?.message : '\u200B'}
        </Text>
      </div>
    </>
  )
}

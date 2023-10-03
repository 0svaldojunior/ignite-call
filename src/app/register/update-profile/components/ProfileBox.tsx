'use client'

import { Avatar } from '@/components/DesignSystem/Avatar'
import { Box } from '@/components/DesignSystem/Box'
import { Button } from '@/components/DesignSystem/Button'
import { Text } from '@/components/DesignSystem/Text'
import { TextArea } from '@/components/DesignSystem/TextArea'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormAnnotation } from './FormAnnotation'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export type ProfileBoxProps = ComponentProps<typeof Box> & {
  avatarUrl: string | undefined
}

export type UpdateProfileProps = ComponentProps<'form'>

export function ProfileBox({ avatarUrl, ...props }: ProfileBoxProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  async function handleUpdateProfile(data: UpdateProfileData) {}
  return (
    <Box
      as="form"
      className="mt-6 flex w-full max-w-[572px] flex-col gap-4"
      onSubmit={handleSubmit(handleUpdateProfile)}
      {...props}
    >
      <label className="flex flex-col gap-2">
        <Text size="xs">Foto de perfil</Text>
        <Avatar src={avatarUrl} />
      </label>

      <label className="flex flex-col gap-2">
        <Text size="xs">Sobre você</Text>
        <TextArea {...register('bio')} />
        <FormAnnotation size="xs">
          Fale um pouco sobre você. Isto será exibido em sua página pessoa.
        </FormAnnotation>
      </label>

      <Button type="submit" disabled={isSubmitting}>
        Finalizar
        <ArrowRight />
      </Button>
    </Box>
  )
}

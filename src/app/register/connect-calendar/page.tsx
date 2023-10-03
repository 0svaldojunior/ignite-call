'use client'

import { Box } from '@/components/DesignSystem/Box'
import { Button } from '@/components/DesignSystem/Button'
import { Heading } from '@/components/DesignSystem/Heading'
import { MultiStep } from '@/components/DesignSystem/MultiStep'
import { Text } from '@/components/DesignSystem/Text'
import { ArrowRight, Check } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ConnectCalendar() {
  const session = useSession()
  const searchParams = useSearchParams()

  const hasAuthError = !!searchParams.get('error')
  const isSignedIn = session.status === 'authenticated'

  const router = useRouter()

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNextPage() {
    await router.push('/register/time-intervals')
  }

  console.log(session)

  return (
    <div className="space-y-4 px-4 pt-20 lg:flex lg:flex-col lg:items-center ">
      <div className="flex max-w-[572px] flex-col gap-4 px-6 py-0">
        <Heading as="strong" className="leading-4">
          Conecte sua agenda!
        </Heading>
        <Text className="mb-6 text-gray-800 dark:text-gray-200">
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </div>

      <Box className="mt-6 flex w-full max-w-[572px] flex-col space-y-3">
        <div className="mb-2 flex items-center justify-between rounded-md border border-solid border-gray-600 px-4 py-6">
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </div>

        {hasAuthError && (
          <Text size="xs" className="mb-2 text-error-500">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </Text>
        )}

        <Button type="submit" disabled={!isSignedIn} onClick={handleNextPage}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </div>
  )
}

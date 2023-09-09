import { ArrowRight } from 'lucide-react'
import { Box } from './DesignSystem/Box'
import { Button } from './DesignSystem/Button'
import { TextInput } from './DesignSystem/TextInput'

export function ClaimUsernameForm() {
  return (
    <Box
      className="lg:grid-cols-claim-form mt-4 grid items-center gap-4 p-4"
      as="form"
    >
      <TextInput sizes="sm" prefix="ignite.com/" placeholder="seu-usuário" />
      <Button type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Box>
  )
}

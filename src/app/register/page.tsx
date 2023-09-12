import { Heading } from '@/components/DesignSystem/Heading'
import { MultiStep } from '@/components/DesignSystem/MultiStep'
import { Text } from '@/components/DesignSystem/Text'
import { RegisterForm } from '@/components/RegisterForm'

export default function Register() {
  return (
    <div className="space-y-4 px-4 pt-20 lg:flex lg:flex-col lg:items-center ">
      <div className="flex max-w-[572px] flex-col gap-4 px-6 py-0">
        <Heading as="strong" className="leading-4">
          Bem-vindo ao Ignite Call!
        </Heading>
        <Text className="mb-6 text-gray-800 dark:text-gray-200">
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </div>

      <RegisterForm />
    </div>
  )
}

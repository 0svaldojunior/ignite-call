import previewImage from '@/assets/appPreview.png'
import { ClaimUsernameForm } from '@/components/ClaimUsernameForm'
import { Heading } from '@/components/DesignSystem/Heading'
import { Text } from '@/components/DesignSystem/Text'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      className={`
      flex h-screen flex-col justify-center gap-10 px-10 text-start 
      lg:ml-auto lg:max-w-home-container lg:flex-row lg:items-center lg:gap-20
    `}
    >
      <div className="lg:min-w-[480px] lg:px-10 lg:py-0">
        <Heading size="2xl" className="pb-4 text-5xl lg:text-6xl">
          Agendamento descomplicado
        </Heading>

        <Text size="sm" className="text-gray-800 dark:text-gray-200 lg:text-xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </div>

      <div className="">
        <Image
          src={previewImage}
          height={800}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </div>
    </div>
  )
}

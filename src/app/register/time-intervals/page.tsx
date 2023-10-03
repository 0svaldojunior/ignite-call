'use client'

import { Button } from '@/components/DesignSystem/Button'
import { Checkbox } from '@/components/DesignSystem/Checkbox'
import { Heading } from '@/components/DesignSystem/Heading'
import { MultiStep } from '@/components/DesignSystem/MultiStep'
import { Text } from '@/components/DesignSystem/Text'
import { TextInput } from '@/components/DesignSystem/TextInput'
import { api } from '@/lib/axios'
import { convertTimeStringToMinutes } from '@/utils/convert-time-string-to-minutes'
import { days, getWeekDays } from '@/utils/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormError } from './components/FormError'
import { IntervalBox } from './components/IntervalBox'
import { IntervalItem } from './components/IntervalItem'
import { IntervalSpace } from './components/IntervalSpace'
import { IntervalsContainer } from './components/IntervalsContainer'

const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: 'Selecione ao menos um dia da semana!',
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
        }
      })
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'O horário de término deve ser pelo menos 1h distante do início!',
      },
    ),
})

type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>
type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalsFormInput>({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const intervals = watch('intervals')

  async function handleSetTimeIntervals(data: unknown) {
    console.log(data)
    const { intervals } = data as TimeIntervalsFormOutput

    await api.post('/users/time-intervals', {
      intervals,
    })
  }

  return (
    <div className="space-y-4 px-4 pt-20 lg:flex lg:flex-col lg:items-center ">
      <div className="flex max-w-[572px] flex-col gap-4 px-6 py-0">
        <Heading as="strong" className="leading-4">
          Quase lá
        </Heading>
        <Text className="mb-6 text-gray-800 dark:text-gray-200">
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </div>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => {
            if (field.weekDay === 0) {
              return (
                <IntervalItem key={field.id} variant="isFirst">
                  <IntervalSpace variant="day">
                    <Controller
                      name={`intervals.${index}.enabled`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <Checkbox
                            onCheckedChange={(checked) => {
                              field.onChange(checked === true)
                            }}
                            checked={field.value}
                          />
                        )
                      }}
                    />
                    <Text>{days[field.weekDay]}</Text>
                  </IntervalSpace>

                  <IntervalSpace variant="inputs">
                    <TextInput
                      sizes="sm"
                      type="time"
                      step={60}
                      disabled={intervals[index].enabled === false}
                      className="input[type=time]::-webkit-calendar-picker-indicator:invert w-24"
                      {...register(`intervals.${index}.startTime`)}
                    />
                    <TextInput
                      sizes="sm"
                      type="time"
                      step={60}
                      disabled={intervals[index].enabled === false}
                      className="input[type=time]::-webkit-calendar-picker-indicator:invert w-24"
                      {...register(`intervals.${index}.endTime`)}
                    />
                  </IntervalSpace>
                </IntervalItem>
              )
            } else {
              return (
                <IntervalItem key={field.id}>
                  <IntervalSpace variant="day">
                    <Controller
                      name={`intervals.${index}.enabled`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <Checkbox
                            onCheckedChange={(checked) => {
                              field.onChange(checked === true)
                            }}
                            checked={field.value}
                          />
                        )
                      }}
                    />
                    <Text>{days[field.weekDay]}</Text>
                  </IntervalSpace>

                  <IntervalSpace variant="inputs">
                    <TextInput
                      sizes="sm"
                      type="time"
                      step={60}
                      disabled={intervals[index].enabled === false}
                      className="input[type=time]::-webkit-calendar-picker-indicator:invert w-24"
                      {...register(`intervals.${index}.startTime`)}
                    />
                    <TextInput
                      sizes="sm"
                      type="time"
                      step={60}
                      disabled={intervals[index].enabled === false}
                      className="input[type=time]::-webkit-calendar-picker-indicator:invert w-24"
                      {...register(`intervals.${index}.endTime`)}
                    />
                  </IntervalSpace>
                </IntervalItem>
              )
            }
          })}
        </IntervalsContainer>

        {errors.intervals && (
          <FormError size="xs">{errors.intervals.root?.message}</FormError>
        )}

        <Button type="submit" disabled={isSubmitting}>
          Próximo passos
          <ArrowRight />
        </Button>
      </IntervalBox>
    </div>
  )
}

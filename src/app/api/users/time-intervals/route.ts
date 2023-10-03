import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
// import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { buildNextAuthOptions } from '../../auth/[...nextauth]/route'

const timeIntervalsBodySchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number(),
      startTimeInMinutes: z.number(),
      endTimeInMinutes: z.number(),
    }),
  ),
})

async function handler(req: NextRequest) {
  const bodyRequest = await req.json()
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Exclusive route for creation(POST)' },
      { status: 405 },
    )
  }

  if (bodyRequest === null || bodyRequest === undefined) {
    console.log('body.request is undefined or null')
    return NextResponse.json(
      { message: 'Request body is missing or empty' },
      { status: 400 },
    )
  }

  if (!bodyRequest.intervals) {
    console.log('intervals property is missing in body.request')
    return NextResponse.json(
      { message: 'intervals property is missing in request body' },
      { status: 400 },
    )
  }

  try {
    // const cookieStorage = cookies()
    const session = await getServerSession(
      buildNextAuthOptions(req, NextResponse.next()),
    )
    // const useId = cookieStorage.get('next-auth.session-token')
    const userId = session?.user.id

    console.log(session)
    if (!userId) {
      return NextResponse.json(
        { message: 'User not authenticated' },
        { status: 401 },
      )
    }

    const { intervals } = timeIntervalsBodySchema.parse(bodyRequest)
    console.log(intervals)
    console.log(userId)

    await Promise.all(
      intervals.map((interval) => {
        return prisma.userTimeInterval.create({
          data: {
            week_day: interval.weekDay,
            time_start_in_minutes: interval.startTimeInMinutes,
            time_end_in_minutes: interval.endTimeInMinutes,
            user_id: userId,
            // user_id: useId.value,
            // user_id: session?.user.id
          },
        })
      }),
    )

    return NextResponse.json(
      { message: 'Created with success!' },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error parsing intervals:', error)
    return NextResponse.json(
      { message: 'Invalid intervals format' },
      { status: 400 },
    )
  }
}

export { handler as DELETE, handler as GET, handler as POST, handler as PUT }

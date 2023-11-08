import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
// import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { buildNextAuthOptions } from '../../auth/[...nextauth]/route'

const updateProfileBodySchema = z.object({
  bio: z.string(),
})

async function handler(req: NextRequest) {
  const bodyRequest = await req.json()
  console.log(bodyRequest)
  if (req.method !== 'PUT') {
    return NextResponse.json(
      { message: 'Exclusive route for creation(PUT)' },
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

  if (!bodyRequest.bio) {
    console.log('bio property is missing in body.request')
    return NextResponse.json(
      { message: 'bio property is missing in request body' },
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

    if (!userId) {
      return NextResponse.json(
        { message: 'User not authenticated' },
        { status: 401 },
      )
    }

    const { bio } = updateProfileBodySchema.parse(bodyRequest)

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        bio,
      },
    })

    return NextResponse.json({ status: 204 })
  } catch (error) {
    console.error('Error user biography:', error)
    return NextResponse.json(
      { message: 'Invalid user biography format' },
      { status: 400 },
    )
  }
}

export { handler as DELETE, handler as GET, handler as POST, handler as PUT }

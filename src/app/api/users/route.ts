import { prisma } from '@/lib/prisma'
import { serialize } from 'cookie'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { name, username } = body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return NextResponse.json(
      { message: 'User already exists' },
      { status: 400 },
    )
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  const cookieIgnitecallUserId = serialize('@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return NextResponse.json(user, {
    status: 201,
    headers: { 'Set-Cookie': cookieIgnitecallUserId },
  })
}

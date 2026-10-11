import { NextResponse } from 'next/server'
import { getMediumArticles } from '@/lib/medium'

export const revalidate = 3600

export async function GET() {
  const data = await getMediumArticles()
  return NextResponse.json(data)
}

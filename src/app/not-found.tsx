import { cacheLife } from 'next/cache'
import NotFoundContent from '@/components/NotFoundContent'

export default async function NotFound() {
  'use cache'
  cacheLife('max')

  return <NotFoundContent year={new Date().getFullYear()} />
}

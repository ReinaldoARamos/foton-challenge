import { useRouter } from 'next/navigation'

export function UseRedirect() {
  const router = useRouter()

  function redirectTo(path: string) {
    router.push(path)
  }
  return redirectTo
}
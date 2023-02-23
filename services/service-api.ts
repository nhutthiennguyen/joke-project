import { Fetch } from '@/util/fetch'

export const serverAPI: Fetch = new Fetch('/api/', {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

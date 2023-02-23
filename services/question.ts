import { Question } from '@/pages'
import { serverAPI } from './service-api'

export const getQuestions = async (): Promise<{
  is_error: boolean
  data: Question | null
}> => serverAPI.get('questions')

export const postQuestion = (id: number, type: number) =>
  serverAPI.post('questions', { id, type })

import { Grid, Typography } from '@mui/material'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { getQuestions, postQuestion } from '@/services/question'
const logo = require('../public/logo.jpg').default.src

export interface Question {
  id: number
  question: string
}

export default function Home() {
  const [question, setQuestion] = useState<{
    id: number
    question: string
  } | null>()

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestion(data.data)
    })
  }, [])

  return (
    <>
      <Grid container width='auto'>
        <Header
          logo={logo}
          user={{
            avatar: logo,
            name: 'Ricardo',
            description: 'Coder is expected to follow',
          }}
        />

        <Hero
          title='How are you to day'
          description='has voted for a joke. It is okay if the user clears his cookie and votes again'
        ></Hero>
        <Content
          question={question ? question : null}
          pickQuestion={(data: any) => setQuestion(data)}
          onSubmit={(id: number, type: number) => postQuestion(id, type)}
        />
        <Footer />
      </Grid>
    </>
  )
}

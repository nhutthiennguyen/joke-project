import { Grid, Typography, Divider } from '@mui/material'
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
            name: 'Jim HLS',
            description: 'Handicrafted by',
          }}
        />

        <Hero
          title='A joke a day keeps doctor away'
          description='If you joke wrong way, your teeth have to pay. (Serious)'
        ></Hero>
        <Content
          question={question ? question : null}
          pickQuestion={(data: any) => setQuestion(data)}
          onSubmit={(id: number, type: number) => postQuestion(id, type)}
        />
        <Divider orientation='horizontal' variant='middle'></Divider>

        <Footer />
      </Grid>
    </>
  )
}

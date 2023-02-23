import { Question } from '@/pages'
import { getQuestions } from '@/services/question'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { setCookie } from 'cookies-next'
import React from 'react'
interface IProps {
  question: Question | null
  pickQuestion: Function
  onSubmit: Function
}

enum LIKE {
  LIKE,
  DISLIKE,
}
function Content(props: IProps) {
  const { question, onSubmit, pickQuestion } = props
  return (
    <Grid
      container
      minHeight={400}
      style={{ backgroundColor: 'white' }}
      alignItems='center'
      justifyContent='center'
    >
      {question ? (
        <>
          <Grid
            item
            xs={12}
            maxHeight={300}
            display='flex'
            justifyContent='center'
          >
            <Box width='50%' maxHeight={200} mt={5}>
              <Typography color='black' variant='body2'>
                {question.question}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} display='flex' justifyContent='center'>
            <Stack direction='row' spacing={2}>
              <Button
                variant='contained'
                onClick={async () => {
                  await onSubmit(question.id, LIKE.LIKE)
                  const rs = await getQuestions()
                  pickQuestion(rs.data)
                }}
              >
                This is funny
              </Button>
              <Button
                variant='contained'
                color='success'
                onClick={async () => {
                  await onSubmit(question.id, LIKE.DISLIKE)
                  const rs = await getQuestions()
                  pickQuestion(rs.data)
                }}
              >
                This is not funny
              </Button>
            </Stack>
          </Grid>
        </>
      ) : (
        <Typography color='black'>
          That's all the jokes for today! Come back another day!
        </Typography>
      )}
    </Grid>
  )
}

export default Content

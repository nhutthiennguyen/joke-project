// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

let json = require('../../data/questions.json')

interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

type Data = {
  is_error: boolean
  data: string | null
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method as keyof ResponseFuncs

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { cookies } = req

        let arr: string[] = []

        let cloneArr: any = []

        if (cookies?.id) {
          arr = cookies?.id.split(',')
        }

        cloneArr = json.filter((obj: any) => !arr.includes(obj.id + ''))

        const question = cloneArr[Math.floor(Math.random() * cloneArr.length)]

        res.json({ is_error: true, data: question })
        res.end()
      } catch (err: any) {
        return catcher(err)
      }
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { body, cookies } = req
        let stringId = `id=${body.id}`
        if (cookies?.id) {
          const string = Object.keys(cookies).reduce((string, key) => {
            if (key === 'id') {
              string += cookies[key]
            }

            return string
          }, '')
          stringId += `,${string}`
        }

        res.setHeader('set-cookie', stringId)
        res.end()
      } catch (err: any) {
        return catcher(err)
      }
    },
  }

  const catcher = (error: Error) => {
    return res.status(200).json({
      is_error: true,
      data: null,
    })
  }

  const response = handleCase[method]

  if (response) {
    return response(req, res)
  } else {
    return catcher(Error('Server Error'))
  }
}

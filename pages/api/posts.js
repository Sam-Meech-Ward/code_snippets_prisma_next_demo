import { prisma } from '../../server/db/client'

function titleFromCode(code) {
  return code.trim().split('\n')[0].replace('// ', '')
}

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      const {language, code} = req.body
      const title = titleFromCode(code)
      const post = await prisma.post.create({
        data: {
          title,
          language,
          code,
        },
      })
      res.status(201).json(post)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
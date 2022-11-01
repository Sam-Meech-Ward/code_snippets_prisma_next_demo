import { prisma } from '../../server/db/client'

function titleFromCode(code) {
  return code.trim().split('\n')[0].replace('// ', '')
}

async function post(req, res) {
  const { language, code } = req.body
  const title = titleFromCode(code)
  const post = await prisma.post.create({
    data: {
      title,
      language,
      code,
    },
  })
  res.status(201).json(post)
}

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      post(req, res)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
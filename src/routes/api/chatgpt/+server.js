import { API_KEY } from '$lib/Env'
import { Configuration, OpenAIApi } from 'openai'
import { json } from '@sveltejs/kit'

let apiKey

if (process.env.NODE_ENV === 'production') {
  apiKey = process.env.API_KEY
} else {
  apiKey = API_KEY
}

const openai = new OpenAIApi(new Configuration({
  apiKey: API_KEY
}))

// api/chatgpt POST
export const POST = async (event) => {
  const data = await event.request.formData()
  const message = data.get('message')

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }]
  })

  return json(res.data.choices[0].message)
}
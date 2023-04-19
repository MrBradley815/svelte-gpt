import { OpenAIApi, Configuration } from "openai";
import { j as json } from "../../../../chunks/index.js";
const API_KEY = "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";
const openai = new OpenAIApi(new Configuration({
  apiKey: API_KEY
}));
const POST = async (event) => {
  const data = await event.request.formData();
  const message = data.get("message");
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }]
  });
  return json(res.data.choices[0].message);
};
export {
  POST
};

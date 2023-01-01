import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import {
  Configuration as OpenAIConfiguration,
  OpenAIApi as OpenAIApiType,
} from "openai";

const configuration: OpenAIConfiguration = new Configuration({
  apiKey: `${process.env.NEXT_PUBLIC_OPEN_AI}`,
});
const openai: OpenAIApiType = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Generate a list of keyword ideas that are SEO, low competition & that will rank well in the top-10 for Google: ${req.body.text}.`,
    temperature: 0.8,
    max_tokens: 350,
    top_p: 1,
    frequency_penalty: 0.8,
    presence_penalty: 0,
    user: "user123456",
  });

  res.status(200).json({ result: completion.data });
}

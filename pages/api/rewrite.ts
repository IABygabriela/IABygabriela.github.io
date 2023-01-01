import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import {
  Configuration as OpenAIConfiguration,
  OpenAIApi as OpenAIApiType,
} from "openai";

const configuration: OpenAIConfiguration = new Configuration({
  apiKey: `${process.env.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}`,
});
const openai: OpenAIApiType = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Rewrite a sentence to adjust tone, be less repetitive while retaining meaning: ${req.body.text}.`,
    temperature: 0.6,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 0.8,
    presence_penalty: 0,
    user: "user123456",
  });

  res.status(200).json({ result: completion.data });
}

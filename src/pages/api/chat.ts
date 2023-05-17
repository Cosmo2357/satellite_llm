// import { ChatOpenAI } from "langchain/chat_models";
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";
import { CallbackManager } from "langchain/callbacks";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const config = {
  api: {
    bodyParser: false,
  },
  runtime: "edge",
};

export default async function handler(req: any, res: NextApiResponse) {
  const embeddings = new OpenAIEmbeddings();
  const embeddingsRes= await embeddings.embedQuery("Hello world");
  console.log(embeddingsRes);

  const body = await req.json()
console.log(body)
  try {
    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not defined.");
    }

    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    const llm = new ChatOpenAI({
      openAIApiKey: OPENAI_API_KEY,
      temperature: 0.9,
      streaming: true,
      callbackManager: CallbackManager.fromHandlers({
        handleLLMNewToken: async (token) => {
          await writer.ready;
          await writer.write(encoder.encode(`${token}`));
        },
        handleLLMEnd: async () => {
          await writer.ready;
          await writer.close();
        },
        handleLLMError: async (e) => {
          await writer.ready;
          await writer.abort(e);
        },
      }),
    });

    // const chain = new LLMChain({ prompt, llm });
    // chain.call({ query: query }).catch(console.error);

    // We can also construct an LLMChain from a ChatPromptTemplate and a chat model.
    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate(
        "You are a helpful assistant that answers questions as best you can."
      ),
      HumanMessagePromptTemplate.fromTemplate("{input}"),
    ]);
    const chain = new LLMChain({
      prompt: chatPrompt,
      llm: llm,
    });
    chain
      .call({ input: body.query })
      .catch(console.error);

    return new NextResponse(stream.readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error: any) {
     console.error(error);
     res.status(500).send("Internal Server Error");
/*     return new Response(
      JSON.stringify(
        { error: error.message },
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      )
    ); */
    return res.status(500).json({ error: error.message });
  }
}
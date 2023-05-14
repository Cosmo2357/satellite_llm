import {
  DirectoryLoader,
  JSONLoader,
  JSONLinesLoader,
  TextLoader,
  CSVLoader,
} from 'langchain/document_loaders';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { PineconeClient } from '@pinecone-database/pinecone';
import { PineconeStore } from 'langchain/vectorstores';

export const run = async () => {
  // 読み込みたいドキュメントのディレクトリを指定し、拡張子毎に Loader を指定
  const loader = new DirectoryLoader('./docs/react.dev', {
    '.json': (path) => new JSONLoader(path, '/texts'),
    '.jsonl': (path) => new JSONLinesLoader(path, '/html'),
    '.css': (path) => new TextLoader(path),
    '.txt': (path) => new TextLoader(path),
    '.tsx': (path) => new TextLoader(path),
    '.ts': (path) => new TextLoader(path),
    '.md': (path) => new TextLoader(path),
    '.csv': (path) => new CSVLoader(path, 'text'),
  });
  const docs = await loader.load();

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 800,
    chunkOverlap: 200,
  });

  const documents = await textSplitter.splitDocuments(docs);

  const client = new PineconeClient();
  await client.init({
    apiKey: process.env.PINECONE_API_KEY as string,
    environment: process.env.PINECONE_ENVIRONMENT as string,
  });

  const pineconeIndex = client.Index(process.env.PINECONE_INDEX as string);

  await PineconeStore.fromDocuments(documents, new OpenAIEmbeddings(), {
    pineconeIndex,
  });
};

run();
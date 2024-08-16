
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(<string>process.env.GEMINI_API_KEY);


 
  const model = genAI.getGenerativeModel({
    model: "text-embedding-004",
  });




export const vectorize = async (input: string): Promise<number[]> => {
  const embeddingResponse = await model.embedContent(input);

  const vector = embeddingResponse.embedding;

  return vector.values
}



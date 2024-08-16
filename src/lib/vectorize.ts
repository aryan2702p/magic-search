// import { openai } from './openai'

// export const vectorize = async (input: string): Promise<number[]> => {
//   const embeddingResponse = await openai.embeddings.create({
//     input,
//     model: 'text-embedding-ada-002',
//   })

//   const vector = embeddingResponse.data[0].embedding

//   return vector
// }
// import Gemini from 'gemini-api'
// import * as dotenv from 'dotenv'
// dotenv.config()

// const gemini = new Gemini({
//   apiKey: process.env.GEMINI_API_KEY,
// })

// export const vectorize = async (input: string): Promise<number[]> => {
//   try {
//     const embeddingResponse = await gemini.embeddings.create({
//       input,
//       model: 'text-embedding-ada-002',  // Adjust based on actual model name
//     })

//     const vector = embeddingResponse.data[0].embedding
//     return vector
//   } catch (error) {
//     console.error('Error creating embedding with Gemini API:', error)
//     throw error
//   }
// }
// import { genAI } from "./openai";
// const dotenv = require('dotenv');
// dotenv.config();

// const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

// export const vectorize = async (input: string): Promise<number[]> => {
//   try {
//     const embeddingResponse = await model.embedContent(input);

//     const vector = embeddingResponse.embedding.values;
//     return vector;
//   } catch (error) {
//     console.error('Error creating embedding with Google Generative AI:', error);
//     throw error;
//   }
// };

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(<string>process.env.GEMINI_API_KEY);


  // For embeddings, use the Text Embeddings model
  const model = genAI.getGenerativeModel({
    model: "text-embedding-004",
  });

  // const text: string = "The quick brown fox jumps over the lazy dog.";

  // const result = await model.embedContent(text);
  // const embedding = result.embedding;
  // console.log(embedding.values);


export const vectorize = async (input: string): Promise<number[]> => {
  const embeddingResponse = await model.embedContent(input);

  const vector = embeddingResponse.embedding;

  return vector.values
}



// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8000/embed'; // Replace with your server URL

// export const vectorize = async (input: string): Promise<number[]> => {
//   try {
//     // Send a POST request to the server
//     const response = await axios.post(API_URL, { sentences: input });

//     // Extract embeddings from the response
//     const vector: number[] = response.data.embeddings;

//     return vector;
//   } catch (error) {
//     console.error('Error requesting embeddings from the server:', error);
//     throw error;
//   }
// };


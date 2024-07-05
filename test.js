const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCPjmBRDcrWHRb3SVG49TjR6l2mhGrKd7c");

async function run() {
  // For embeddings, use the embedding-001 model
  const model = genAI.getGenerativeModel({ model: "embedding-001"});

  const text = "The quick brown fox jumps over the lazy man hunt."

  const result = await model.embedContent(text);
  const embedding = result.embedding;
  console.log(embedding.values);
}

run();
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// async function run() {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();
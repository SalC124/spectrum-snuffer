import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
  model: "o1-preview-2024-09-12",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    {
      role: "user",
      content: "Write a haiku about recursion in programming.",
    },
  ],
});

console.log(completion.choices[0].message);

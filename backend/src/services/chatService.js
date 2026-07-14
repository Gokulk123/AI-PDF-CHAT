const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function askGroq(question, context) {
  try {
    console.log("========== SENDING TO GROQ ==========");
    console.log("Question:", question);
    console.log("Context Length:", context.length);

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `
You are a Resume RAG Assistant.

Your job is to answer questions ONLY from the retrieved resume context.

Instructions:

- Never use your own knowledge.
- Never infer missing information.
- Never calculate years, dates, age or duration.
- Never summarize information that is not present.
- If a value exists in the context, copy it exactly.
- If multiple relevant pieces of information exist, combine them into one answer.
- For skills, projects, education, certifications and experience, return bullet points.
- If the answer is missing, respond exactly:

"I couldn't find that information in the uploaded PDF."

Be factual and concise.
`,
        },
        {
          role: "user",
          content: `Context:

${context}

Question:

${question}`,
        },
      ],
    });

    console.log("========== GROQ RESPONSE ==========");
    console.log(completion);

    return completion.choices[0].message.content;
  } catch (err) {
    console.error("========== GROQ ERROR ==========");
    console.error(err);

    throw err;
  }
}

module.exports = {
  askGroq,
};

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    organization: "org-bsDfHoAbZB5X6GZpWwjvP8LY",
    apiKey: process.env.API_KEY_OPENAI,
});

const openai = new OpenAIApi(configuration);


export async function openaiApi(theme: string, keyWords: string) {

    const chatAI = await openai.createCompletion({
        prompt: `Título para um artigo científico sobre ${keyWords} com uma abordagem
         ${theme}. Com no máximo 20 palavras e sem ponto inicial e sem aspas duplas.`,
        model: "text-davinci-003",
        max_tokens: 50,
        n: 1,
    })

    return chatAI.data.choices[0].text
}
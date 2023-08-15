// export const apiKey = 'place your openAI api key here';
// in some cases your api key maybe already expired
// try to use a new account to create an api key
export const apiKey = "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";
export const dummyMessages = [
    {
        id: 1,
        role: 'user', 
        content: 'How are you?'
    },
    {
        id: 2,
        role: 'assistant',
        content: "I'm fine, How may i help you today."
    },
    {
        id: 3,
        role: 'user',
        content: 'create an image of a dog playing with cat'
    },
    {
        id: 4,
        role: 'assistant',
        content: 'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg'
    }
]
import { apiKey } from "../constants";
import axios from "axios";

const client = axios.create({
    headers: {
        "Authorization": "Bearer"+apiKey,
        "Content-Type": "application/json",
        // Accept: 'application/json'
    }
})


const chatgptUrl = 'https://api.openai.com/v1/chat/completions';
const dalleUrl = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (prompt, messages)=>{
    
    // // Logic 1 : this will check the prompt from chatgpt if user wants to create an image
    try{
        const res = await client.post(chatgptUrl, {
            model: "gpt-3.5-turbo",
            messages: [{
                role: 'user',
                content: 'Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.'
            }]
        });

        console.log('Api Data: ',res.data);
        

    }catch(err){
        console.log('error in api calling : ',err);
        return Promise.resolve({success: false, msg: err.message});
    }

    // // Logic 2 : sometimes chatgpt does not understand the art messages but thats fine, you can use this approach :)

    // prompt = prompt.toLowerCase();
    // let isArt = prompt.includes('image') || prompt.includes('sketch') || prompt.includes('art') || prompt.includes('picture') || prompt.includes('drawing');
    // if(isArt){
    //     console.log('dalle api call');
    //     return dalleApiCall(prompt, messages)
    // }else{
    //     console.log('chatgpt api call')
    //     return chatgptApiCall(prompt, messages);
    // }
    
}
async function solveEquation(equation) {
    try {
        console.log('Starting equation solving process...');

        // Check if API key is available
        if (!apiKey) {
            throw new Error('API key is not set. Please go back and confirm your API key.');
        }

        const requestPayload = {
            model: "gpt-4o", //or gpt-3.5-turbo
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that solves mathematical equations. Provide the solution and a step-by-step explanation."
                },
                {
                    role: "user",
                    content: `Solve this equation: ${equation}`
                }
            ],
            max_tokens: 2000,
            temperature: 0.8 //0.7
        };

        console.log('Sending request to OpenAI API...');
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestPayload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(`API request failed: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        const solution = data.choices[0]?.message?.content.trim();

        if (!solution) {
            throw new Error('No solution found in the response.');
        }

        return solution;
    } catch (error) {
        console.error('solveEquation Error:', error);
        return `Error: ${error.message}`;
    }
}

//async function explainEquation(equation) {
    // Similar structure to solveEquation but tailored for explanations
    // (Implementation omitted for brevity)
//}
const baseURL = 'https://api.openai.com/v1/engines/text-curie-001/completions';

const fetchAPI = async (question) => {
    const response = await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        body: JSON.stringify(question),
    });

    if (response.ok) return response.json();
}

export default fetchAPI;
const API_KEY=process.env.API_KEY
export default async function getData() {
    try {
        const res = await fetch(`https://api.bigbookapi.com/search-books?api-key=${API_KEY}&query=books+about+children`,
            {
                // ChatGPT told me to add this to ensure it never runs on the client
                cache: "no-store",
            }
        );

        if (!res.ok) {
            return { error: "API limit reached or service unavailable." };
        }

        return res.json();
    } catch (error) {
        return { error: "Network error. Please try again later." };
}
}
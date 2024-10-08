const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/hoots`;

async function index() {
    try {
        const res = await fetch(BASE_URL, {
            // this is how we send the token to the server when we make the http request
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

async function show(hootId) {
    try {
        const res = await fetch(`${BASE_URL}/${hootId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        const data = await res.json();

        return data;

    } catch (error) {
        console.log(error)
    }
}

export { index, show };
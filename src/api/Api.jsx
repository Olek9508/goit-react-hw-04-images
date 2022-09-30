const KEY_API = "29244012-a3c66d184bfa690c232ef78cc";
const BASE_URL = "https://pixabay.com/api/?";

export const fetchItems = (searchQuery, page ) => {
    const urlFetch = `${BASE_URL}q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`;
    return fetch(urlFetch).then(res=>res.json())
}
export async function fetchPosts(searchText: string, pageNo: number) {

    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchText}&page=${pageNo}`);

    const result = await response.json();

    return result;
};

// Write a function to fetcha specific post
export async function fetchPostDetails(id: string) {
    const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);

    const result = await response.json();

    return result;
};
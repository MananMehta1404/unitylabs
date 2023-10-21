export async function fetchPosts(searchText: string) {

    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchText}`);

    const result = await response.json();

    return result;
};
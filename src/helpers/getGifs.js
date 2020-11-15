export const getGifs = async (category) => {
    const URI = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=lBxvWN34x8EVFO0g6fi2KRrFA2GMqGKs`;
    const resp = await fetch(URI);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        };
    });

    return gifs;
    // console.log(data);
};
export const getOne = async (url) => {
    return await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}


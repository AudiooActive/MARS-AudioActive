

const BASE_URL = 'https://audioactive.ir/product/api/v1'

const getProducts = async () => {

    const response = await fetch('https://audioactive.ir/product/api/v1/products/' )
    const data = await response.json()
    return await data
}

export { getProducts }
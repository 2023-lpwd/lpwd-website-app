import WooApi from "@/server/services/wc"

/**
 * Get a list of products
 */
export const find = async () => {
    const { data: products } = await WooApi.get('products')
    return products
}

/**
 * Get one product based on its slug
 * @param slug
 */
export const findOne = async (slug: String) => {
    const { data: [product] } = await WooApi.get('products', { slug })
    return product
}

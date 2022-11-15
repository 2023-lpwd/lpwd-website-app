import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooApi = new WooCommerceRestApi.default({
    url: process.env.WP_BASE_URL,
    consumerKey: process.env.WC_KEY,
    consumerSecret: process.env.WC_SECRET,
    version: "wc/v3"
})

export default WooApi

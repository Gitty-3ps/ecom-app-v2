import stripe from "stripe"

export default async function ProductsPage({params}: {params:}) {
    const product = stripe.products.retrieve(paramid, {
        expand: ["default_price"],
    });
    return <ProductDetail />
}
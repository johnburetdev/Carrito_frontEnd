export const getStrapiURL = (path = "") =>{
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || "https://strapi-webservice-jktu.onrender.com"}${path}`
}
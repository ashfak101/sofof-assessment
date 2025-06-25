import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
    index("routes/home.tsx"),
    route("products", "routes/products.tsx"),
    route("products/:productId", "routes/product-detail.tsx"),
    route("user-info", "routes/user-info.tsx")
] satisfies RouteConfig

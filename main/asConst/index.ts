const routes = {
    home: "/",
    admin: "/admin",
    profile: "/profile"
} as const

// Definição do tipo 'Route' baseado nos valores de 'routes'
// typeof routes: Retorna o tipo do objeto routes, que é { home: "/", admin: "/admin", profile: "/profile" }.
// keyof: É um operador TypeScript que, quando aplicado a um tipo, retorna uma união de todas as chaves desse tipo como literais de string ou número.
type Route = (typeof routes)[keyof typeof routes]

// Dessa maneira não é escalavel, pois toda nova rota terá de ser mapeada na funcao
// const getRoute = (route: "/" | "/admin" | "/profile") => {}
const getRoute = (route: Route) => {}


getRoute(routes.admin)
getRoute("/admin") //intelisense
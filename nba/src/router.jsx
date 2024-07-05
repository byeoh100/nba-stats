import { createBrowserRouter } from "react-router-dom"
import StatsFetch from "./pages/StatsFetch/StatsFetch"
import Error from "./pages/ErrorPage/Error"
import App from "./App"
import StatsCompare from "./pages/StatsCompare/StatsCompare"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <StatsFetch />
            },
            {
                path: "compare-stats",
                element: <StatsCompare />
            }
        ],
        errorElement: <Error />
    }
])

export default router
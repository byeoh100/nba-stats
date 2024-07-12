import { createBrowserRouter } from "react-router-dom"
import StatsFetch from "./pages/StatsFetch/StatsFetch"
import Error from "./pages/ErrorPage/Error"
import App from "./App"
import StatsCompare from "./pages/StatsCompare/StatsCompare"
import Homepage from "./Homepage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "/compare-stats",
                element: <StatsCompare />
            },
            {
                path: "/get-stats",
                element: <StatsFetch />
            }
        ],
        errorElement: <Error />
    }
])

export default router
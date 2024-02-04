import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import articleRouter from "./articleRouter";

const Loading = <div>Loading...</div>
const Main = lazy(() => import ('../pages/MainPage'))
const ArticleIndex = lazy(() => import('../pages/article/IndexPage'))



const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path:'article',
        element: <Suspense fallback={Loading}><ArticleIndex/></Suspense>,
        children: articleRouter()
    }

])

export default root
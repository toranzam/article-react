import {lazy, Suspense} from "react";
import ArticleDetailPage from "../pages/article/ArticleDetailPage";

const Loading = <div>Loading...</div>
const List = lazy(() => import('../pages/article/ArticleListPage') )
const Detail = lazy(() => import('../pages/article/ArticleDetailPage'))


const articleRouter = () => {

    return [
        {
            path: '',
            element: <Suspense fallback={Loading}><List/></Suspense>
        }
        ,
        {
            path: ':id',
            element: <Suspense fallback={Loading}><Detail/></Suspense>
        }
    ]
}

export default articleRouter
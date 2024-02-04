import {lazy, Suspense} from "react";
import ArticleDetailPage from "../pages/article/ArticleDetailPage";

const Loading =
    <div className={'container d-flex justify-content-center pt-5'}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
const List = lazy(() => import('../pages/article/ArticleListPage'))
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
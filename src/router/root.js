import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import articleRouter from "./articleRouter";
import bookRouter from "./bookRouter";
import bookReportRouter from "./bookReportRouter";

const Loading =
    <div className={'container d-flex justify-content-center pt-5'}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
const Main = lazy(() => import ('../pages/MainPage'))
const ArticleIndex = lazy(() => import('../pages/article/IndexPage'))
const BookIndex = lazy(() => import('../pages/book/IndexPage'))
const BookReportIndex = lazy(() => import('../pages/bookReport/IndexPage'))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: 'article',
        element: <Suspense fallback={Loading}><ArticleIndex/></Suspense>,
        children: articleRouter()
    },
    {
        path: 'book',
        element: <Suspense fallback={Loading}><BookIndex/></Suspense>,
        children: bookRouter()
    },
    {
        path: 'bookReport',
        element: <Suspense fallback={Loading}><BookReportIndex/></Suspense>,
        children: bookReportRouter()
    }

])

export default root
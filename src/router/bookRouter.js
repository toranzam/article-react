import {lazy, Suspense} from "react";


const Loading =
    <div className={'container d-flex justify-content-center pt-5'}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>

const Search = lazy(() => import('../pages/book/BookSearchPage'))
const CreateBookReport = lazy( () => import('../pages/book/CreateBookReportPage'))

const bookRouter = () => {

    return [
        {
            path: '',
            element: <Suspense fallback={Loading}><Search/></Suspense>
        },
        {
            path: 'new/:isbn',
            element: <Suspense fallback={Loading}><CreateBookReport/></Suspense>
        },

    ]


}

export default bookRouter
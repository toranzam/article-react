import {lazy, Suspense} from "react";


const Loading =
    <div className={'container d-flex justify-content-center pt-5'}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>


const List = lazy(() => import('../pages/bookReport/BookReportListPage'))
const CreateBookReport = lazy( () => import('../pages/bookReport/CreateBookReportPage'))

const bookReportRouter = () => {

    return [
        {
            path: '',
            element: <Suspense fallback={Loading}><List/></Suspense>
        },
        {
            path: 'new/:isbn',
            element: <Suspense fallback={Loading}><CreateBookReport/></Suspense>
        },
    ]
}

export default bookReportRouter
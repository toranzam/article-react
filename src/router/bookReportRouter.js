import {lazy, Suspense} from "react";


const Loading =
    <div className={'container d-flex justify-content-center pt-5'}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>


const List = lazy(() => import('../pages/bookReport/BookReportListPage'))

const bookReportRouter = () => {

    return [
        {
            path: '',
            element: <Suspense fallback={Loading}><List/></Suspense>
        }
    ]
}

export default bookReportRouter
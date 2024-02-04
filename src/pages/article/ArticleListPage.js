import React from 'react';

function ArticleListPage(props) {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th className={'col-1'}>id</th>
                <th className={'col-7'}>제목</th>
                <th className={'col-2'}>작성자</th>
                <th className={'col-2'}>작성일</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th className={'col-1'}>1</th>
                <td className={'col-7'}>Mark</td>
                <td className={'col-2'}>Otto</td>
                <td className={'col-2'}>@mdo</td>
            </tr>

            </tbody>
        </table>
    );
}

export default ArticleListPage;
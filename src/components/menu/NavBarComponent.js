import React from 'react';
import {Link} from "react-router-dom";

function NavBarComponent({active}) {

    console.log(active)



    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'../'} className="navbar-brand" href="#">ArticleApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/article'}
                                  className={`nav-link ${active === 1 ? "active" : null}`}>자유게시판</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/book'} className={`nav-link ${active === 2 ? "active" : null}`}>책검색</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/bookReport'} className={`nav-link ${active === 3 ? "active" : null}`}>독후감</Link>
                        </li>


                    </ul>
                    <ul className={'navbar-nav'}>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                회원정보
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent;
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../page/Home'
import Question from '../../page/Question'
import Result from '../../page/Result'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='home' element={<Home/>}></Route>
                    <Route path='question' element={<Question/>}></Route>
                    <Route path='/result' element={<Result/>}></Route>
                    <Route path='/' element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function HomeLayout() {
    return (
        <div>

            <main className='container'>
                <Header />
                <Outlet />
                <Footer />
            </main>

        </div>
    )
}

export default HomeLayout

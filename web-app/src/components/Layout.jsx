import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex min-h-screen w-full bg-background-soft text-text-main">
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col">
                <main className="p-8 pb-12 fade-up">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;

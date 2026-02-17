import React from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import StatsBar from '../components/admin/StatsBar';
import NetworkMap from '../components/admin/NetworkMap';
import AlertsPane from '../components/admin/AlertsPane';

const AISuspiciousActivity = () => {
    return (
        <div className="flex flex-col h-full w-full animate-in fade-in slide-in-from-bottom-4 duration-700 -m-8">
            <AdminHeader />
            <div className="flex-1 flex flex-col p-8 md:p-10 max-w-[1600px] w-full mx-auto">
                <div className="mb-4">
                    <StatsBar />
                </div>
                <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden">
                    <div className="flex-[2] h-full shadow-medical rounded-[20px] overflow-hidden">
                        <NetworkMap />
                    </div>
                    <div className="lg:w-[400px] flex flex-col h-full">
                        <AlertsPane />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AISuspiciousActivity;

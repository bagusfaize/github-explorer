import React from 'react'

export default function RepoSkeleton() {
    return (
        <div className="bg-white p-4 shadow-sm rounded-md w-full col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-5 py-1">
                    <div className="flex items-center space-x-3">
                        <div className="rounded-full bg-slate-200 h-5 w-5"></div>
                        <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-24">
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

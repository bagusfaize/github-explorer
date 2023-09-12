import React from 'react'

export default function ProfileSkeleton() {
    return (
        <div className="bg-white p-5 shadow-sm rounded-md w-full col-span-1">
            <div className="animate-pulse grid grid-cols-2">
                <div className="col-span-1 flex space-x-4">
                    <div className="rounded-md bg-slate-200 h-11 w-11"></div>
                    <div className="flex-1 space-y-5 py-1">
                        <div className="h-2 bg-slate-200 rounded w-20"></div>
                        <div className="space-y-3">
                            <div className="h-2 bg-slate-200 rounded w-28 "></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex justify-end">
                    <div className="rounded-md bg-slate-200 h-10 w-12 sm:w-28 py-2 px-4"></div>
                </div>
            </div>
        </div>
    )
}

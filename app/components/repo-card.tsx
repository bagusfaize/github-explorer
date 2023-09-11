import Link from 'next/link'
import React from 'react'
import { BiSolidBookBookmark, BiSolidStar } from 'react-icons/bi'
import { RepoCardProps } from '../types/types'

export default function RepoCard({
    name,
    html_url,
    description,
    stargazers_count
}: RepoCardProps) {
    return (
        <div className="bg-white p-4 flex flex-col rounded-md shadow-sm col-span-6 md:col-span-3 lg:col-span-2">
            <div className="flex items-center mb-2">
                <span className="mr-1"><BiSolidBookBookmark /></span>
                <span className="text-sm break-all font-medium">{name}</span>
            </div>
            <div className="text-xs text-gray-500 mb-2 capitalize" >{description || 'description not available'}</div>
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center justify-center">
                    <span className="mr-1"><BiSolidStar /></span>
                    <span className="text-sm">{stargazers_count}</span>
                </div>
                <div>
                    <Link
                        href={html_url}
                        target="_blank"
                        className="py-1 px-4 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-black text-white text-xs"
                    >
                        Visit
                    </Link>
                </div>
            </div>
        </div>
    )
}
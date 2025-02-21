import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> job?._id && navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className="font-medium text-lg">{job?.company || "Company Name"}</h1>
                <p className="text-sm text-gray-500">{job?.location || "Location"}</p>
            </div>
            <div>
            <div>
            </div>
                <h1 className="font-bold text-lg my-2">{job?.title || "Job Title"}</h1>
                <p className="text-sm text-gray-600">{job?.description || "Job description not available."}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.positions ? `${job.positions} Positions` : "N/A Positions"}</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.type || "Job Type"} </Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost"> {job?.salary ? `${job.salary} LPA` : "Salary not disclosed"}</Badge>
            </div>

    </div>
    )
}

export default LatestJobCards
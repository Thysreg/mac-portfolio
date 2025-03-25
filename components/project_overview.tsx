import React from 'react'

interface ProjectColumns {
    role1?: string;
    role2?: string;
    role3?: string;
    role4?: string;
    deliverable1?: string;
    deliverable2?: string;
    deliverable3?: string;
    deliverable4?: string;
    team1?: string;
    team2?: string;
    team3?: string;
    team4?: string;
    tool1?: string;
    tool2?: string;
    tool3?: string;
    tool4?: string;
  }

function ProjectOverview({role1, role2, role3, role4, deliverable1, deliverable2, deliverable3, deliverable4, tool1, tool2, tool3, tool4 }:ProjectColumns) {
  return (
    <div className='flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 text-nowrap'>
        <div className='flex flex-col space-y-2 md:space-y-4'>
            <h3 className='text-xl'>
                <b>ROLE</b>
            </h3>
            <div className='space-y-1 text-gray-600 dark:text-gray-300'>
                <p>{role1}</p>
                <p>{role2}</p>
                <p>{role3}</p>
                <p>{role4}</p>
            </div>
            
        </div>
        <div className='flex flex-col space-y-2 md:space-y-4'>
            <h3 className='text-xl'>
                <b>DELIVERABLES</b>
            </h3>
            <div className='space-y-1 text-gray-600 dark:text-gray-300'>
            <p>{deliverable1}</p>
            <p>{deliverable2}</p>
            <p>{deliverable3}</p>
            <p>{deliverable4}</p>
            </div>           
        </div>

        {/* <div className='flex flex-col space-y-2 md:space-y-4'>
            <h3 className='text-xl'>
                <b>TEAM</b>
            </h3>
            <div className='space-y-1 text-gray-600 dark:text-gray-300'>
            <p>{team1}</p>
            <p>{team2}</p>
            <p>{team3}</p>
            <p>{team4}</p>
            </div>
        </div> */}

        <div className='flex flex-col space-y-2 md:space-y-4'>
            <h3 className='text-xl'>
                <b>TOOLS</b>
            </h3>
            <div className='space-y-1 text-gray-600 dark:text-gray-300'>
            <p>{tool1}</p>
            <p>{tool2}</p>
            <p>{tool3}</p>
            <p>{tool4}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectOverview
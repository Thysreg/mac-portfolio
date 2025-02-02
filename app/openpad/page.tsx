import Nav from '@/components/nav';
import ProjectHeader from '@/components/project_header';
import ProjectImage from '@/components/project_image';
import ProjectOverview from '@/components/project_overview';
import SideNav from '@/components/side_nav';
import React from 'react'

function OpenPad() {

  const sections = [ "About", "Research", "Design Process", "Reflection"];
  
  return (
    <div>
        <header>
            <Nav sections={sections}/>
        </header>
      <div className="h-screen grid grid-rows-[auto_1fr]">
    <main className="grid grid-cols-4 md:grid-cols-12 gap-x-2 md:gap-x-4 h-screen px-4 md:px-12">
      <SideNav 
        sections = {sections}/>

        {/*  Empty Columns */}
      <div className="hidden md:block col-span-2"></div>

      {/*  Main Scrolling Content */}
      <div className="col-span-4 md:col-span-7">
        <div className="space-y-24 pt-16 pb-24">
          <h1>OpenPad</h1>
          <ProjectHeader 
            src='/bp-portada.jpg'
            alt='terminal seen through airplane window'/>
           <ProjectOverview
            role1='User Researcher'
            role2='UX Designer'
            role3='UI Designer'
            deliverable1='Design System'
            deliverable2='Webapp Redesign'
            tool1='Figma'
            tool2='Figjam'
            tool3='Illustrator'
            />
          {/* About */}
          <section id="About" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    About the project
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Background
                </h3>
                <div className='projectSectionRight'>
                <p>
                The airline retailing industry has long relied on the outdated Global Distribution System (GDS), which demands extensive technical knowledge from travel agents due to its terminal-like interface that requires manually inputting commands.
                </p>
                <p>
                OpenPad adopts the New Distribution Capability (NDC) to modernize airline retailing. This transformation enables greater product differentiation, faster time-to-market, improved personalization and enhanced flexibility for both agents and customers, making airline booking processes more efficient and user-friendly.
                </p>
                </div>
                </div>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    The Problem
                </h3>
                <div className='projectSectionRight'>
                <p>
                Travel agents face significant challenges when managing bookings due to an overwhelming amount of information and unclear workflows. The primary pain points identified include:
                </p>
                <ul className='list-disc list-inside'>
                    <li><b>Unclear Steps:</b> Agents often struggle to determine when and where specific actions are required.</li>
                    <li><b>Vague Error Messages:</b> Errors lack clear guidance, causing frustration and delays.</li>
                    <li><b>Poor Information Visibility:</b> Critical details are difficult to locate quickly.</li>
                    <li><b>Excessive Scrolling:</b> Navigating long pages disrupts workflow and efficiency.</li>
                </ul>
                </div>
                </div>
                
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    The Solution
                </h3>
                <div className='projectSectionRight'>
                <p>
                Focused on optimizing the workflow for travel agents by:
                </p>
                <ul className='list-disc list-inside'>
                  <li><b>Streamlined Information Structure:</b> Information was rearranged to provide a clearer and more intuitive flow without requiring users to relearn the platform.</li>
                  <li><b>Consistent UI Patterns:</b> Efforts were made to establish visual and functional consistency across the entire web application to improve usability and reduce user errors.</li>
                  <li><b>Enhanced Error Messaging:</b> Clearer, actionable error messages were implemented to guide agents seamlessly through booking tasks.</li>
                </ul>
                </div>
                
                </div>
            </section>

            {/* Research */}
            <section id="Research" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    Research
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    User Insights
                </h3>
                <div className='projectSectionRight'>
                <p>
                After conducting several user interviews and onboarding sessions with both experienced and novice agents, key insights emerged.
                </p>
                <ul className='list-disc list-inside'>
                  <li><b>Resistant to change:</b> Veteran agents accustomed to GDS systems are often reluctant to adopt new platforms.</li>
                  <li><b>Performance over aesthetics:</b> Speed and functionality in booking are prioritized above design or interface style.</li>
                  <li><b>Efficiency-focused:</b> Agents consistently seek automation solutions to reduce repetitive tasks and improve workflow efficiency.</li>
                </ul>
                </div>
                
                </div>
                
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Competitive Analysis
                    </h3>
                    <div className='projectSectionRight'>
                        <h4>
                            Direct Competitors
                        </h4>
                        <p>
                        Aaron Group leads globally in adopting NDC-based solutions, their Symphony platform offers a range of products which provides access to flight content from more than 580 airlines, encompassing NDC, GDS and low-cost carriers, while Aeronology focuses on the Asia-Pacific region with advanced tools emphasizes automation and efficiency, allowing users to book, change, reshop, reissue, cancel and refund on a single screen.
                        </p>
                        <h4>
                            Indirect Competitors
                        </h4>
                        <p>
                        Amadeus and Sabre continue to dominate the market with their traditional GDS systems, which remain widely adopted by airlines despite their complexity.
                        </p>
                    </div>
                </div>
                
                
                <ProjectImage
                className=' relative aspect-[1440/795] border-white border-8 rounded-md bg-white'
                src='/aarongroup.png'
                alt='Competitor Aaorongroup screen'
                />

            </section>

            {/* Design process */}
            <section id="Design Process" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    Design Process
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    
                </h3>
                <p className='projectSectionRight'>
                The design process focused on enhancing usability and maintaining consistency across the platform while introducing a refined, modern visual style. Building upon the existing version, the objective was to streamline workflows for travel agents, simplify information displays and accommodate variations in airline data.
                </p>
                </div>

                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Challenge
                </h3>
                <p className='projectSectionRight'>
                Given that airlines provide information in different formats and follow varying standards, one of the primary challenges was designing a system that could handle unpredictable data, such as ensuring that UI elements gracefully adapt to long or complex text entries or displaying itineraries uniformly despite discrepancies in data completeness from different airlines.                </p>
                </div>

                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Shop
                </h3>
                <div className='projectSectionRight'>
                    <p >
                    The improvements focused on simplifying travel agents&apos; workflows while maintaining the core structure:
                    </p>
                    <ul className='list-disc list-inside'>
                        <li><b>Round Trip Combination:</b> Merged round trips into a single line to eliminate redundant information.</li>
                        <li><b>Enhanced Filters:</b> Redesigned filter spaces and added new ones, including the option to select providers before searching.</li>
                        <li><b>Simplified Overview Table:</b> Removed unused options and provided the possibility to hide the overview table for a cleaner interface.</li>
                        <li><b>Error Messaging:</b> Added visible error messages for cases where airlines encounter issues returning results.</li>
                        <li><b>Itinerary Updates:</b> Introduced expandable itinerary views, allowing agents to see additional details without hovering over icons.</li>
                    </ul>
                </div>
                
                </div>
                
                <ProjectImage
                className="relative aspect-[1223/865]"
                src='/op-old-shop.jpg'
                alt='openpad old shop interface'
                />
                <ProjectImage
                className="relative aspect-[1223/865]"
                src='/op-shop.gif'
                alt='openpad new shop interface'
                />
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Booking Details
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                        Significant improvements were made to enhance clarity and navigation during the booking process:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li><b>Persistent Step Navigation:</b> Booking steps are now displayed at the bottom of the screen, allowing agents to move back and forth without scrolling.</li>
                            <li><b>Collapsible Information Sections:</b> Elements such as &quot;Itinerary Details&quot; and &quot;Fare Rules&quot; can now be minimized, benefiting agents familiar with certain airlines or cabins.</li>
                            <li><b>Full-Width Itinerary Display:</b> Improved itinerary layout to better showcase all flight information.</li>
                            <li><b>Passenger Information Input:</b> Sections are clearly defined, highlighting mandatory fields based on airline requirements.</li>
                            <li><b>Enhanced Remarks:</b> Updated remarks to more accurately reflect information sent to the back-office.</li>
                            <li><b>Payment Overview:</b> Improved representation of booking details, including added services, to ensure agents have a comprehensive understanding before finalizing payment.</li>
                        </ul>
                    </div>
                </div>
                
                <ProjectImage
                className="relative aspect-[1180/864]"
                src='/op-offer.gif'
                alt='OpenPad offer flow'
                />

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Orders List & Details
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                        Updates focused on providing travel agents with better tools for managing orders:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li><b>Passenger Names in Orders List:</b> Added passenger names to help agents quickly locate specific orders.</li>
                            <li><b>Consistent Booking Details:</b> Updated the order details page to align with booking updates, including expandable sections and compacted passenger information.</li>
                            <li><b>Flexible Seat Selection:</b> Introduced color-coded seats based on price, helping agents quickly find suitable options for customers.</li>
                        </ul>
                    </div>
                </div>
                
                <ProjectImage
                className="relative aspect-[1428/4096]"
                src='/op-old-order.jpg'
                alt='OpenPad old order view'
                />
                <ProjectImage
                className="relative aspect-[1180/864]"
                src='/op-order.gif'
                alt='OpenPad order view'
                />
                
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Rebook
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                        The rebooking process was reimagined to provide a more intuitive experience:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li><b>Segment Clarity:</b> Improved display of segments being changed to reduce confusion.</li>
                            <li><b>Unified Selection Process:</b> The rebooking flow now mirrors the shopping and booking process, creating a consistent and familiar experience for agents when selecting and paying for new segments.</li>
                        </ul>
                    </div>
                </div>

                <ProjectImage
                className="relative aspect-[1180/864]"
                src='/bp-rebook.gif'
                alt='OpenPad rebook process'
                />
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                       
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                        Further improvements were made to features such as the presets functionality, settings panel, corporate section, login flow, profile management and the onboarding experience. However, the primary focus of this case study remains on the areas most frequently used by travel agents, as these have the greatest impact on their day-to-day tasks.
                        </p>
                    </div>
                </div>
                
            </section>


            {/* Reflection */}
            <section id="Reflection" className="space-y-8 py-24 md:pt-60">
                <h2>
                    Reflection
                </h2>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    Final Results
                    </h3>
                    <div className='projectSectionRight'>
                        <ul className='list-disc list-inside'>
                            <li><b>Increased Efficiency:</b> Travel agents reported a significant reduction in booking time due to streamlined workflows, improved navigation and better information hierarchy.</li>
                            <li><b>Enhanced Usability:</b> User feedback highlighted higher satisfaction with the new design, especially in the updated itinerary and booking details views</li>
                            <li><b>Error Reduction:</b> Clearer error messages and structured forms led to fewer booking mistakes and faster troubleshooting.</li>
                            <li><b>Consistency Across the Platform:</b> The design overhaul provided a cohesive user experience, reducing the learning curve for new agents and making routine tasks more intuitive.</li>
                            <li><b>Positive User Adoption:</b> Despite initial resistance from veteran agents accustomed to the GDS system, the new interface was well-received after onboarding and demonstrated better adoption rates over time.</li>
                        </ul>
                        <p>
                        These outcomes demonstrated the effectiveness of the redesign in meeting the project’s primary goals: improving usability, enhancing consistency and empowering travel agents to work more efficiently. After the redesign was moved to the live environment, support tickets related to booking errors and navigation issues decreased significantly and agents reported greater confidence in managing complex bookings independently.
                        </p>
                    </div>
                    
                </div>         
            </section>
        </div>
      </div>

    </main>
    </div>
    </div>
  )
}

export default OpenPad
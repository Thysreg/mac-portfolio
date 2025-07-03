import Nav from '@/components/nav';
import ProjectHeader from '@/components/project_header';
import ProjectImage from '@/components/project_image';
import ImageSlider from '@/components/project_image_compare';
import ProjectOverview from '@/components/project_overview';
import SideNav from '@/components/side_nav';
import React from 'react'

function OpenPad() {

  const sections = [ "About", "Research", "Design Process", "Outcomes","Reflection"];
  
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
                            Before diving into solutions, I spent time understanding the world of travel agents and it quickly became clear that the existing airline booking tools, based on the Global Distribution System (GDS), hadn’t evolved much since the 1980s. The system relied heavily on text-based commands and agents had to memorize workflows and codes just to complete basic bookings.
                        </p>
                        <p>
                            OpenPad was introduced as a step forward: a web-based platform that embraced the New Distribution Capability (NDC) to bring airline retailing into the modern era. But while the underlying tech had improved, the experience still lagged behind. Agents were frustrated, overwhelmed and often unsure of what to do next.
                        </p>
                    </div>
                </div>
                <ProjectImage
                className="relative aspect-[1223/865]"
                src='/op-shop.gif'
                alt='openpad new shop interface'
                label='Open Pad Redesign'
                />
            </section>

            {/* Research */}
            <section id="Research" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    Discovery & Research
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    User Insights
                </h3>
                <div className='projectSectionRight'>
                    <p>
                    To truly understand agent pain points, I conducted onboarding sessions and interviews with both experienced and newer users. Many veterans were skeptical of the switch, they were fast with GDS and viewed anything unfamiliar as slower by default.</p>
                    <p>Still, across the board, their frustrations were consistent:</p>
                    <ul className='list-disc list-inside'>
                        <li>Steps in the booking process weren’t clearly defined, making it hard to know what action was needed and when.</li>
                        <li>Important information was hidden behind layers or scattered across long pages.</li>
                        <li>Agents spent far too much time scrolling and scanning rather than serving clients.</li>
                    </ul>
                    <p>One key takeaway: performance and clarity mattered more than aesthetics. Agents didn’t want something “beautiful”, they wanted something reliable, fast and understandable.</p>
                </div>
                
                </div>
                
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Competitive Analysis
                    </h3>
                    <div className='projectSectionRight'>
                        <p>In parallel, I analyzed direct competitors like Aaron Group and Aeronology, who had adopted NDC early. While they offered richer features, they also revealed complexity pitfalls to avoid. I also looked at GDS giants like Amadeus and Sabre, which continued to dominate but offered very little user-centric innovation. </p>
                    </div>
                </div>
                
                
                <ProjectImage
                className=' relative aspect-[1440/795] border-white border-8 rounded-md bg-white'
                src='/aarongroup.png'
                alt='Competitor Aaorongroup screen'
                label='Direct competitor: Aaron Group'
                />

            </section>

            {/* Design process */}
            <section id="Design Process" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    Design Goals
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    
                </h3>
                <div className='projectSectionRight'>
                    <p>The design process focused on enhancing usability and maintaining consistency across the platform while introducing a refined, modern visual style. Building upon the existing version, the objective was to streamline workflows for travel agents, simplify information displays and accommodate variations in airline data.</p>
                    <ul className='list-disc list-inside'>
                        <li>Clarify the flow without requiring users to relearn everything.</li>
                        <li>Create consistency in UI behavior and layout across all modules.</li>
                        <li>Improve communication, especially around errors and task feedback.</li>
                    </ul>
                </div>
                </div>

                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Challenge
                </h3>
                <p className='projectSectionRight'>
                Every airline formatted their data differently, long names, incomplete info, or pricing discrepancies made UI consistency a real challenge. I needed a layout system that could flex, adapt and still look predictable, no matter the input. Every component was designed to gracefully degrade and accommodate missing or messy data.</p>
                </div>

                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Shop
                </h3>
                <div className='projectSectionRight'>
                    <p >
                    I started with the most-used screen: the shopping interface.
                    </p>
                    <p>The core workflow remained, but every section was redesigned for clarity and flow. Round trips were combined into a single line to reduce visual clutter. Filters were simplified and reorganized, with new options like “select provider before searching.” I removed unused options and introduced a collapsible overview table to declutter the screen even more. Error messaging was also made explicit, no more wondering why results weren’t loading. And finally, I added expandable itinerary previews that allowed agents to see more detail at a glance, without relying on icon tooltips.</p>
                    <p><i>Result: Faster searches, cleaner screens and clearer feedback.</i></p>
                </div>
                
                </div>

                <ImageSlider
                    before="/op-old-shop.jpg"
                    after="/op-shop.jpg"
                    beforeAlt="Original website design from 2022"
                    afterAlt="Redesigned website from 2024"
                    beforeLabel="Shop Original"
                    afterLabel="Shop Redesign"
                    width={1223}
                    height={865}
                />
                
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Booking Details
                    </h3>
                    <div className='projectSectionRight'>
                        <p>Here, I focused on keeping agents oriented during a multi-step process.</p>
                        <p>The biggest shift was introducing persistent step navigation at the bottom of the screen, allowing agents to jump between booking stages without scrolling endlessly. Information blocks like “Fare Rules” or “Itinerary Details” were made collapsible, saving time for agents who already knew their way around. Itinerary layout was improved for full-width clarity and form fields were grouped and prioritized based on airline logic. Finally, the payment summary was redesigned to reflect all booking details clearly, from added services to seat selections.</p>
                        <p><i>Result: Less scrolling, fewer mistakes and higher confidence before purchase.</i></p>
                    </div>
                </div>
                
                <ProjectImage
                className="relative aspect-[1180/864]"
                src='/op-offer.gif'
                alt='OpenPad offer flow'
                label='Booking process'
                />

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Orders Managment
                    </h3>
                    <div className='projectSectionRight'>
                        <p>Post-booking workflows also saw major improvements.</p>
                        <p>I added passenger names to the orders list to make searching easier and made the booking details page match the logic and UI of the new booking process. Passenger info could now be expanded or collapsed and seat selection was color-coded by price. These small touches helped agents work more quickly, even under pressure.</p>
                        <p><i>Result: Better order lookup and visual consistency across modules.</i></p>
                    </div>
                </div>

                <ImageSlider
                    before="/op-old-order.jpg"
                    after="/op-order.jpg"
                    beforeAlt="OpenPad old order view"
                    afterAlt="OpenPad order view'"
                    beforeLabel="Original"
                    afterLabel="Redesign"
                    width={1180}
                    height={864}
                />
        
                <ProjectImage
                className="relative aspect-[1180/864]"
                src='/op-order.gif'
                alt='OpenPad order view'
                label='Order details'
                />
                
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Rebooking
                    </h3>
                    <div className='projectSectionRight'>
                        <p>This was one of the trickiest areas, agents needed to cancel and rebook segments while keeping track of old vs. new selections.</p>
                        <p>The rebooking flow was redesigned to mirror the shopping and booking process, so the experience felt familiar. Segments being changed were highlighted clearly and the overall navigation was simplified to reduce confusion.</p>
                        <p><i>Result: Rebookings that feel just as clear as new bookings.</i></p>
                    </div>
                </div>

                <ProjectImage
                className="relative aspect-[1180/864]"
                src='/bp-rebook.gif'
                alt='OpenPad rebook process'
                label='Rebooking process'
                />
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                       Beyond the Core
                    </h3>
                    <div className='projectSectionRight'>
                        <p>While most of the design effort went into shopping, booking and order flows, I also made improvements to areas like presets, settings, corporate sections, login, profiles and onboarding. These supported the overall experience and helped ensure the platform felt consistent no matter where agents were working.</p>
                    </div>
                </div>
                
            </section>

            {/* Outcome */}
            <section id="Outcomes" className="space-y-8 py-24 md:pt-60">
                <h2>
                    Impact & Outcomes
                </h2>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Highlights
                    </h3>
                    <div className='projectSectionRight'>
                        <ul className='list-disc list-inside'>
                            <li><b>Booking time reduced</b> due to simplified navigation and less cognitive load.</li>
                            <li><b>Higher satisfaction</b>, especially with the updated itinerary and booking views.</li>
                            <li><b>Fewer errors</b>, thanks to clearer form guidance and error messaging.</li>
                            <li><b>Faster onboarding</b> for new agents, with better visual hierarchy and consistency.</li>
                            <li><b>Better adoption</b> among veteran agents who had initially been reluctant to switch.</li>
                        </ul>
                    </div>
                </div>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    
                    </h3>
                    <div className='projectSectionRight'>
                        <p>Once the redesign was rolled out, support tickets dropped significantly, especially around booking issues and agent confusion. Agents reported higher confidence in managing bookings on their own and usability testing showed a notable drop in time-to-completion for common tasks.</p>
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
                    
                    </h3>
                    <div className='projectSectionRight'>
                        <p>This project reminded me that great design often happens quietly, not with flashy animations or radical redesigns, but by making workflows feel natural and dependable. I’m proud that this work helped agents do their jobs more efficiently, without forcing them to change the way they work.</p>
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
import Nav from '@/components/nav';
import Project4Image from '@/components/project_4_images';
import ProjectHeader from '@/components/project_header';
import ProjectImage from '@/components/project_image';
import ProjectOverview from '@/components/project_overview';
import SideNav from '@/components/side_nav';
import React from 'react'

function Vent() {

  const sections = [ "About", "Research", "Ideation & Development", "Development & Launch", "Future Opportunities" ];
  
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
          <h1>Ven-T</h1>
          <ProjectHeader 
            src='/ven-t-portada-1000.jpg'
            alt='something'/>
          <ProjectOverview
          role1='UX Designer'
          role2='Developer'
          role3='User Researcher'
          role4='UI Designer'
          deliverable1='Android & Apple App'
          deliverable2='Design System'
          deliverable3='High Fidelity Designs'
          tool1='Figma'
          tool2='Flutter'
          tool3='Photoshop'
          tool4='Illustrator'
          />

          {/* About */}
          <section id="About" className="space-y-16 pt-24 md:pt-60">
                <h2>
                    About the project
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    The Problem
                </h3>
                <div className='projectSectionRight'>
                <p>
                Tourists and vacationers in Asturias often struggle to discover local events near their location. Without a centralized source of reliable information, they rely on word-of-mouth, risking missed opportunities for events they might enjoy.
                </p>
                <p>
                Event planners also face challenges, lacking a modern and effective platform to promote their activities. Traditional methods, such as posters or outdated websites, limit their reach and create barriers for new or smaller-scale events.
                </p>
                </div>
                </div>

                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    The Solution
                </h3>
                <div className='projectSectionRight'>
                <p>
                Ven-T is an event-listing app designed to connect people with events around them while promoting tourism in rural Asturias. The app provides a user-friendly platform for tourists and locals to explore events and helps event planners reach a broader audience through modern features such as:
                </p>
                <ul className='list-disc list-inside'>
                  <li>A searchable map of event locations.</li>
                  <li>Options to save favorite events.</li>
                  <li>Reviews and information from past attendees.</li>
                </ul>
                <p>
                Ven-T aimed to fill the gap in the market by offering a seamless experience for both users and event organizers.
                </p>
                </div>
                
                </div>               

                <Project4Image 
                 src1='/vent-1.png'
                 alt1='ven-t explore events'
                 src2='/vent-2.png'
                 alt2='ven-t filter screens'
                 src3='/vent-3.png'
                 alt3='ven-t discover events mobile screens'
                 src4='/vent-4.png'
                 alt4='ven-t favorite events mobile screens'
                
                />
            </section>

            {/* Research */}
            <section id="Research" className="space-y-16 pt-24 md:pt-60">
                <h2>
                    Research
                </h2>
                <div className='projectSection '>
                <h3 className='projectSectionLeft'>
                    User Insights
                </h3>
                <div className='projectSectionRight'>
                <p>
                Through user interviews, several key patterns emerged:
                </p>
                <ul className='list-disc list-inside'>
                  <li>People often rely on acquaintances or local contacts to learn about traditional events.</li>
                  <li>Event information is rarely sought online due to unreliable or incomplete results.</li>
                  <li>Users expressed interest in discovering diverse events beyond traditional parties.</li>
                </ul>
                </div>
                
                </div>
                <div className='projectSection'>
                <h3 className='projectSectionLeft text-wrap'>
                    Competitive Analysis
                </h3>
                <p className='projectSectionRight'>
                While platforms like Fiestas de Asturias and Pella de Ocio share a similar focus, they lacked essential features like maps or event-saving options. Indirect competitors like Google or Eventbrite provide limited information or are tailored more toward ticketed events. This gap reinforced the need for a modern and localized solution.
                </p>
                </div>
                
            </section>

            {/* Ideation */}
            <section id="Ideation & Development" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    Ideation & Development
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Value Proposition
                </h3>
                <div className='projectSectionRight'>
                <p>
                Ven-T bridges the gap between tourists, locals and event planners by offering a centralized and reliable platform. Key features include:
                </p>
                <ul className='list-disc list-inside'>
                  <li>A map-based interface for exploring events.</li>
                  <li>Save-to-favorites functionality.</li>
                  <li>Easy filtering and recommendations based on user behavior.</li>
                </ul>
                </div>
                
                </div>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Design Process
                </h3>
                <div className='projectSectionRight'>
                <h4>
                  Feature Prioritization
                </h4>
                <p>
                Using a Feature Prioritization Matrix, essential functionalities were identified to ensure user needs were met without overcomplicating the initial development.
                </p>
                </div>
                </div>
                
                
                <ProjectImage
                className="relative aspect-[1920/1080] border-white border-8 rounded-md bg-white"
                src='/ven-t-feature-prioritazation-matrix-1080.jpg'
                alt='ven-t feature prioritazation matrix'
                />
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'></h3>
                  <div className='projectSectionRight'>
                  <h4>
                  Wireframe & Prototypes
                </h4>
                <p>
                Early sketches explored multiple layouts and filtering options. Iterative design sessions refined the app’s focus, ensuring a simple and intuitive user experience.
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                  <b>Initial Prototypes:</b> Early designs included unnecessary features, prioritizing aesthetics over functionality. Feedback and research highlighted the need to streamline the app.
                  </li>
                </ul>
                  
                  </div>
                
                </div>
                
                <ProjectImage
                className="relative aspect-[1920/1080]"
                src='/ven-t-sketches-old-1080.jpg'
                alt='ven-t sketches'
                />
                
                  <ProjectImage
                  className="relative aspect-[1080/610]"
                src='/ven-t-menus-1080.png'
                alt='ven-t old prototype screens'
                />
                <div className='projectSection'>
                  <div className='projectSectionLeft'>
                  </div>
                  <ul className='projectSectionRight list-disc list-inside'>
                    <li>
                      <b>High-Fidelity Designs:</b> User research informed the final designs, focusing on practical features like filtering, event details and location-based exploration.
                    </li>
                  </ul>
                </div>
                  
                <ProjectImage
                className="relative aspect-[1440/1080]"
                src='/ven-t-mockups-isometric.jpg'
                alt='ven-t old prototype screens'
                  />
            </section>

            {/* launch */}
            <section id="Development & Launch" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    Development & Launch
                </h2>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>
                    Beta Version
                  </h3>
                  <div className='projectSectionRight'>
                    <p>
                    Ven-T&apos;s development began with a focus on replicating the high-fidelity designs as closely as possible while ensuring performance and feasibility. Some design compromises were necessary to optimize speed and usability. <br />
                    </p>
                    <p>
                    The app was successfully developed and made available for download during its beta phase, providing initial users with a seamless way to discover events and gather valuable feedback. <br />

                    </p>
                    <p>                
                      <i>Note: Ven-T is no longer available for download, but it represents a completed development cycle with a functional product.</i>
                    </p>
                  </div>
                </div>
                
                
            </section>

            {/* future */}
            <section id="Future Opportunities" className="space-y-8 py-24 md:py-60">
                <h2>
                    Future Opportunities
                </h2>
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Next Steps
                </h3>
                <div className='projectSectionRight'>
                <ul className='list-disc list-inside'>
                <li>User behavior-based event recommendations. </li>
                  <li>Advanced filtering options.</li>
                  <li>Features like attendee counters and cluster markers for easier navigation.</li>
                  <li>Social media integration and personalized profiles.</li>
                  <li>Monetization through event promotions and business advertisements.</li>
                </ul>
                  

                <p>
                Ven-T set the foundation for a modern event-discovery experience and its thoughtful design and development serve as a strong example of problem-solving in app design.

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

export default Vent
import Nav from '@/components/nav';
import Project4Image from '@/components/project_4_images';
import ProjectHeader from '@/components/project_header';
import ProjectImage from '@/components/project_image';
import ProjectOverview from '@/components/project_overview';
import SideNav from '@/components/side_nav';
import React from 'react'

function Vent() {

  const sections = [ "About", "Research", "Ideation & Design", "Development & Launch", "Future Opportunities", "Reflections" ];
  
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
                <h2>About the project</h2>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>Background</h3>
                  <div className='projectSectionRight'>
                    <p>Asturias is rich in tradition, music and festivals, but if you don’t know someone local, chances are you’ll miss them. While exploring the area myself, I noticed how hard it was to find current events unless you relied on posters or heard about them through word of mouth.</p>
                    <p>At the same time, event organizers, especially those running smaller or newer gatherings, lacked the tools to promote their events effectively. Existing platforms were outdated, limited in functionality, or aimed more at ticketed, large-scale shows.</p>
                    <p>Ven-T emerged from a simple idea: create a centralized, intuitive platform where anyone could discover what was happening around them.</p>
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
                <h2>Research</h2>
                <div className='projectSection '>
                <h3 className='projectSectionLeft'>User Insights</h3>
                <div className='projectSectionRight'>
                  <p>To understand both sides of the problem, I interviewed potential users, tourists, locals and organizers. Across the board, the patterns were clear:</p>
                  <ul className='list-disc list-inside'>
                    <li>Most people learned about events through personal connections or luck.</li>
                    <li>Searching online wasn’t helpful, information was outdated or scattered.</li>
                    <li>Users wanted variety: not just big festivals, but cultural events, workshops and gatherings.</li>
                  </ul>
                </div>
                
                </div>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft text-wrap'>Competitive Analysis</h3>
                  <div className='projectSectionRight'>
                    <p>I also analyzed local competitors like Fiestas de Asturias and Pella de Ocio, as well as larger discovery platforms like Eventbrite or Google Maps. While the latter offered general event listings, none addressed the specific needs of rural tourism or community-based events in Asturias. Most lacked even basic features like maps, filters, or saved favorites.</p>
                    <p>This reinforced our opportunity: to create something local, modern and easy to use.</p>
                  </div>
                </div>
            </section>

            {/* Ideation */}
            <section id="Ideation & Design" className="space-y-8 pt-24 md:pt-60">
                <h2>Ideation & Design</h2>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>Value Proposition</h3>
                  <div className='projectSectionRight'>
                    <p>The core value of Ven-T was clarity and usefulness, for both tourists and event organizers. I focused on three key features:</p>
                    <ul className='list-disc list-inside'>
                      <li>A <b>map-based interface</b> to visualize events by proximity</li>
                      <li>A simple <b>save-to-favorites</b> system</li>
                      <li>Smart <b>filtering</b> that helped users find events based on time, location, or type</li>
                    </ul>
                  </div>
                
                </div>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>Prioritazion Features</h3>
                  <div className='projectSectionRight'>
                    <p>To keep the MVP realistic, I created a Feature Prioritization Matrix, balancing user needs with technical feasibility. Some initial ideas (like gamified event badges or calendar integrations) were intentionally deferred to keep the scope tight.</p>
                  </div>
                </div>
                
                
                <ProjectImage
                className="relative aspect-[1920/1080] border-white border-8 rounded-md bg-white"
                src='/ven-t-feature-prioritazation-matrix-1080.jpg'
                alt='ven-t feature prioritazation matrix'
                label='Feature Prioritization Matrix'
                />
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>Sketches to Prototypes</h3>
                  <div className='projectSectionRight'>
                    <p>Early sketches explored different layouts and flows, but the first prototypes leaned too much into style over usability. Through testing and feedback, I gradually stripped the UI back, keeping only what helped users navigate quickly and confidently.</p>
                  </div>
                </div>
                
                <ProjectImage
                className="relative aspect-[1920/1080]"
                src='/ven-t-sketches-old-1080.jpg'
                alt='ven-t sketches'
                label='Sketches'
                />
                
                  <ProjectImage
                  className="relative aspect-[1080/610]"
                src='/ven-t-menus-1080.png'
                alt='ven-t old prototype screens'
                label='Old prototype screens'
                />
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>High-Fidelity Design</h3>
                  <div className='projectSectionRight'>
                    <p>Once the structure was set, I built a clean, consistent design system using Figma, adaptable for both Android and iOS. I focused on visual clarity and real-world usability.</p>
                  </div>
                </div>
                  
                <ProjectImage
                className="relative aspect-[1440/1080]"
                src='/ven-t-mockups-isometric.jpg'
                alt='ven-t old prototype screens'
                label='High fidelity designs'
                  />
            </section>

            {/* launch */}
            <section id="Development & Launch" className="space-y-8 pt-24 md:pt-60">
                <h2>Development & Launch</h2>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>Beta Version</h3>
                  <div className='projectSectionRight'>
                    <p>Using Flutter, I developed the mobile app to match the designs as closely as possible, while optimizing for speed and simplicity. Some design adjustments were made during development to improve load times and offline performance.</p>
                    <p>A beta version of the app was released for Android and iOS and shared among early testers, who used it during the local spring festival season. Their feedback helped refine event listings, filters and interaction flows.</p>
                    <p><i>🛈 Note: Ven-T is no longer available for download, but the app completed its full design and development cycle with a working beta version available in both app stores.</i></p>
                  </div>
                </div>
                
                
            </section>

            {/* future */}
            <section id="Future Opportunities" className="space-y-8 py-24 md:py-60">
                <h2>Future Opportunities</h2>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'>Next Steps</h3>
                  <div className='projectSectionRight'>
                    <p>While the project paused post-launch, there’s still a roadmap for what could come next:</p>
                    <ul className='list-disc list-inside'>
                      <li>Smart event recommendations based on behavior and interest</li>
                      <li>More advanced filtering (e.g., for accessibility, group size, age suitability)</li>
                      <li>Attendee counters and cluster markers for busy event areas</li>
                      <li>Personal profiles and social sharing</li>
                      <li>Monetization for organizers through promotions or featured listings</li>
                    </ul>
                  </div>
                </div>       
            </section>

            {/* Reflections */}
            <section id="Reflections" className="space-y-8 py-24 md:py-60">
                <h2>Reflections</h2>
                <div className='projectSection'>
                  <h3 className='projectSectionLeft'></h3>
                  <div className='projectSectionRight'>
                    <p>Ven-T taught me how to move a product from idea to execution with clarity and constraint. It was a crash course in balancing what users need with what’s realistic to build, and how to validate assumptions quickly before getting lost in extra features.</p>
                    <p>It also reinforced how much <b>impact simple, focused design</b> can have, especially in places where digital tools haven’t caught up to the richness of real-world experiences. Sometimes, just helping people <b>know what’s happening around them</b> is enough to bring a town to life.</p>
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
import Nav from '@/components/nav';
import Project4Image from '@/components/project_4_images';
import ProjectHeader from '@/components/project_header';
import ProjectImage from '@/components/project_image';
import ImageSlider from '@/components/project_image_compare';
import ProjectOverview from '@/components/project_overview';
import SideNav from '@/components/side_nav';
import React from 'react'

function Lnl25() {

  const sections = [ "About", "Design Process", "Development", "Results"];
  
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
          <h1>La Noche de los Libros</h1>
          <ProjectHeader 
            src='/lnl-header.png'
            alt='terminal seen through airplane window'/>
           <ProjectOverview
            role1='UX Designer'
            role2='UI Designer'
            role3='Front-end Developer'
            deliverable1='Website Redesign'
            deliverable2='Website Development'
            tool1='Figma'
            tool2='HTML, CSS, JS'
            tool3='Supabase (PostgreSQL)'
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
                            La Noche de los Libros (The Night of Books) is Madrid&apos;s premier annual literary festival, celebrating literature through author readings, book signings, and cultural performances across the city. As one of Spain&apos;s most significant literary events, it attracts thousands of visitors each year to promote reading and cultural engagement.
                        </p>
                    </div>
                </div>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Challenge
                    </h3>
                    <div className='projectSectionRight'>
                        <ul className='list-disc list-inside'>
                            <li>Outdated information architecture with confusing navigation</li>
                            <li>Non-responsive design sections creating accessibility barriers on mobile devices</li>
                            <li>Inefficient content discovery for event schedules and locations</li>
                            <li>Visual design that didn&apos;t reflect the event&apos;s cultural significance</li>
                        </ul>
                    </div>
                </div>
                
                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Solution
                </h3>
                <div className='projectSectionRight'>
                <ul className='list-disc list-inside'>
                    <li><b>Streamlined navigation:</b> Eliminated dropdown menus in favor of direct access to all content</li>
                    <li><b>Enhanced discovery tools:</b> Implemented combined search and map functionality</li>
                    <li><b>Mobile-first approach:</b> Completely rebuilt the responsive framework</li>
                </ul>
                </div>
                </div>
                <ProjectImage
                className="relative aspect-[1924/1024]"
                src='/figma-lnl-25.png'
                alt='La Noche de los libros new website design'
                label='LNL 2025 Redesign'
                />
            </section>

            {/* Design process */}
            <section id="Design Process" className="space-y-8 pt-24 md:pt-60">
                <h2>
                    Design Process
                </h2>

                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Objectives
                </h3>
                <div className='projectSectionRight'>
                    <ul className='list-disc list-inside'>
                        <li><b>Accessibility:</b> Ensure all users could easily find and participate in events</li>
                        <li><b>Cultural Representation:</b> Visually communicate the event&apos;s literary significance</li>
                        <li><b>Scalability:</b> Create a system that could grow with the event year after year</li>
                    </ul>
                </div>
                </div>

                <div className='projectSection'>
                <h3 className='projectSectionLeft'>
                    Homepage
                </h3>
                <div className='projectSectionRight'>
                    <ul className='list-disc list-inside'>
                        <li>Integrated the thematic video with explanatory content previously buried in secondary pages</li>
                        <li>Added clear call-to-action elements guiding users to key event information</li>
                        <li>Implemented a visual hierarchy that emphasizes the event date and essential details</li>
                    </ul>
                </div>
                </div>

                <ImageSlider
                    before="/lnl-24-home.png"
                    after="/lnl-25-home.png"
                    beforeAlt="Original La Noche de los Libros design from 2024"
                    afterAlt="Redesigned La Noche de los Libros from 2025"
                    beforeLabel="2024 Homepage"
                    afterLabel="2025 Homepage"
                    width={2484}
                    height={1468}
                />
                
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Special Events
                    </h3>
                    <div className='projectSectionRight'>
                        <ul className='list-disc list-inside'>
                            <li>Replaced dropdown navigation with persistent location buttons</li>
                            <li>Standardized activity cards across all sections for consistency</li>
                        </ul>
                    </div>
                </div>
                
                <ImageSlider
                    before="/lnl-24-programacion-especial.png"
                    after="/lnl-25-programacion-especial.png"
                    beforeAlt="Original La Noche de los Libros design Special events page from 2024"
                    afterAlt="Redesigned La Noche de los Libros Special events page from 2025"
                    beforeLabel="2024 Special Events"
                    afterLabel="2025 Special Events"
                    width={2484}
                    height={1468}
                />

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Activities
                    </h3>
                    <div className='projectSectionRight'>
                        <ul className='list-disc list-inside'>
                            <li><b>Interactive Map Integration:</b> Allowed users to visualize event locations geographically</li>
                            <li><b>Smart Filtering:</b> Combined multiple filter types with real-time results</li>
                            <li><b>Responsive Cards:</b> Designed activity cards that adapt to various screen sizes</li>
                        </ul>
                    </div>
                </div>

                <ImageSlider
                    before="/lnl-24-librerias.png"
                    after="/lnl-25-librerias.png"
                    beforeAlt="Original La Noche de los Libros design Libreries page from 2024"
                    afterAlt="Redesigned La Noche de los Libros Libreries page from 2025"
                    beforeLabel="2024 Bookstores"
                    afterLabel="2025 Bookstores"
                    width={2484}
                    height={1468}
                />
        
                <ProjectImage
                className="relative aspect-[2484/1468]"
                src='/lnl-25-librerias.gif'
                alt='Interactive features of the redesigned La Noche de los Libros Bookstores page'
                label='Bookstore Page Interaction Flow'
                />
                
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Press
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                            The Prens page was redesigned to improve the user experience by simplifying the layout and making it more visually appealing. The new design features a cleaner, more modern look.
                        </p>
                    </div>
                </div>

                <ImageSlider
                    before="/lnl-24-prensa.png"
                    after="/lnl-25-prensa.png"
                    beforeAlt="Original La Noche de los Libros design Press page from 2024"
                    afterAlt="Redesigned La Noche de los Libros Press page from 2025"
                    beforeLabel="2024 Press Section"
                    afterLabel="2025 Press Section"
                    width={2484}
                    height={1468}
                />

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Mobile Experience
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                            With most users accessing the site via mobile devices, we prioritized:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li><b>Navigation:</b> Redesigned the menu system to utilize full-screen overlays for better readability</li>
                            <li><b>Touch Targets:</b> Ensured all interactive elements met accessibility standards for touch devices</li>
                        </ul>
                    </div>
                </div>

                <Project4Image
                    src1='/lnl-24-home-mobile.png'
                    alt1='Original La Noche de los Libros mobile homepage from 2024'
                    src2='/lnl-24-programacion-especial-mobile.png'
                    alt2='Original La Noche de los Libros mobile special events page from 2024'
                    src3='/lnl-24-librerias-mobile.png'
                    alt3='Original La Noche de los Libros mobile bookstores page from 2024'
                    src4='/lnl-24-menu-mobile.png'
                    alt4='Original La Noche de los Libros mobile menu from 2024'
                    className='relative w-1/4 aspect-[616/1326]'
                    label='2024 Mobile Experience'
                />

                <Project4Image
                    src1='/lnl-25-home-mobile.png'
                    alt1='Redesigned La Noche de los Libros mobile homepage from 2025'
                    src2='/lnl-25-programacion-especial-mobile.png'
                    alt2='Redesigned La Noche de los Libros mobile special events page from 2025'
                    src3='/lnl-25-librerias-mobile.png'
                    alt3='Redesigned La Noche de los Libros mobile bookstores page from 2025'
                    src4='/lnl-25-menu-mobile.png'
                    alt4='Redesigned La Noche de los Libros mobile menu from 2025'
                    className='relative w-1/4 aspect-[616/1326]'
                    label='2025 Mobile Experience'
                />

                
            </section>

            {/* Development */}
            <section id="Development" className="space-y-8 py-24 md:pt-60">
                <h2>
                    Development
                </h2>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    Approach
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                            The technical implementation focused on creating a maintainable, high-performance foundation:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li><b>Component-Based Architecture:</b> Built reusable UI components for consistent implementation</li>
                            <li><b>Progressive Enhancement:</b> Ensured core functionality worked across all browsers</li>
                            <li><b>Accessibility Compliance:</b> Achieved WCAG 2.1 AA standards throughout</li>
                            <li><b>Performance Optimization:</b> Implemented lazy loading and asset optimization</li>
                        </ul>
                    </div>
                </div>

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    Data Migration
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                            One of the most significant technical improvements was migrating from front-end data storage to a Supabase PostgreSQL database:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li><b>Secure API Layer:</b> Implemented row-level security for controlled data access</li>
                            <li><b>Efficient Queries:</b> Optimized database queries for fast filtering and sorting</li>
                            <li><b>Content Management:</b> Enabled non-technical staff to update event details through Supabase&apos;s admin interface</li>
                        </ul>
                        <p>
                            This migration eliminated the need for manual content updates in the codebase and provided a scalable foundation for future growth.
                        </p>
                    </div>
                </div>

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    Limitations
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                            The project presented unique technical challenges due to being built on Microsoft Expression Web, a deprecated web design tool:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li><b>Legacy Code Constraints:</b> Worked within the limitations of Expression Web&apos;s generated markup while implementing modern design patterns</li>
                            <li><b>Responsive Workarounds:</b> Developed custom solutions to achieve responsive behaviors not natively supported by the platform</li>
                            <li><b>Integration Challenges:</b> Created bridges between Expression Web&apos;s framework and modern JavaScript functionality</li>
                            <li><b>Maintainability:</b> Structured code to be maintainable despite the outdated tooling</li>
                        </ul>
                        <p>
                            These constraints required creative problem-solving to deliver a modern user experience within the legacy framework.
                        </p>
                    </div>
                </div>

            </section>


            {/* Results */}
            <section id="Results" className="space-y-8 py-24 md:pt-60">
                <h2>
                    Results
                </h2>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    Impact
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                            The redesigned platform successfully addressed the original challenges:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li>Significant reduction in user-reported navigation issues</li>
                            <li>Improved engagement metrics across all device types</li>
                            <li>Positive feedback from both attendees and participating organizations</li>
                            <li>Increased media coverage due to improved press resources</li>
                        </ul>
                    </div>
                </div>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    Key Learnings
                    </h3>
                    <div className='projectSectionRight'>
                        <p>
                            This project reinforced several important lessons:
                        </p>
                        <ul className='list-disc list-inside'>
                            
                            <li>The value of user-centered design in cultural event platforms</li>
                            <li>Migrating to Supabase transformed how content was managed, proving that even small projects benefit from structured backends.
                            </li>
                            <li>How to balance innovation with technical constraints</li>
                            <li>The importance of designing for accessibility from the ground up</li>
                        </ul>
                        <p>
                            Working within the constraints of Expression Web ultimately strengthened our problem-solving skills and demonstrated that excellent user experiences can be achieved even with limited tools.
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

export default Lnl25
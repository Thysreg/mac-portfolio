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
                        <p> La Noche de los Libros is Madrid’s flagship literary festival, a city-wide celebration that brings authors, readers, bookstores and institutions together every spring. While the festival has evolved, the website hadn’t kept pace. Navigation was confusing, much of the content was hard to find and the mobile experience was almost unusable.</p>
                        <p>The challenge wasn’t just to modernize the look, but to reimagine the entire experience for the thousands of people who rely on the site each year to discover events, plan routes and explore Madrid through the lens of literature.</p>
                    </div>
                </div>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Challenge
                    </h3>
                    <div className='projectSectionRight'>
                        <p>After reviewing analytics, user feedback and testing the original site across devices, four key problems stood out:</p>
                        <ul className='list-disc list-inside'>
                            <li>The site structure made it hard to find content, especially event schedules.</li>
                            <li>The experience broke on mobile, making the majority of traffic struggle to engage.</li>
                            <li>Visuals didn’t reflect the cultural significance or energy of the event.</li>
                            <li>Navigation patterns were inconsistent, requiring extra clicks and confusion.</li>
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
                    <p>To address these issues, I established three main design principles:</p>
                    <ul className='list-disc list-inside'>
                        <li><b>Accessibility:</b> Everyone should be able to find, navigate and attend events with ease.</li>
                        <li><b>Cultural Representation:</b> The design needed to visually echo the identity of the event: literary, modern and vibrant.</li>
                        <li><b>Scalability:</b> As the event grows, the platform must grow with it.</li>
                    </ul>
                </div>
                </div>

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                        Homepage
                    </h3>
                    <div className='projectSectionRight'>
                        <p>I started with the homepage, the first impression for most visitors. I integrated the thematic video directly on the landing page to communicate the festival’s tone and message, paired with clear, actionable links. Content that had been buried in inner pages was surfaced prominently and the new layout used a strong visual hierarchy that prioritized date, location and navigation.</p>
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
                        <p>Previously hidden behind dropdown menus, special events were redesigned with persistent on-page navigation and consistent visual cards. Each card followed a standard format, making browsing faster and visually coherent across devices and categories.</p>
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
                        <p>The activities section needed to serve two kinds of users: those browsing by theme and those searching by location. To meet both needs, I built a combined filtering and map interaction system. Users could apply filters by genre, format, or venue and see results update in real-time on both the list and the map.</p>
                        <p>The activity cards were redesigned to be responsive and touch-friendly, with key details like time, location and age groups easily scannable.</p>
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
                        Press Section
                    </h3>
                    <div className='projectSectionRight'>
                        <p>The press page was restructured for clarity. Instead of a dense list of links, I created a simple, editorial-style layout that made materials easier to find and more appealing to media outlets. This redesign helped increase media coverage ahead of the event.</p>
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
                        <p>Since most traffic came from mobile devices, I prioritized this experience from the start. I redesigned the menu system to use full-screen overlays, making navigation clearer and more accessible. Interactive elements were re-sized and spaced to meet WCAG standards for touch accessibility and every component was tested across common breakpoints.</p>
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
                <h2>Development</h2>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>Approach</h3>
                    <div className='projectSectionRight'>
                        <p>I developed the front-end with reusable components using semantic HTML, modern CSS and JavaScript. Every element was designed to be accessible, fast and lightweight. Key priorities included performance, clarity and low-maintenance structure.</p>
                    </div>
                </div>

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>Data Migration</h3>
                    <div className='projectSectionRight'>
                        <p>One of the biggest transformations was migrating all event data into a Supabase PostgreSQL backend. This allowed us to:</p>
                        <ul className='list-disc list-inside'>
                            <li>Securely manage event info</li>
                            <li>Enable efficient filtering and sorting across multiple criteria</li>
                            <li>Empower non-technical staff to update event content through the admin panel</li>
                        </ul>
                        <p>This shift eliminated the need to hard-code event updates every year and set the foundation for long-term sustainability.</p>
                    </div>
                </div>

                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>
                    Limitations
                    </h3>
                    <div className='projectSectionRight'>
                        <p>An unexpected challenge was that part of the legacy website had been built in Microsoft Expression Web, a long-deprecated WYSIWYG editor. I had to reverse-engineer the output, implement responsive patterns manually and find ways to bridge modern JS with its older structure, all without breaking existing dependencies.</p>
                        <p>While not ideal, working within this constraint forced creative, scrappy problem-solving and ensured the updated experience could launch without a full system overhaul.</p>
                    </div>
                </div>

            </section>


            {/* Results */}
            <section id="Results" className="space-y-8 py-24 md:pt-60">
                <h2>
                    Results
                </h2>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>Impact</h3>
                    <div className='projectSectionRight'>
                        <p>The redesign was launched ahead of the 2025 edition and immediately improved user engagement and usability across all platforms.</p>
                        <ul className='list-disc list-inside'>
                            <li><b>Navigation issues dropped</b> significantly, with fewer support requests from visitors and partners.</li>
                            <li><b>User engagement improved</b>, especially on mobile, where bounce rates dropped and time-on-site increased.</li>
                            <li><b>Press coverage increased</b> due to the more navigable, on-brand media section.</li>
                            <li><b>Internal updates became easier</b>, thanks to the Supabase setup that allowed organizers to manage content without touching code.</li>
                        </ul>
                    </div>
                </div>
                <div className='projectSection'>
                    <h3 className='projectSectionLeft'>Key Learnings</h3>
                    <div className='projectSectionRight'>
                        <p>This project reinforced how much cultural institutions benefit from user-centered design, not just in looks, but in how clearly they communicate and serve their audiences.</p>
                        <p>Some key takeaways:</p>
                        <ul className='list-disc list-inside'>
                            
                            <li><b>Structure matters more than style</b>,but both are essential to reflect cultural value.</li>
                            <li>Even a “small” project benefits from a <b>proper backend</b>, especially when content needs to scale.</li>
                            <li><b>Accessibility isn’t optional</b>, it improves the experience for everyone, not just edge cases.</li>
                            <li>Legacy tools shouldn’t stop good UX, they just demand a bit more creativity and patience.</li>
                        </ul>
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
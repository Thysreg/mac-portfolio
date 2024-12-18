import Nav from '@/components/nav';
import ProjectHeader from '@/components/project_header';
import ProjectImage from '@/components/project_image';
import SideNav from '@/components/side_nav';
import React from 'react'

function USDA() {

  const sections = [ "About", "Research", "Design Process", "Final Design", "User Testing", "Reflection"];
  
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
          <h1>USDA</h1>
          <ProjectHeader 
            src='/usda-portada.jpg'
            alt='green fields with mountains in the back'/>
          {/* About */}
          <section id="About" className="space-y-8 pt-60">
                <h2>
                    About the project
                </h2>
                <h3>
                    The Problem
                </h3>
                <p>
                Government websites, including USDA’s, often overwhelm users with an abundance of information. This makes it challenging for both new and returning visitors to navigate the site effectively.
                </p>
                <h4>
                Key Usability Issues:
                </h4>
                <p>
                    <li>Subcategories are unclear in the navigation menu, complicating access to specific information.</li>
                    <li>The search function lacks robust filtering options, such as by title, category, or date range.</li>
                    <li>Some important pages, like the USDA Farmers Market, are difficult to locate directly from the main menu.</li>
                </p>
                <h3>
                    The Solution
                </h3>
                <p>
                The redesign focuses on simplifying navigation, enhancing the search functionality, and modernizing the overall look of the website while maintaining its recognizable identity. Key improvements include:                </p>
                <p>
                  <li>A reorganized top navigation bar with clearer categories and subcategories.</li>
                  <li>Enhanced prominence and functionality of the search bar.</li>
                  <li>A responsive design for seamless usability across desktop and mobile platforms.</li>
                </p>

                <ProjectImage 
                    className="relative aspect-[1080/768]"
                    src='/usda-desktop-home-1080.jpg'
                    alt='USDA website home page'
                />
            </section>

            {/* Research */}
            <section id="Research" className="space-y-8 pt-60">
                <h2>
                    Research
                </h2>
                <h3>
                    User Research
                </h3>
                <h4>
                    Proto-persona
                </h4>
                <ProjectImage
                className=' relative aspect-[1920/1080] border-white border-8 rounded-md bg-white'
                src='/usda-user-proto-persona-1080.png'
                alt='User proto persona USDA'
                />
                <p>
                <b>Jeff Dillon:</b> A local farmer looking to sell produce at the USDA Farmers Market. Jeff represents users who need quick and reliable access to farming-related information and resources.
                </p>
                <h4>
                    Typical User Path
                </h4>
                <p>
                Jeff visits the USDA website to find relevant fact sheets, navigate press releases, and apply to sell at the Farmers Market.
                </p>
                <h3>
                    Usability Testing
                </h3>
                <p>
                Objective: Assess whether users can easily locate specific information and identify pain points in navigation.
                </p>
                <h4>
                    Tasks & Findings:
                </h4>
                <p>
                <li>Locate crop coexistence fact sheets: <br/>
                    <b>Issue:</b> Subcategories in the navigation menu are unclear, making it difficult to find specific topics.
                </li>
                <br/>
                <li>
                Find a press release by title: <br/>
                <b>Issue:</b> The lack of filters for press releases (e.g., title, category, date range) complicates the search process.
                </li>
                <br/>
                <li> Navigate to the Farmers Market page: <br/>
                <b>Issue:</b> This page is not accessible from the main navigation bar.</li>
                </p>
                <ProjectImage
                className="relative aspect-[1080/649] border-white border-8 rounded-md bg-white"
                src='/usda-test-results-1080.png'
                alt='User redesign interviews results'
                />

                <h3>
                    Mood Board
                </h3>
                <ProjectImage
                className="relative aspect-[1194/512] border-white border-8 rounded-md bg-white"
                src='/usda-mood-board-1080.png'
                alt='USDA mood board inspiration examples'
                />

            </section>

            {/* Design process */}
            <section id="Design Process" className="space-y-8 pt-60">
                <h2>
                    Design Process
                </h2>
                <h3>
                    Information Architecture
                </h3>
                <h4>
                    Red Line annotations
                </h4>
                <ProjectImage
                className="relative aspect-[1080/705]"
                src='/usda-navigation-redline-1080.jpg'
                alt='USDA navigation red line annotations analysis'
                />
                <h4>Navigation Testing:</h4>
                <p>
                  <li>Users found the original navigation pane unintuitive, with topics scattered across multiple categories.</li>
                  <li>Dietary health and wildlife information were particularly hard to locate due to inconsistencies in structure and presentation.</li>
                  <li>Mobile users struggled to return to the homepage, often resorting to manually typing the URL.</li>
                </p>
                <h4>Card Sorting and Sitemap</h4>
                <p>
                Based on card-sorting exercises, the site structure was reorganized into a more logical hierarchy, simplifying navigation and reducing redundancy.
                </p>
                <ProjectImage
                className="relative aspect-[1458/809]"
                src='/usda-card-sorting-1080.png'
                alt='USDA menu card sorting testing'
                />
                <ProjectImage
                className="relative aspect-[1080/469]"
                src='/usda-site-map-1080.png'
                alt='USDA new site map structure suggestion'
                />
                <h4>New Navigation</h4>
                <p>
                A redesigned navigation bar consolidates topics into well-defined categories and improves access to frequently used pages.
                </p>
                <ProjectImage
                className="relative aspect-[1080/770]"
                src='/usda-redesign-navigation-1080.jpg'
                alt='USDA redesigned navigation'
                />
                <h3>
                    Sketches & Prototyping
                </h3>
                <p>
                Initial sketches explored layout changes for navigation and content presentation. Prototypes were iteratively tested, refining features like filtering options, visual hierarchy, and mobile responsiveness.
                </p>
                <ProjectImage
                className="relative aspect-[1097/732]"
                src='/usda-sketches-1080.png'
                alt='USDA redesign sketches'
                />
                <h3>
                  5-Second Test
                </h3>
                <p>
                Users responded positively to the redesigned UI, describing it as:
                </p>
                <p>
                    <li>User-friendly and visually appealing.</li>
                    <li>Simple and clear in how information is displayed.</li>
                    <li>Easy to navigate, particularly on mobile.</li>
                </p>
            </section>

            {/* Final Design */}
            <section id="Final Design" className="space-y-8 pt-60">
                <h2>
                    Final Design
                </h2>
                <h3>
                    Home Page Redesign
                </h3>
                <p>
                The updated homepage emphasizes accessibility, with a prominent search bar, streamlined navigation, and quick links to popular resources.
                </p>
                <h3>
                    Responsive Design
                </h3>
                <p>
                The redesign ensures consistent functionality and appearance across devices. Subcategories are nested intuitively within the navigation menu, and mobile users benefit from enhanced usability.
                </p>
                <ProjectImage
                className="relative aspect-[1080/561]"
                src='/usda-redesign-home-1080.jpg'
                alt='USDA redesigned home page'
                />
                <h3>
                    Style Guide
                </h3>
                <p>                
                A modern and clean visual style maintains the USDA’s recognizable branding while enhancing readability and usability.
                </p>
                <ProjectImage
                className="relative aspect-[1080/3159]"
                src='/usda-style-guide-1080.jpg'
                alt='USDA redesign style guide'
                />
            </section>


            <section id="User Testing" className="space-y-8 pt-60">
                <h2>
                    User Testing Results
                </h2>
                <p>
                    Objective: Evaluate the intuitiveness and usability of the redesigned website.
                </p>
                <h4>
                    Findings:
                </h4>
                <p>
                    <li>Younger users favored the search bar, while older users relied more on navigation buttons.</li>
                    <li>Challenges in completing tasks were primarily due to prototype limitations rather than design issues.</li>
                    <li>Users quickly adapted to the redesign, demonstrating ease of use across both desktop and mobile platforms.</li>
                    <li>Feedback highlighted significant improvements over the original website, particularly in finding and accessing information.</li>
                </p>
            </section>


            {/* Reflection */}
            <section id="Reflection" className="space-y-8 py-60">
                <h2>
                    Reflection & Next Steps
                </h2>
                <h3>
                   Final Thougths
                </h3>
                <p>
                The redesign addressed major navigation and usability issues, creating a simpler and more intuitive user experience. However, limitations in the prototype may have reduced the difficulty of tasks, potentially skewing results.
                </p>
                <h4>
                Future Considerations:
                </h4>
                <p>
                <li> Develop a more comprehensive prototype with fully linked pages for realistic testing. </li>
                  <li>Conduct further usability testing to validate findings and refine the design.</li>
                  <li>Explore additional features such as personalized recommendations, improved filtering, and tools to assist users with specific needs.</li>
                </p>
                <p>
                The USDA website redesign lays a strong foundation for improving access to vital resources, but further iterations and expanded testing will be key to achieving its full potential.
                </p>
            </section>
        </div>
      </div>

    </main>
    </div>
    </div>
  )
}

export default USDA
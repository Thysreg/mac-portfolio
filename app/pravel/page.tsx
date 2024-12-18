import Nav from '@/components/nav';
import ProjectHeader from '@/components/project_header';
import ProjectImage from '@/components/project_image';
import SideNav from '@/components/side_nav';
import React from 'react'

function Pravel() {

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
          <h1>Pravel</h1>
          <ProjectHeader 
            src='/pravel-portada-1000.jpg'
            alt='people in a rocky mountain top with their dog'/>
          {/* About */}
          <section id="About" className="space-y-8 pt-60">
                <h2>
                    About the project
                </h2>
                <h3>
                    The Problem
                </h3>
                <p>
                Traveling with pets is challenging due to the extensive planning required to find pet-friendly accommodations and activities. Information is often scattered, making it difficult for pet owners to organize a stress-free trip.
                </p>
                <h3>
                    The Solution
                </h3>
                <p>
                Pravel is a pet travel app designed to simplify travel planning for pet owners. It helps users discover pet-friendly destinations along their routes, create and save travel plans, and share them with others.
                </p>
                <ProjectImage
                className='relative aspect-[1080/611]'
                src='/pravel-mockup-1080.jpg'
                alt='phone on hands of man with the Pravel app open'
                />
            </section>

            {/* Research */}
            <section id="Research" className="space-y-8 pt-60">
                <h2>
                    Research
                </h2>
                <h3>
                    Research Goals
                </h3>
                <p>
                    <li>Identify factors that would encourage pet owners to travel with their pets.</li>
                    <li>Understand barriers preventing pet owners from taking pets on trips.</li>
                    <li>Explore features that would differentiate Pravel from competitors.</li>
                    <li>Define the target audience for the app.</li>
                    <li>Investigate opportunities to expand beyond basic travel information.</li>
                </p>
                <h3>Interview Insights</h3>
                <p>
                    <li>Many pet owners prefer traveling with their pets but are deterred by additional planning, fees, and stress.</li>
                    <li>Car travel is favored due to its flexibility, even if it means longer journeys.</li>
                    <li>Air travel is often avoided due to its high cost and stress for pets.</li>
                </p>
                <h3>Data Analysis</h3>
                <ProjectImage
                className='relative aspect-[1080/370] border-white border-8 rounded-md bg-white'
                src='/affinity-diagram-1080.jpg'
                alt='affinity diagram of research for Pravel app'
                />
                <h3>Data Synthesis: User Persona</h3>
                <ProjectImage
                className='relative aspect-[1080/829]'
                src='/user-persona-1080.jpg'
                alt='user persona details for Pravel research'
                />

            </section>

            {/* Definition & Ideation */}
            <section id="Definition & Ideation" className="space-y-8 pt-60">
                <h2>
                Definition & Ideation
                </h2>
                <h3>
                    Problem Statement
                </h3>
                <p>Pet owners need an easier way to find and plan trips with pet-friendly accommodations and services. Currently, the information is fragmented, making travel planning stressful.
                </p>
                <h3>
                    BrainStorming
                </h3>
                <ProjectImage
                className='relative aspect-[1080/335] border-white border-8 rounded-md bg-white'
                src='/brainstorming-1080.jpg'
                alt='Pravel brainstorming'
                />
                <h3>
                    Value Proposition
                </h3>
                <p>
                  <li>Discover pet-friendly locations along their travel routes.</li>
                  <li>Save and organize travel plans.</li>
                  <li>Share plans with others to foster a community of pet travelers.</li>
                </p>
                
            </section>

            {/* Wireframing & Prototyping */}
            <section id="Wireframing & Prototyping" className="space-y-8 pt-60">
                <h2>
                Wireframing & Prototyping
                </h2>
                <h3>
                    User Flow
                </h3>
                <p>
                The app emphasizes a streamlined user flow where users can quickly:
                </p>
                <p>
                    <li>Search for pet-friendly locations.</li>
                    <li>Save locations to plans.</li>
                    <li>Share plans with others.</li>
                </p>
                <ProjectImage
                className='relative aspect-[1080/870] border-white border-8 rounded-md bg-white'
                src='/user-flow-1080.jpg'
                alt='user flow of Pravel app'
                />
                <h3>
                    Sketches
                </h3>
                <p>
                Initial sketches explored various layouts for:
                </p>
                <p>
                    <li>Filtering pet-friendly locations.</li>
                    <li>Viewing and saving plans.</li>
                    <li>Navigating profiles and search features.</li>
                </p>
                <ProjectImage
                className='relative aspect-[1080/741]'
                src='/sketches-1080.jpg'
                alt='sketches for the design of the Pravel app'
                />
                <h3>
                    Low-Fidelity Prototype
                </h3>
                <p>                
                Early prototypes focused on incorporating essential features and tested basic usability.
                </p>
                <ProjectImage
                className="relative aspect-[1080/1149]"
                src='/pravel-wireframes-1080.png'
                alt='Wireframes of Pravel mobile app'
                />
            </section>


            <section id="User Testing" className="space-y-8 pt-60">
                <h2>
                    User Testing
                </h2>
                <h3>Testing Objectives</h3>
                <p>
                    <li>Ensure users can easily create accounts.</li>
                    <li>Verify the usefulness of the travel plan feature.</li>
                    <li>Test the discoverability of the search and profile functionalities.</li>
                    <li>Confirm users can find directions to destinations.</li>
                    <li>Highlight the ease of adding pets to user profiles.</li>
                </p>
                <ProjectImage
                className='relative aspect-[1839/543]'
                src='/guerrilla-testing-1080.jpg'
                alt='Sticky notes of Guerrilla testing for Pravel app'
                />
                <h3>Key Findings</h3>
                <p>
                    <li>Users appreciated the ability to save and share plans.</li>
                    <li>Some navigation elements required clarification for smoother interactions.</li>
                </p>
                <h3>High-Fidelity Prototype</h3>
                <p>With feedback incorporated, high-fidelity designs focused on usability and visual appeal while retaining core functionalities.
                </p>
                <h3>Style Guide</h3>
                <p>
                    <li>Clean, modern interface with warm, inviting tones.</li>
                    <li>Pet-friendly design elements to resonate with the target audience.</li>
                </p>
                <ProjectImage
                className='relative aspect-[2932/6064] bg-white rounded-md'
                src='/pravel-style-guide.png'
                alt='Pravel style guide'
                />
                <h3>Prototype in action</h3>
                <ProjectImage
                className='relative aspect-[1080/611]'
                src=''
                alt=''
                />
            </section>


            {/* Reflection */}
            <section id="Reflection" className="space-y-8 py-60">
                <h2>
                    Reflection
                </h2>
                <h3>
                   Final Thougths
                </h3>
                <p>
                The project evolved significantly based on user interviews and iterative testing. Initial assumptions were challenged, leading to a clearer understanding of user needs.
                </p>
                <h4>
                Future Considerations:
                </h4>
                <p>
                <li> Develop features like saving other&apos;s plans, enhanced search options, and personalized recommendations. </li>
                  <li>Conduct further testing to validate new features and refine existing ones.</li>
                </p>
                <p>
                Pravel is designed to grow as a community-driven platform, empowering pet owners to travel confidently with their furry companions.
                </p>
            </section>
        </div>
      </div>

    </main>
    </div>
    </div>
  )
}

export default Pravel
import SideNav from '@/components/side_nav';
import React from 'react'
import ProjectHeader from '@/components/project_header';
import Nav from '@/components/nav';

function BookingPad() {

  const sections = [ "About", "Research", "Definition & Ideation", "Wireframe & Prototype", "Future Opportunities" ];
  
  return (
    <div>
        <header>
            <Nav sections={sections}/>
        </header>
      <div className="h-screen grid grid-rows-[auto_1fr]">
        <main className="grid grid-cols-4 md:grid-cols-12 gap-x-2 md:gap-x-4 h-screen px-4 md:px-12">
            <SideNav sections = {sections}/>

                {/*  Empty Columns */}
                <div className="hidden md:block col-span-2"></div>

                {/*  Main Scrolling Content */}
                <div className="col-span-4 md:col-span-7">
                    <div className="space-y-16 pt-36">
                    <h1>BookingPad</h1>
                    <ProjectHeader
                        src='/ven-t-mockups.png'
                        alt='something'/>
                    {/* About */}
                    <section id="About" className="space-y-8 md:pt-60">
                            <h2>
                                About the project
                            </h2>
                            <h3>
                                The problem
                            </h3>
                            <p>
                            
                            </p>
                            <h3>
                                The solution
                            </h3>
                            <p>
                            
                            </p>
                        </section>

                        {/* Research */}
                        <section id="Research" className="space-y-8 md:pt-60">
                            <h2>
                                Research
                            </h2>
                            <h3>
                                User Insights
                            </h3>
                            <p>
                            
                            </p>
                            <h3>
                                Competitive Analysis
                            </h3>
                            <p>
                            
                            </p>
                        </section>

                        {/* Ideation */}
                        <section id="Ideation & Development" className="space-y-8 md:pt-60">
                            <h2>
                                Ideation & Development
                            </h2>
                            <h3>
                                Value Proposition
                            </h3>
                            <p>
                            
                            </p>
                            <h3>
                                Design Process
                            </h3>
                            <p>
                                
                            </p>
                        </section>

                        {/* launch */}
                        <section id="Development & Launch" className="space-y-8 md:pt-60">
                            <h2>
                                Development & Launch
                            </h2>
                            <h3>
                                Beta Version
                            </h3>
                            <p>
                            Ven-T&apos;s development began with a focus on replicating the high-fidelity designs as closely as possible while ensuring performance and feasibility. Some design compromises were necessary to optimize speed and usability. <br />

                            The app was successfully developed and made available for download during its beta phase, providing initial users with a seamless way to discover events and gather valuable feedback. <br />

                            <i>Note: Ven-T is no longer available for download, but it represents a completed development cycle with a functional product.</i>
                            </p>
                        </section>

                        {/* future */}
                        <section id="Future Opportunities" className="space-y-8 md:pt-60">
                            <h2>
                                Future Opportunities
                            </h2>
                            <h3>
                                Next Steps
                            </h3>
                            <ul>

                            User behavior-based event recommendations.
                            Advanced filtering options.
                            Features like attendee counters and cluster markers for easier navigation.
                            Social media integration and personalized profiles.
                            Monetization through event promotions and business advertisements.

                            </ul>
                            <p>
                            Ven-T set the foundation for a modern event-discovery experience, and its thoughtful design and development serve as a strong example of problem-solving in app design.

                            </p>
                        </section>
                    </div>
                </div>

                </main>
      </div>
    </div>
    
  )
}

export default BookingPad
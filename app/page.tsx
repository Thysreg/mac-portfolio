import BackgroundExperience from '@/components/background_experience';
import SideNav from '@/components/side_nav';
import Intro from '@/components/intro_section';
import Project from '@/components/project';
import Nav from '@/components/nav';

export default function Home() {

  const sections = [ "Intro", "Work", "Values", "Background" ];


  return (
    <div>
      <header>
         <Nav sections={sections}/>
      </header>
      <div className="h-screen grid grid-rows-[auto_1fr]">
      <main className="grid grid-cols-4 md:grid-cols-12 gap-x-2 sm:gap-x-4 h-screen px-4 md:px-12">

        {/*  Side Navigation */}
        <SideNav sections={sections} 
        />

        {/*  Empty Columns */}
        <div className="hidden md:block col-span-2"></div>

        {/*  Main Scrolling Content */}
        <div className="col-span-4 md:col-span-7 pb-36">
          <div className="space-y-8">

            {/*  Intro */}
            <Intro />

            {/*  Work */}
            <section id="Work" className="md:pt-60 space-y-36 md:space-y-72">
              {/* BookingPad */}
              {/* <Project
                project='BookingPad'
                chip1='User Research'
                chip2='BSB'
                chip3='Product Design'
                chip4='Prototype'
                chip5='Web App'
                link='/bookingpad'
                src='/ven-t-mockups.png'
                alt='ven-t app mockups'
              /> */}

              {/* Ven-T */}
              <Project
                project='Ven-t'
                chip1='Development'
                chip2='Research'
                chip3='Mobile App'
                chip4='Prototype'
                chip5='Test'
                link='/vent'
                src='/ven-t-mockups-isometric.jpg'
                alt='ven-t app mockups'
              />

              {/* Pravel */}
              <Project
                project='Pravel'
                chip1='Guerrilla Testing'
                chip2='Case study'
                chip3='Research'
                chip4='Design'
                chip5='Mobile App'
                link='/pravel'
                src='/pravel-mockup-1080.jpg'
                alt='pravel app'
              />

              {/* USDA */}
              <Project
                project='USDA'
                chip1='Redesign'
                chip2='Case study'
                chip3='Gov'
                chip4='Prototype'
                chip5='Website'
                link='/usda'
                src='/usda-portada-mockups-1000.jpg'
                alt='USDA concept redesign'
              />

            </section>

            {/* Values */}
            <section id="Values" className="pt-24 md:pt-60 space-y-6">
              <h2 className="md:pr-48">
                Intuitive and impactful solutions that balance creativity, empathy and efficiency.
              </h2>
              <p className="md:pl-72">
                I specialize in UX/UI, design systems and responsive interfaces for web and mobile applications. My expertise spans tools like Figma, After Effects and Photoshop, alongside hands-on experience in user research, prototyping and iterative design.
              </p>
              <p className="md:pl-72">
                Collaboration and adaptability are at the heart of my process, having worked with cross-functional teams in industries ranging from SaaS to retail. I thrive on solving complex challenges and ensuring every design not only meets user needs but also aligns with business goals.
              </p>
            </section>


            {/* Background */}
            <section id="Background" className="pt-36 md:pt-60 space-y-16 md:space-y-32">

              {/* AirGateway */}
              <BackgroundExperience
                src="/logo_AGW.png"
                width={100} alt='AirGateway Logo'
                company='AirGateway'
                role='UX Designer & Product Manager'
                description= {[
                  'Redesigned the current platform based on user feedback.',
                  'Created a Design System to improve consistency across the platform.',
                  'Tested new features with the development team, increasing release rate of fixes.',
                  'Communicated with clients and providers to achieve optimal solutions.'
                ]}
              />
              {/* Mecalux */}
              <BackgroundExperience
                src="/logo_mecalux.png"
                alt='Mecalux Logo'
                company='Mecalux'
                role='UX Designer'
                description= {[
                  'Redesigned RFID screens while minimizing structural changes.',
                  'Supervised the development process.',
                  'Rethought warehouse planning software flow and structure.',
                  'Created assets for multiple products.'
                ]}
                  />
              
              {/* Freelance */}
              <BackgroundExperience
                src="/logo_jaime.png"
                alt='Jaime McCarron Logo'
                company='Freelance'
                role='Product Designer & Developer'
                description= {[
                  'Designed and developed an app.',
                  'Designed and developed websites using WordPress or HTML & CSS.',
                  'Conducted user research to evaluate potential business ideas.',
                ]}
                  />

              {/* LeoHome */}
              <BackgroundExperience
                src="/logo_LeoHome.png"
                alt='LeoHome Logo'
                company='LeoHome'
                role='Product Designer'
                description= {[
                  'Conducted potential user research and information gathering.',
                  'Created an MVP prototype app to attract investors.',
                  'Designed the website.',
                  'Redesigned logo to better align with the companys spirit.',
                ]}
                  />
            </section>

            {/* Contact */}
            {/* <section id="Contact" className="pt-36 md:pt-48">
              <h2 className="md:pr-48">
                Intuitive and impactful solutions that balance creativity, empathy, and efficiency.
              </h2>
              <p className="md:pl-72">
                I specialize in UX/UI, design systems, and responsive interfaces for web and mobile applications. My expertise spans tools like Figma, After Effects, and Photoshop, alongside hands-on experience in user research, prototyping, and iterative design.
              </p>
              <p className="md:pl-72">
                Collaboration and adaptability are at the heart of my process, having worked with cross-functional teams in industries ranging from SaaS to retail. I thrive on solving complex challenges and ensuring every design not only meets user needs but also aligns with business goals.
              </p>
            </section> */}
          </div>
        </div>
        </main>
      </div>

    </div>
     
  );
}


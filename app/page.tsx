import BackgroundExperience from '@/components/background_experience';
import SideNav from '@/components/side_nav';
import Intro from '@/components/intro_section';
import Project from '@/components/project';
import Nav from '@/components/nav';
import SectionTitle from '@/components/section_title';

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
            <section id="Work" className="md:pt-60">
              
            <SectionTitle title="Work" />
            <div className="space-y-36 md:space-y-72">
                 {/* BookingPad */}
              <Project
                project='OpenPad'
                chip1='User Research'
                chip2='B2B'
                chip3='Product Design'
                chip4='Prototype'
                chip5='SaaS'
                summary='Redesigning airline booking for clarity and speed.'
                link='/openpad'
                src='/op-shop.gif'
                alt='ven-t app mockups'
                className='relative w-full md:w-2/3 aspect-[1223/865]'
              />

              {/* LNL 25 */}
              <Project
                project='LNL 25'
                chip1='Redesign'
                chip2='Cultural Event'
                chip3='Mobile-First'
                chip4='Supabase Backend'
                chip5='UX/UI'
                summary='Redesigning one of Spain’s most important cultural events to be more accessible, intuitive, and future-proof. '
                link='/lnl25'
                src='/figma-lnl-25.png'
                alt='La Noche de los Libros redesigned website'
                className='relative w-full md:w-2/3 aspect-[1924/1024]'
              />

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
                className='relative w-full md:w-2/3 aspect-[1440/1080]'
              />

              {/* Pravel */}
              {/* <Project
                project='Pravel'
                chip1='Guerrilla Testing'
                chip2='Case study'
                chip3='Research'
                chip4='Design'
                chip5='Mobile App'
                link='/pravel'
                src='/pravel-mockup-1080.jpg'
                alt='pravel app'
              /> */}

              {/* USDA */}
              {/* <Project
                project='USDA'
                chip1='Redesign'
                chip2='Case study'
                chip3='Gov'
                chip4='Prototype'
                chip5='Website'
                link='/usda'
                src='/usda-portada-mockups-1000.jpg'
                alt='USDA concept redesign'
              /> */}

              

              </div>
             
            </section>

            {/* Values */}
            <section id="Values" className="pt-24 md:pt-60 space-y-6">
            <SectionTitle title="Values" />
            <div className="space-y-6">
            <h3 className="md:pr-48">
                Intuitive and impactful solutions that balance creativity, empathy and efficiency.
              </h3>
              <p className="md:pl-72">
                I specialize in UX/UI, design systems and responsive interfaces for web and mobile applications. My expertise spans tools like Figma, After Effects and Photoshop, alongside hands-on experience in user research, prototyping and iterative design.
              </p>
              <p className="md:pl-72">
                Collaboration and adaptability are at the heart of my process, having worked with cross-functional teams in industries ranging from SaaS to retail. I thrive on solving complex challenges and ensuring every design not only meets user needs but also aligns with business goals.
              </p>
            </div>
              
            </section>


            {/* Background */}
            <section id="Background" className="pt-36 md:pt-60">
            <SectionTitle title="Background" />
            <div className=" space-y-16 md:space-y-32">
              {/* AirGateway */}
              <BackgroundExperience
                src="/logo_AGW.png"
                width={100} alt='AirGateway Logo'
                company='AirGateway'
                role='UX Designer & Product Manager'
                startDate='Jun 2023'
                endDate='Sep 2024'
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
                startDate='Mar 2023'
                endDate='Jun 2023'
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
                startDate='Jun 2022'
                endDate='Mar 2023'
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
                startDate='Jun 2021'
                endDate='Sep 2022'
                description= {[
                  'Conducted potential user research and information gathering.',
                  'Created an MVP prototype app to attract investors.',
                  'Designed the website.',
                  'Redesigned logo to better align with the companys spirit.',
                ]}
                  />
            </div>
              
            </section>
          </div>
        </div>
        </main>
      </div>

    </div>
     
  );
}


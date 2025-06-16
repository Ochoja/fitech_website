import { motion } from 'framer-motion';
import { PageNavBar } from '../Components/NavBar';
import Footer from '../Components/Footer';
import bg1 from '../assets/bg1.png';
import Button from '../Components/Button';
import aboutImg1 from '../assets/aboutImg1.png';
import aboutImg2 from '../assets/aboutImg2.png';
import aboutImg3 from '../assets/aboutImg3.png';
import frame from '../assets/aboutframe.png';
import Members from '../Components/Members';
import { Link } from 'react-router-dom';

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false },
    transition: { duration: 0.8 },
  };

  const slideIn = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: false },
    transition: { duration: 0.8 },
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false },
    transition: { staggerChildren: 0.2 },
  };

  return (
    <div className='w-full min-h-screen'>
      {/* <NavBar className="w-full fixed top-0 left-0 z-50 bg-[#e5e5e5]">
        <NavBarContent />
      </NavBar> */}
      <PageNavBar />

      <main>
        {/* Hero Section */}
        <section className='grid-container lg:flex items-center md:gap-16 lg:gap-24 xl:gap-28 bg-hero-pattern bg-cover bg-no-repeat pt-32 mb-20'>
          <motion.div {...slideIn} className='mb-10 lg:mb-0'>
            <motion.h1
              {...fadeInUp}
              className='mb-4 font-medium text-3xl md:text-4xl'>
              Uniting Innovators and Tech Enthusiasts
            </motion.h1>
            <motion.p {...fadeInUp} className='mt-4 text-base xl:text-lg mb-6'>
              Fitech is a vibrant, diverse community of tech enthusiasts across
              all disciplines and specialties. Whether you're a developer,
              designer, writer, or tech aficionado, Fitech provides the
              resources and support you need to grow your career and bring your
              ideas to life.
            </motion.p>
            <motion.div {...fadeInUp}>
              <a href='https://discord.gg/9REgpp5r'>
                <Button className='bg-primary px-7 py-3 rounded-full hover:bg-gray-500 duration-500 text-white md:w-auto w-full'>
                  Join the Community
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} className='min-w-[42%] md:max-w-[55%]'>
            <img src={aboutImg1} alt='Member Image' className='w-full' />
          </motion.div>
        </section>

        {/* Our Journey Section */}
        <section className='grid-container lg:flex items-center md:gap-16 lg:gap-24 xl:gap-28 mb-20'>
          <motion.div {...slideIn} className='order-1 lg:order-2 mb-10 lg:mb-0'>
            <motion.h2
              {...fadeInUp}
              className='mb-4 font-medium text-3xl md:text-4xl'>
              Our Journey
            </motion.h2>
            <motion.p {...fadeInUp} className='mt-4 text-base xl:text-lg mb-6'>
              Founded in 2021, we've rapidly created a vibrant space where
              innovators connect, share expertise, and access top-tier
              mentorship. Join thousands of tech creators who are pushing
              boundaries and redefining possibilities—together.
            </motion.p>
            <motion.div {...stagger}>
              <a href='https://discord.gg/9REgpp5r'>
                <Button className='px-6 py-3 hover:bg-primary hover:text-white md:w-auto w-full rounded-full border-black border-[1px] hover:border-primary duration-500'>
                  Become a Sponsor
                </Button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div {...fadeInUp} className='min-w-[42%] md:max-w-[55%]'>
            <img src={aboutImg2} alt='Member Image' className='w-full' />
          </motion.div>
        </section>

        {/* Our Mission Section */}
        <section className='grid-container lg:flex items-center md:gap-16 lg:gap-24 xl:gap-28 mb-20'>
          <motion.div {...slideIn} className='mb-10 lg:mb-0'>
            <motion.h2
              {...fadeInUp}
              className='mb-4 font-medium text-3xl md:text-4xl'>
              Our Mission
            </motion.h2>
            <motion.p {...fadeInUp} className='mt-4 text-base xl:text-lg mb-6'>
              We aim to foster and grow a community of global innovators, where
              every member is empowered to learn, innovate boldly, and shape the
              future of technology together.
            </motion.p>
            <motion.div {...fadeInUp}>
              <Link to='/registration'>
                <Button className='px-6 py-3 hover:bg-primary hover:text-white md:w-auto w-full rounded-full border-black border-[1px] hover:border-primary duration-500'>
                  Join next Cohort
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} className='min-w-[42%] md:max-w-[55%]'>
            <img src={aboutImg3} alt='Member Image' className='w-full' />
          </motion.div>
        </section>

        {/* Our Community Impact Section */}
        <section className='bg-community-impact py-10'>
          <div className='grid-container lg:flex items-center md:gap-16 lg:gap-24 xl:gap-28 text-white'>
            <motion.div {...slideIn} className='mb-10 lg:mb-0'>
              <motion.h2
                {...fadeInUp}
                className='mb-4 font-medium text-3xl md:text-4xl'>
                Community Impact
              </motion.h2>
              <motion.p {...fadeInUp} className='mt-4 text-base mb-6 '>
                Our community has transformed lives by fostering innovation and
                growth. Through engaging bootcamps, invaluable
                mentorship,interns opportunities, and access to essential
                resources, we empower our members to achieve their full
                potential in tech careers. Together, we’re shaping the future of
                technology and creating opportunities for all!
              </motion.p>
              <motion.div {...fadeInUp}>
                <Button className='bg-white text-black border-2 px-7 py-3 rounded-full hover:bg-gray-500 hover:text-white duration-500 md:w-auto w-full'>
                  Become a Sponsor
                </Button>
              </motion.div>
            </motion.div>

            <motion.div {...fadeInUp} className='min-w-[50%] md:max-w-[80%]'>
              <img src={frame} alt='frame' className='w-full' />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Meet Our Team Section */}
      <motion.section
        className='bg-[#e5e5e5] w-full md:px-16 overflow-hidden mt-10 mb-5'
        {...fadeIn}>
        <Members />
      </motion.section>
      <Footer />
    </div>
  );
}

export default About;

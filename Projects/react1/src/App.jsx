import { useState } from 'react'


import Hero from './Hero'
import CourseChild from './CoursesChild'
import HeroSection2 from './HeroSection2'
import DiscoverCourses from './DiscoverCourses'
import CourseKit from './CourseKit'
import AnotherCourse from './AnotherCourse'
import Sucess from './Sucess'
import GetStarted from './GetStarted'
import Footer from './Footer'


// import Course from './Course'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <section>
        <Hero />
      </section>

      <section>
        <HeroSection2 />
      </section>


      {/* <section>
        <Course/>
       </section> */}


      <section>
        <CourseKit />
      </section>

      <section>
        <AnotherCourse />
      </section>


      <section>
        <CourseChild />
      </section>


      <section>
        <DiscoverCourses />
      </section>

      <section>
        <Sucess/>
      </section>
    
    <section>
      <GetStarted/>
    </section>

    <section>
      <Footer/>
    </section>


    </>


  )
}

export default App

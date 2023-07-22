
import React, { useRef } from 'react';
// import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import axios from 'axios';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Navigation } from './Navigation';
// import { Course } from '../API_Calling/Course';



const coursesData = [
    {
        id: 1,
        name: 'Coding Course',
        lectures: [
            { id: 1, title: 'Introduction to Coding Method', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=12345' },
            { id: 2, title: 'Intermediate Coding Concepts', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=67890' },
            { id: 3, title: 'Advanced Coding Techniques', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=ABCDE' },
            { id: 4, title: 'Advanced Coding Techniques', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=ABCDE' },
            { id: 5, title: 'Advanced Coding Techniques', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=ABCDE' },
            { id: 6, title: 'Advanced Coding Techniques', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=ABCDE' }

        ]
    },
    {
        id: 2,
        name: 'Soft Skills Course',
        lectures: [
            { id: 1, title: 'Communication Skills', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=FGHIJ' },
            { id: 2, title: 'Leadership Skills', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=KLMNO' },
            { id: 3, title: 'Time Management', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=PQRST' },
            { id: 4, title: 'Communication Skills', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=FGHIJ' },
            { id: 5, title: 'Leadership Skills', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=KLMNO' },
            { id: 6, title: 'Time Management', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=PQRST' },
            { id: 7, title: 'Communication Skills', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=FGHIJ' },

            { id: 8, title: 'Time Management', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=PQRST' }

        ]
    },

    {
        id: 3,
        name: 'Full-stack Development',
        lectures: [
            { id: 1, title: 'Full-stack Development', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?' },
            { id: 2, title: 'Back-end Development ', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube' },
            { id: 3, title: 'UI Development', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube' },
            { id: 4, title: 'Senio Web Development', authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube' }
        ]
    }
];
// const [courses, setCourses] = useState([]);
// const options = {
//     method: 'GET',
//     url: 'https://udemy-course-scrapper-api.p.rapidapi.com/course-names/course-instructor/course-url',
//     headers: {
//       'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//       'X-RapidAPI-Host': 'udemy-course-scrapper-api.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options)
//     .then((response) => 
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });


export const Home = () => {
    
    const courseCodeRef = useRef(null);
    const skillRef = useRef(null);
    const fullStackRef = useRef(null);

    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: -200,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    };
  

    return (
        <div>
            <Navigation/>
            <main>
                {/* Course1 start */}
                <h2>Coding Course</h2>
                <div className='course-code' ref={courseCodeRef}>
                    {coursesData[0].lectures.map((lecture) => (
                        <div className='code-title'>
                            <div className='code' key={lecture.id}>
                                <h3>{lecture.title}</h3>
                                <p>Author: {lecture.authorname} </p>
                                <hr></hr>
                                <p>Description:</p>
                                <p> {lecture.description}</p>
                                <div className='play-btn'>
                                    <Link className='link-s' to={`/courses/1/lectures/${lecture.id}`}>Play Now <PlayArrowOutlinedIcon /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <svg className='arr ar-left' onClick={() => scrollLeft(courseCodeRef)}>
                    <svg className='arr ar-left' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </svg>
                <svg className='arr ar-right' onClick={() => scrollRight(courseCodeRef)}>
                    <svg className='arr ar-right' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </svg>
                {/*Course1 ends */}
                {/* Course2 starts */}
                <h2>Soft Skills Course</h2>
                <div className='course-skill' ref={skillRef}>
                    {coursesData[1].lectures.map((lecture) => (
                        <div className='skill-title'>
                            <div className='skill' key={lecture.id}>
                                <h3>{lecture.title}</h3>
                                <p>Author: {lecture.authorname} </p>
                                <p>Description:</p>
                                <p> {lecture.description}</p>
                                <Link className='link-s' to={`/courses/2/lectures/${lecture.id}`}>Play Now <PlayArrowOutlinedIcon /></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <svg className='arr ar-left' onClick={() => scrollLeft(skillRef)}>
                    <svg className='arr ar-left' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </svg>
                <svg className='arr ar-right' onClick={() => scrollRight(skillRef)}>
                    <svg className='arr ar-right' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </svg>
                {/* Course2 ends */}
                {/* Course3 starts */}
                <h2>Full-Stack Course</h2>
                <div className='full-stack' ref={fullStackRef}>
                    {coursesData[2].lectures.map((lecture) => (
                        <div className='stack-title'>
                            <div className='stack' key={lecture.id}>
                                <h3>{lecture.title}</h3>
                                <p>Author: {lecture.authorname} </p>
                                <p>Description:</p>
                                <p> {lecture.description}</p>
                                <Link className='link-s' to={`/courses/2/lectures/${lecture.id}`}>Play Now <PlayArrowOutlinedIcon /></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <svg className='arr ar-left' onClick={() => scrollLeft(fullStackRef)}>
                    <svg className='arr ar-left' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </svg>
                <svg className='arr ar-right' onClick={() => scrollRight(fullStackRef)}>
                    <svg className='arr ar-right' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </svg>
                {/*  Course3 ends */}
            </main>
        </div>
      //   <div>
      //   <h2>Courses</h2>
      //   <ul>
      //     {courses?.map((course) => (
      //       <li key={course.id}>
      //         <h3>{course.name}</h3>
      //         <p>Instructor: {course.instructor}</p>
      //         <p>URL: {course.url}</p>
      //       </li>
      //     ))}
      //   </ul>
      // </div>

    );
};
// export default Home;


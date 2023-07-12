
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

// let courses=[
//     {
//         cname:'React',
//         description:'React course for begineer',
//         price: 'Rs 1000'
//     },
//     {
//         cname:'C++',
//         description:'Advance C++ course',
//         price: 'Rs 500'
//     },
//     {
//         cname:'MongodB',
//         description:'Course for begineer',
//         price: 'Rs 2000'
//     },
//     {
//         cname:'React2',
//         description:'React course for begineer',
//         price: 'Rs 400'
//     },
//     {
//         cname:'React3',
//         description:'React course for begineer',
//         price: 'Rs 1000'
//     }
// ];


// courses.map((item, id) =>(
// <div className='card'>
//     <div>{item.cname}</div>
//     <div>{item.description}</div>
//     <div>{item.price}</div>
// </div>
// ))

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
            { id: 1, title: 'Communication Skills',authorname: 'abc', description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=FGHIJ' },
            { id: 2, title: 'Leadership Skills',authorname: 'abc',  description: 'An introduction to coding on a begineer level', videoUrl: 'https://www.youtube.com/watch?v=KLMNO' },
            { id: 3, title: 'Time Management', authorname: 'abc', description: 'An introduction to coding on a begineer level',videoUrl: 'https://www.youtube.com/watch?v=PQRST' },
            { id: 4, title: 'Communication Skills',authorname: 'abc',  description: 'An introduction to coding on a begineer level',videoUrl: 'https://www.youtube.com/watch?v=FGHIJ' },
            { id: 5, title: 'Leadership Skills',authorname: 'abc',  description: 'An introduction to coding on a begineer level',videoUrl: 'https://www.youtube.com/watch?v=KLMNO' },
            { id: 6, title: 'Time Management', authorname: 'abc', description: 'An introduction to coding on a begineer level',videoUrl: 'https://www.youtube.com/watch?v=PQRST' }

        ]
    }
];



export const Home = () => {
    const courseCodeRef = useRef(null);

    const scrollLeft = () => {
      if (courseCodeRef.current) {
        courseCodeRef.current.scrollBy({
          left: -200,
          behavior: 'smooth',
        });
      }
    };
  
    const scrollRight = () => {
      if (courseCodeRef.current) {
        courseCodeRef.current.scrollBy({
          left: 200,
          behavior: 'smooth',
        });
      }
    };

    return (
        <div>
            <h2>Coding Course</h2>
            <main>
            

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
                            <Link className='link-s' to={`/courses/1/lectures/${lecture.id}`}>Play Now <PlayArrowOutlinedIcon/></Link>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <svg className='arr ar-left' onClick={scrollLeft}>
            <svg className='arr ar-left'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
        </svg>
        <svg className='arr ar-right' onClick={scrollRight}>
        <svg className='arr ar-right' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
        </svg>

            </main>
            <h2>Soft Skills Course</h2>
            <div className='course-skill'>
                {coursesData[1].lectures.map((lecture) => (
                    <div className='skill-title'>
                        <div className='skill' key={lecture.id}>
                            <h3>{lecture.title}</h3>
                            <p>Author: {lecture.authorname} </p> 
                            <p>Description:</p>
                            <p> {lecture.description}</p>
                            <Link className='link-s' to={`/courses/2/lectures/${lecture.id}`}>Play Now <PlayArrowOutlinedIcon/></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

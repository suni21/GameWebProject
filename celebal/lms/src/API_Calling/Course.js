// import { Card } from '@mui/material';
// import axios from 'axios';

// import React, { useState } from 'react'


// const[courseData, setCourseData] =useState();

// const options = {
//     method: 'GET',
//     url: 'https://courses7.p.rapidapi.com/courses',
//     headers: {
//       'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//       'X-RapidAPI-Host': 'courses7.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }
  

// export const Course = () => {
//   return (
//     <>
//     <div>
//         {courseData?.map((course) =>{
//             return (<>
//             <Card style={{width: '25rem', height:'30rem', border:'1px solid' }}>
//             {/* <Card.Img src={course.images} key={course.id} /> */}
//             <Card.Body>
//                 {/* <Card.text>
//                     {course.title}
//                 </Card.text> */}
//                 <Card.text>
//                     {course.courses}
//                 </Card.text>

//             </Card.Body>
//             </Card>
//             </>)
//         })}

//     </div>
//     </>
//   )
// }

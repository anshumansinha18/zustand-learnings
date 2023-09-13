import React, {useState} from 'react'
import useCourseStore from '../app/course.store'

export default function CourseForm() {
    const addCourse = useCourseStore((state) => state.addCourse);

    const [courseTitle, setCourseTitle] = useState("");
    console.log("CourseForm Rendered");

    const handleCourseSubmit = () =>{
        if(!courseTitle) return alert("please add a course title");

        addCourse({
            id: Math.ceil(Math.random()*1000000),
            title: courseTitle,
        })
        setCourseTitle("");
    }
  return (
    <div className="form-container">
        <input value={courseTitle} onChange={(e)=>setCourseTitle(e.target.value)} className="form-input" />
        <button className="form-submit-btn" onClick={()=>{
            handleCourseSubmit()
        }}>Submit</button>
    </div>
  )
}

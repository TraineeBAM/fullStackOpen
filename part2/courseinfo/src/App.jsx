import Course from "./components/Course"

const App = ({ course }) => {    
    return (
    <>
        <h1>Web development curriculum</h1>
        <h2>{course.name}</h2>
        {course.parts.map(part =>
          <Course key={part.id} part={part} />
        )}
        <p><strong>Total of</strong> </p>
    </>
  )
}
  
  export default App
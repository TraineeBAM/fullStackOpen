const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
      <p>
        Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </p>
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   const Header = () => {
//     return (
//       <h1>{course}</h1>
//     )
//   }

//   const Content = () => {
//     return (
//       <>
//         <p>
//           {parts[0].name} {parts[0].exercises}
//         </p>
//         <p>
//           {parts[1].name} {parts[1].exercises}
//         </p>
//         <p>
//           {parts[2].name} {parts[2].exercises}
//         </p>
//       </>
//     )
//   }

//   const Totals = () => {
//     return (
//     <p>
//       Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
//     </p>
//     )
//   }

//   return (
//     <div>
//       <Header />
//       <Content />
//       <Totals />
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1.name} {part1.exercises}
//       </p>
//       <p>
//         {part2.name} {part2.exercises}
//       </p>
//       <p>
//         {part3.name} {part3.exercises}
//       </p>
//       <p>
//         Number of exercises {part1.exercises + part2.exercises + part3.exercises}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
  
//   const Header = () => {
//     return (
//       <div>
//         <h1>{course}</h1>
//       </div>
//     )
//   }

//   const Part = ({ name, exercises }) => {
//     return (
//       <p>
//         {name} {exercises}
//       </p>
//     )
//   }

//   const Content = () => {
//     return (
//       <>
//         <Part name={part1} exercises={exercises1} />
//         <Part name={part2} exercises={exercises2} />
//         <Part name={part3} exercises={exercises3} />
//       </>
//     ) 
    
//   }

//   const Total = () => {
//     return (
//       <p>
//         Number of exercises {exercises1 + exercises2 + exercises3}
//       </p>
//     )
//   }

//   return (
//     <div>
//       <Header />
//       <Content />
//       <Total />
//     </div>
//   )
// }

export default App 
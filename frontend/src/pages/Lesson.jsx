import { useParams } from 'react-router-dom'

function Lesson() {
  const { id } = useParams()

  return (
    <main className="min-h-screen bg-gray-950 p-10 text-white">
      <h1 className="text-3xl font-bold">Lesson {id}</h1>
    </main>
  )
}

export default Lesson

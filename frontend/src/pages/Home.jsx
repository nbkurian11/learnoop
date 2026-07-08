import { Link } from 'react-router-dom'



function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-5 bg-gray-900">
        <Link to="/" className="text-white font-bold text-xl">LearnOOP</Link>
        <Link to="/lessons" className="text-gray-300 hover:text-white">Lessons</Link>
        <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
        </nav>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-10">
          <h1 className="text-6xl font-bold text-white mb-4">Learn OOP</h1>
          <p className="text-xl text-gray-400 mb-8">Master Object Oriented Programming through interactive lessons.</p>
         <button className="bg-teal-500 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-teal-400">Start Learning</button>
</div>
</div>
  )
}

export default Home
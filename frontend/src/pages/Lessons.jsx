import { Link } from 'react-router-dom'

const lessons = [
  {
    title: 'Introduction to OOP',
    description: 'Learn the core ideas behind object-oriented programming and why they matter.',
    difficulty: 'Beginner',
  },
  {
    title: 'Classes and Objects',
    description: 'Create blueprints with classes and bring them to life as objects.',
    difficulty: 'Beginner',
  },
  {
    title: 'Constructors',
    description: 'Set up object state with constructors and sensible defaults.',
    difficulty: 'Beginner',
  },
  {
    title: 'Encapsulation',
    description: 'Protect data and expose clean, intentional ways to use an object.',
    difficulty: 'Intermediate',
  },
  {
    title: 'Inheritance',
    description: 'Reuse and extend behavior by building relationships between classes.',
    difficulty: 'Intermediate',
  },
  {
    title: 'Polymorphism',
    description: 'Write flexible code that works with objects through a shared interface.',
    difficulty: 'Intermediate',
  },
  {
    title: 'Abstraction',
    description: 'Focus on what an object does while hiding implementation details.',
    difficulty: 'Intermediate',
  },
  {
    title: 'Interfaces',
    description: 'Define dependable contracts that classes can implement.',
    difficulty: 'Intermediate',
  },
  {
    title: 'Generics',
    description: 'Build reusable, type-safe structures that work with many data types.',
    difficulty: 'Advanced',
  },
  {
    title: 'Recursion',
    description: 'Solve complex problems by breaking them into smaller versions of themselves.',
    difficulty: 'Advanced',
  },
  {
    title: 'Exception Handling',
    description: 'Anticipate errors and keep applications resilient when problems arise.',
    difficulty: 'Advanced',
  },
  {
    title: 'Collections',
    description: 'Organize and work efficiently with groups of related objects.',
    difficulty: 'Advanced',
  },
]

const badgeStyles = {
  Beginner: 'bg-teal-500/15 text-teal-300 ring-teal-400/30',
  Intermediate: 'bg-sky-500/15 text-sky-300 ring-sky-400/30',
  Advanced: 'bg-violet-500/15 text-violet-300 ring-violet-400/30',
}

function Lessons() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 bg-gray-900" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="text-xl font-bold tracking-tight text-white">
            Learn<span className="text-teal-400">OOP</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/lessons" className="text-teal-400 transition hover:text-teal-300">
              Lessons
            </Link>
            <Link to="/about" className="text-gray-300 transition hover:text-white">
              About
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <header className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">Curriculum</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">OOP Lessons</h1>
          <p className="mt-4 text-lg text-gray-400">Master Object Oriented Programming step by step</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-label="OOP lessons">
          {lessons.map((lesson, index) => (
            <article
              key={lesson.title}
              className="flex min-h-64 flex-col border-l-4 border-teal-500 bg-gray-900 p-6 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-teal-500/10"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-teal-400">Lesson {String(index + 1).padStart(2, '0')}</span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${badgeStyles[lesson.difficulty]}`}>
                  {lesson.difficulty}
                </span>
              </div>
              <h2 className="mt-6 text-xl font-semibold text-white">{lesson.title}</h2>
              <p className="mt-3 leading-6 text-gray-400">{lesson.description}</p>
              <button
                type="button"
                className="mt-auto pt-6 text-left text-sm font-semibold text-teal-400 transition hover:text-teal-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Start Lesson <span aria-hidden="true">&rarr;</span>
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Lessons

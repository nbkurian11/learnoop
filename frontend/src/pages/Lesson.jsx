import Editor from '@monaco-editor/react'
import { Link, useParams } from 'react-router-dom'

const lessonTitles = {
  1: 'Introduction to OOP',
  2: 'Classes and Objects',
  3: 'Constructors',
  4: 'Encapsulation',
  5: 'Inheritance',
  6: 'Polymorphism',
  7: 'Abstraction',
  8: 'Interfaces',
  9: 'Generics',
  10: 'Recursion',
  11: 'Exception Handling',
  12: 'Collections',
}

const starterCode = `public class Main {
  public static void main(String[] args) {
    // Create an object and explore OOP here.
    System.out.println("Hello, OOP!");
  }
}`

function Lesson() {
  const { id } = useParams()
  const lessonId = Number(id)
  const title = lessonTitles[lessonId] ?? `Lesson ${id}`
  const nextLessonId = lessonId < Object.keys(lessonTitles).length ? lessonId + 1 : null

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

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">Lesson {String(id).padStart(2, '0')}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
          Learn the idea, then put it into practice with the Java editor.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-xl border border-gray-800 bg-gray-900 p-6 sm:p-8" aria-labelledby="lesson-content-title">
            <h2 id="lesson-content-title" className="text-2xl font-semibold text-white">What is object-oriented programming?</h2>
            <div className="mt-5 space-y-4 leading-7 text-gray-300">
              <p>
                Object-oriented programming (OOP) organizes code around objects: values that combine data with the
                actions they can perform. It helps you model real problems with clear, reusable building blocks.
              </p>
              <p>
                A <span className="font-semibold text-teal-300">class</span> is a blueprint, while an{' '}
                <span className="font-semibold text-teal-300">object</span> is an instance created from that blueprint.
                Classes can describe an object&apos;s state with fields and its behaviour with methods.
              </p>
              <div className="rounded-lg border border-teal-500/20 bg-teal-500/10 p-4 text-sm text-teal-100">
                Try changing the message in the editor, then add a variable or method of your own.
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900" aria-labelledby="practice-title">
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <div>
                <h2 id="practice-title" className="font-semibold text-white">Java practice</h2>
                <p className="mt-1 text-sm text-gray-400">Experiment with the starter code.</p>
              </div>
              <span className="rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300">Java</span>
            </div>
            <Editor
              height="380px"
              defaultLanguage="java"
              defaultValue={starterCode}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 16 },
                scrollBeyondLastLine: false,
              }}
            />
          </section>
        </div>

        <div className="mt-10 flex justify-end">
          {nextLessonId ? (
            <Link
              to={`/lessons/${nextLessonId}`}
              className="rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Next Lesson <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <Link
              to="/lessons"
              className="rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-teal-400"
            >
              Back to Lessons
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}

export default Lesson

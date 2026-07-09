import { useState } from 'react'
import { supabase } from '../supabase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
            const { error } = await supabase.auth.signInWithPassword({ email, password })
            if (error) {
                alert(error.message)
            } else {
                alert('Logged in successfully!')
            }
        }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-gray-900 p-10 rounded-xl w-96 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-white text-center">Login</h1>
                <input
                    onChange={e => setEmail(e.target.value)}  
                    type="email" 
                    placeholder="Email"
                    className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password"
                    className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500"
                />
                <button onClick={handleLogin} className="bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-400">
                    Login
                </button>
                <p className="text-gray-400 text-center">
                    Don't have an account? <a href="/signup" className="text-teal-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login
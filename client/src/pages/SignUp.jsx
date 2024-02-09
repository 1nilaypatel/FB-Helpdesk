import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='bg-blue-900 min-h-screen flex justify-center items-center'>
      <div className="min-w-96 p-10 bg-white rounded-xl shadow-lg text-sm">
        <h1 className='text-center text-xl mb-8'>
          Create Account
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              Name
              <input 
                type="text"
                placeholder="Nilay Patel"
                id="username"
                className="border rounded-md p-3"
                required
              />
            </div>
            <div className="flex flex-col">
            Email
            <input 
              type="email"
              placeholder="nilaypatel@gmail.com"
              id="email"
              className="border rounded-md p-3"
              required
            />
            </div>
            <div className="flex flex-col">
            Password
            <input 
              type="password"
              placeholder="password"
              id="password"
              className="border rounded-md p-3"
              required
            />
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>
          <button 
            className="bg-blue-900 text-gray-200 p-3 rounded-md hover:bg-opacity-85 disabled:bg-opacity-40"
          >
            Sign Up
          </button>
        </div>
        <div className="flex gap-1 mt-5 text-xs justify-center">
          <p>
            Already have an account?
          </p>
          <Link to={'/log-in'}>
            <span className="text-blue-500">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

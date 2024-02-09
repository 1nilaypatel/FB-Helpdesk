import { Link } from 'react-router-dom'

export default function Appbar() {
  return (
    <header className='bg-blue-950 shdow-2xl fixed top-0 w-full z-50'>
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <Link to='/'>
        <h1 className='flex font-bold text-xl sm:text-2xl'>
          <span className='text-slate-50'>Fb</span>
          <span className='text-slate-300'>Helpdesk</span>
        </h1>
      </Link>
      <ul className='flex flex-row justify-center items-center gap-4'>
        <Link to='/log-in'>
          <li className='text-slate-200 hidden sm:inline hover:underline'>
            Log In
          </li>
        </Link>
        <Link to='/sign-up'>
          <li className='text-gray-200 hover:underline bg-blue-900 px-2 py-1 rounded-full'>
            Sign Up
          </li>
        </Link>
      </ul>
    </div>
    </header>
  )
}

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-white mt-5 h-36 bg-rose-700 text-2xl font-semibold gap-3">
      <a href="" className='flex items-center gap-2'>
        <span>Author this page web</span>
        <IoLogoLinkedin className='text-3xl'/>
      </a>
      <a href="" className='flex items-center gap-2'>
        <span>GitHub project</span>
        <IoLogoGithub className='text-3xl'/>
      </a>
    </footer>
  )
}

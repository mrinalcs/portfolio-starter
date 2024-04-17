import Link from 'next/link'

const navItems = {
  '/': {
    name: 'About',
  },
  '/blog': {
    name: 'Blog',
  },
  '/photos': {
    name: 'Photos',
  },
}

export function Navbar() {
  return (
     
        <header>

          <Link href="/">home</Link>

 
<h1>Title to change</h1>
          <nav>
           
           {Object.entries(navItems).map(([path, { name }]) => {
             return (
               <Link
                 key={path}
                 href={path}
               >
                 {name}
               </Link>
             )
           })}
         
       </nav>
        </header>
       
  )
}

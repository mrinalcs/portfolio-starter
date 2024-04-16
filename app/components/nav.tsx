import Link from 'next/link'

const navItems = {
  '/': {
    name: 'About',
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  return (
     
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
       
  )
}

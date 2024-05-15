'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
	const name = usePathname()
	console.log(name)

	return (
		<header>
			<nav className='flex w-full justify-around align-middle  '>
				<Link href='/'>Main</Link>
				<Link href='/dashboard'>DashBoard</Link>
				<Link href='404'>404</Link>
			</nav>
		</header>
	)
}

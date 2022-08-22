import React from 'react'
import Link from 'next/link'
const About = () =>{
	return (
		<div>
			<Link href='/about'>
				<a>About page</a>
			</Link>
			<h1>About</h1>
		</div>
	)
}
export default About
import Link from 'next/link'

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link href='https://google.com.pt'><a>Google</a></Link></li>
                <li><Link href='http://algoritmodigital.pt'><a>Algoritmo</a></Link></li>
            </ul>
        </div>
    )
}

export default NavBar;
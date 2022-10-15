import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>home</Link>
                </li>
                <li>
                    <Link href='/ninjas'>ninja list</Link>
                </li>
                <li>
                    <Link href='/about'>about</Link>
                </li>
            </ul>
        </div>

    );
}

export default Nav;
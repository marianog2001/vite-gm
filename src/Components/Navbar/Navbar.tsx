import { UserPanel } from '../UserPanel/UserPanel'
import { Link } from 'react-router-dom'

export function Navbar(): JSX.Element {
    return (
        <nav className='bg-red-500 flex'>
            <div id='logo'>
                <Link to={'/'}>
                    <img src="/logo-placeholder.png" alt="" className='h-[20vh]' />
                </Link>
                
            </div>
            <div className='flex justify-evenly w-[100%]'>
                <Link to={'/products'}>Products</Link>
                <Link to={'/cart'}>Cart</Link>
            </div>
            <UserPanel />
        </nav>
    )
}

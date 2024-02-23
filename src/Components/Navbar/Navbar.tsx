import { UserPanel } from '../UserPanel/UserPanel'

export function Navbar (): JSX.Element {
    return (
        <nav className='bg-red-500 flex'>
            <div id='logo'>
                <img src="/logo-placeholder.png" alt="" className='h-[20vh]' />
            </div>
            <div className='flex justify-evenly w-[100%]'>
                <a href="http://">Products</a>
                <a href="">Cart</a>
            </div>
            <UserPanel/>
        </nav>
    )
}

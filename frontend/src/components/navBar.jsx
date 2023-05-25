import '../css/navbar.css'

const NavBar = ()=>{
    return(
        <nav>    
            <img src='/aceybook.png'/>
            <div className='links'>
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Blogs</h4>
                <h4>Contact</h4>
            </div>
        </nav> 
    )
}

export default NavBar
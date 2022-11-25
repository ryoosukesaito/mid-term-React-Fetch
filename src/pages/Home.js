import { Link } from 'react-router-dom';
import '../Quote.css';
import '../css/Home.css';

const Home = () => {
  return (
    <>
      <div className='App'>
        <div className='component'>

          <div className='title'><h1> GIVE YOU SOME QUOTES </h1></div>
            
            
            <Link to="/quote " className='btn-enter'><button>ENTER</button></Link>
            
        </div>
          
      </div>
    </>
  )
}

export default Home;
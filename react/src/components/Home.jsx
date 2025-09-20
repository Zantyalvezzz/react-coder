import welcome from '../assets/welcome.jpg'

function Home() {
  return (
    <div>
      <img className='welcome' src={welcome} alt="welcome" />
    </div>
  )
}

export default Home
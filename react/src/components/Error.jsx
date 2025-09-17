import error404 from '../assets/error404.jpg'

function Error() {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <img src={error404} alt="" />
    </div>
  )
}

export default Error
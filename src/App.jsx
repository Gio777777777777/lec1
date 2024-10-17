import './App.css'

function App() {
  
  const firstName = "Giorgi"
  const surName = "Tskvitaria"
  const age = 15
  const hobby = "futball"
  const favcar = "mercedes G class"

  return (
    <div className='box'>
      <h1 className='name'>My Name is {firstName}</h1>
      <h1 className='surname'>My last Name is {surName}</h1>
      <h1 className='age'>I am {age} years old</h1>
      <h1 className='hobby'>My Hoby is {hobby} </h1>
      <h1 className='car'>My favorite car is {favcar} </h1>
    </div>
  )
}

export default App

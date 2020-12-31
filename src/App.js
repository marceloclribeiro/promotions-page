import React, { useState, useEffect } from 'react'
import './App.css'
import { getData } from './services/requests'
import Promotion from './components/Promotion'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    getData().then(res => {
      setData(res.data)
    })
  }, [])
  console.log(data)
  return (
    <div className='App'>
      {data.map(promotion => (
        <Promotion
          id={promotion.id}
          name={promotion.name}
          description={promotion.description}
          heroImageUrl={promotion.heroImageUrl}
          onlyNewCustomers={promotion.onlyNewCustomers}
          termsAndConditionsButtonText={promotion.termsAndConditionsButtonText}
          joinNowButtonText={promotion.joinNowButtonText}
          sequence={promotion.sequence}
        />
      ))}
    </div>
  )
}

export default App

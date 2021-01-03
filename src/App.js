import React, { useState, useEffect } from 'react'
import './App.css'
import { getData } from './services/requests'
import Promotion from './components/Promotion'

export default function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    console.log('dataEffect')
    getData().then(res => {
      setData(prevData => (prevData = res.data))
    })
  }, [])

  useEffect(() => {
    console.log('filterEffect')
    if (filter === 'new') {
      setData(prevData => (prevData = prevData.filter(promotion => promotion.onlyNewCustomers)))
    } else {
      getData().then(res => {
        setData(prevData => (prevData = res.data))
      })
    }
  }, [filter])

  console.log('render')
  console.log(filter)
  console.log(data)

  return (
    <div className='App'>
      <div className='nav'>
        <button onClick={() => setFilter('all')}>Promotions</button>
        <button onClick={() => setFilter('new')}>New Customers</button>
      </div>
      <div className='promotions'>
        {data.map(promotion => (
          <Promotion
            key={promotion.id}
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
    </div>
  )
}

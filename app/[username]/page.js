import React from 'react'
import Paymentpage from '../components/PaymentPage'

const username = ({ params }) => {
  return (
    <>
      <Paymentpage username={params.username} />
    </>
  )
}

export default username

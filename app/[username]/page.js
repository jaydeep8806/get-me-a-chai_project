import React from 'react'
import Paymentpage from '/components/paymentpage'

const username = ({ params }) => {
  return (
    <>
      <Paymentpage username={params.username} />
    </>
  )
}

export default username

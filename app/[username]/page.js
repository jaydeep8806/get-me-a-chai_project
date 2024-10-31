import React from 'react'
import Paymentpage from '../components/PaymentPage'
import { notFound } from 'next/navigation'
import User from '@/models/User'
import connectDb from '@/db/connectDb'

const Username = async ({ params }) => {
  // if the username is not found then return 404
  const checkUser = async () => {
    await connectDb()
    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound()
    }
  }
  await checkUser()

  return (
    <>
      <Paymentpage username={params.username} />
    </>
  )
}

export default Username

export async function generateMetadata({ params }) {
  return {
    title: `${params.usename} - Get Me A Chai`,
  }
}

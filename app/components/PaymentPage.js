'use client'
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'

const PaymentPage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({})
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])

  useEffect(() => {
    getdata()
  }, [])

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getdata = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  const pay = async (amount) => {
    // get the order Id
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id

    var options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Get Me A Chai', // Enter the name of your business
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: orderId, //This is a sample Order ID. Pass the id obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        // we recommend using the prefill parameter to auto-fill customer's contact details on the checkout page
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9000090000', // Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    }
    var rzp1 = new Razorpay(options)
    rzp1.open()
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="cover w-full bg-red-500 relative">
        <img
          className="object-cover w-full h-[350]"
          src={currentUser.coverpic}
          alt=""
        />
        <div className="absolute -bottom-14 right-[44%] border-white border-2 rounded-full">
          <img
            className="rounded-full h-36"
            width={150}
            height={150}
            src={currentUser.profilepic}
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center flex-col my-14 gap-2">
        <div className="text-white font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Creating Animated arts for VTT's</div>
        <div className="text-slate-400">
          9,719 members . 87 Posts . $15,346/release
        </div>

        <div className="payment gap-3 flex w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* show list of all  the supporters as a leaderboard */}
            <h2 className="text-2xl  font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-sm">
              {payments.length === 0 && <div>No payments yet</div>}
              {payments.map((p, i) => {
                return (
                  <li className="my-4 flex gap-2 items-center ">
                    <img width={33} src="avatar.gif" alt="user avatar" />
                    <span>
                      {p.name} donated
                      <span className="font-bold">₹{p.amount}</span> with a
                      messege "{p.messege}"
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="makepaymet w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl  font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for name and messege */}

              <input
                onChange={handleChange}
                name="name"
                value={paymentform.name}
                className="w-full p-3 rounded-lg bg-slate-800"
                type="text"
                placeholder="Enter Name"
              />
              <input
                onChange={handleChange}
                value={paymentform.messege}
                name="messege"
                className="w-full p-3 rounded-lg bg-slate-800"
                type="text"
                placeholder="Enter Message"
              />
              <input
                onChange={handleChange}
                name="amount"
                value={paymentform.amount}
                className="w-full p-3 rounded-lg bg-slate-800"
                type="text"
                placeholder="Enter Amount"
              />
              <button
                onClick={() => {
                  console.log('pay button', paymentform.amount)
                  pay(Number.parseInt(paymentform.amount) * 100)
                }}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 
        text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(3000)}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage

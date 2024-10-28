'use client'
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'

const Paymentpage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({})

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })

    const pay = async (amount) => {
      // get the order Id
      let a = await initiate(amount, session?.user.name, paymentform)
      let orderID = a.id

      var options = {
        key: process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Get Me A Chai', // Enter the name of your business
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: orderID, //This is a sample Order ID. Pass the id obtained in the response of Step 1
        callback_url: `${process.env.URL}` / api / razorpay,
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
  }
}

return (
  <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    <div className="cover w-full bg-red-500 relative">
      <img
        className="object-cover w-full h-[350]"
        src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1730678400&token-hash=VJkmzSQ9tPGlncD0GhafkfgHXnNeH0hm81eCcu1iuS0%3D"
        alt=""
      />
      <div className="absolute -bottom-14 right-[44%] border-white border-2 rounded-full">
        <img
          className="rounded-full h-36"
          width={150}
          height={150}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJ5O9_4cyiRtqN7dkyfITvPhtgeLm-2DH9Q&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJ5O9_4cyiRtqN7dkyfITvPhtgeLm-2DH9Q&s"
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
            <li className="my-4 flex gap-2 items-center ">
              <img width={33} src="avatar.gif" alt="user avatar" />
              <span>
                sagar doneted <span className="font-bold">$500</span> with a
                messege "I support you bro"
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center ">
              <img width={33} src="avatar.gif" alt="user avatar" />
              <span>
                sagar doneted <span className="font-bold">$8000</span> with a
                messege "I support you bro"
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center ">
              <img width={33} src="avatar.gif" alt="user avatar" />
              <span>
                Bhavin doneted <span className="font-bold">$7500</span> with a
                messege "I support you bro"
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center ">
              <img width={33} src="avatar.gif" alt="user avatar" />
              <span>
                Dev doneted <span className="font-bold">$1000</span> with a
                messege "I support you bro"
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center ">
              <img width={33} src="avatar.gif" alt="user avatar" />
              <span>
                manav doneted <span className="font-bold">$5000</span> with a
                messege "I support you bro"
              </span>
            </li>
          </ul>
        </div>
        <div className="makepaymet w-1/2 bg-slate-900 rounded-lg text-white p-10">
          <h2 className="text-2xl  font-bold my-5">Make a Payment</h2>
          <div className="flex gap-2 flex-col">
            {/* input for name and messege */}

            <input
              onChange={handleChange}
              value={payment.name}
              className="w-full p-3 rounded-lg bg-slate-800"
              type="text"
              placeholder="Enter Name"
            />
            <input
              onChange={handleChange}
              value={payment.messege}
              className="w-full p-3 rounded-lg bg-slate-800"
              type="text"
              placeholder="Enter Message"
            />
            <input
              onChange={handleChange}
              value={payment.amount}
              className="w-full p-3 rounded-lg bg-slate-800"
              type="text"
              placeholder="Enter Amount"
            />
            <button
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
              onClick={() => pay(10)}
            >
              Pay ₹10
            </button>
            <button
              className="bg-slate-800 p-3 rounded-lg"
              onClick={() => pay(20)}
            >
              Pay ₹20
            </button>
            <button
              className="bg-slate-800 p-3 rounded-lg"
              onClick={() => pay(30)}
            >
              Pay ₹30
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Paymentpage

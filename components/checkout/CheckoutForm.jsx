"use client";
import { useState } from "react"

export default function CheckoutForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [phoneNumber, setPhoneNumber] = useState()
  const [postalCode, setPostalCode] = useState('')
  const [address, setAddress] = useState('')
  return (
    <div className="bg-white border shadow">
      <form >
        <div className="bg-white p-4 w-full">
          <div className="">
            {/* full name */}
            <div class="mb-3">
              <label for="title" class="text-md leading-7 block text-gray-700">
                Full Name
              </label>
              <div className="flex flex-wrap justify-between gap-3">

                <input
                onChange={(e)=>setFirstname(e.target.value)}
                  type="text"
                  value={firstname}
                  id="firstname"
                  name="firstname"
                  placeholder="FirstName..."
                  class="bg-opacity-20 rounded border border-gray-600 bg-transparent py-1 px-3 text-black leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent"
                />
                <input
                onChange={(e)=>setLastname(e.target.value)}
                value={lastname}
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="lastname..."
                  class="bg-opacity-20 rounded border border-gray-600 bg-transparent py-1 px-3 text-black leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent"
                />
              </div>
            </div>
          </div>
          {/* phone numebr */}
          <div class="mb-3">
            <label for="title" class="text-md leading-7 block text-gray-700">
              Phone Number
            </label>
            <input
            onChange={(e)=>setPhoneNumber(e.target.value)}
            value={phoneNumber}
              type="number"
              id="phonenumber"
              name="phonenumber"
              placeholder="Phonenumber..."
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-black leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-between">
            {/* Region */}
            <div class="mb-3">
              <label for="title" class="text-md leading-7 block text-gray-700">
                Region
              </label>
              <input
              onChange={(e)=>setRegion(e.target.value)}
              value={region}
                type="text"
                id="region"
                name="region"
                placeholder="Region..."
                class="bg-opacity-20 rounded border border-gray-600 bg-transparent py-1 px-3 text-black leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent"
              />
            </div>
            {/* city */}
            <div class="mb-3">
              <label for="title" class="text-md leading-7 block text-gray-700">
                City
              </label>
              <input
              onChange={(e)=>setCity(e.target.value)}
              value={city}
                type="text"
                id="city"
                name="city"
                placeholder="City..."
                class="bg-opacity-20 rounded border border-gray-600 bg-transparent py-1 px-3 text-black leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent"
              />
            </div>
          </div>
          {/* address */}
          <div class="mb-3">
            <label for="title" class="text-md leading-7 block text-gray-700">
              Address
            </label>
            <input
            onChange={(e)=>setAddress(e.target.value)}
            value={address}
              type="text"
              id="address"
              name="address"
              placeholder="Address..."
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-black leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent"
            />
          </div>
          {/* postal code */}
          <div class="mb-3">
            
            <label for="title" class="text-md leading-7 block text-gray-700">
              Postal code
            </label>
            <input
            onChange={(e)=>setPostalCode(e.target.value)}
            value={postalCode}
              type="text"
              id="postalcode"
              name="postalcode"
              placeholder="Postal Code..."
              class="bg-opacity-20 rounded border border-gray-600 bg-transparent py-1 px-3 text-black leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent"
            />
          </div>
        </div>
        <div className="text-lg mx-5 bg-[#912c2c] font-semibold text-white p-2 rounded text-center my-3 cursor-pointer">
          Continue
          </div>
      </form>
    </div>
  );
}

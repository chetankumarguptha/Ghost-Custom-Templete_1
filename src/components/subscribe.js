import React from 'react'

function subscribe() {
    return (
        <div>
        <div className="container font-sans bg-teal-100 rounded mt-8 p-4 md:p-24 z-30 lg:-mt-32 lg:mb-24 md:-mt-12 md:mb-24 mb-12 text-center shadow-2xl px-4 md:px-0 max-w-6xl mx-auto mt-36"  >
        <h2 className="font-bold break-normal text-2xl md:text-4xl">Subscribe</h2>
        <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
        <div className="w-full text-center pt-4">
          <form action="#">
            <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
              <input type="email" placeholder="youremail@example.com" className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none" />
              <button type="submit" className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400">Subscribe</button>
            </div>
          </form>
        </div>
      </div>    
        </div>
    )
}

export default subscribe

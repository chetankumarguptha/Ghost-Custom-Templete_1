import React from 'react'

function navpost() {
    return (
        <div>
        <nav class="flex items-center justify-between flex-wrap bg-blue-300 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl text-black tracking-tight lg:ml-48">Logo</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                
                </div>
                <div>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-12">
                    Home
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-48">
                    About
                </a>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default navpost

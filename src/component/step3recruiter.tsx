import Image from 'next/image'
import React from 'react'

const Step3recruiter = () => {
  return (
    <div className="bg-white lg:pt-36 pt-6 lg:w-3/5 w-4/5 mx-auto justify-center flex flex-col">
      <div className="text-[#4c3cffd9] text-2xl font-semibold text-center">
        Step 3
      </div>
      <div className="text-black lg:text-7xl text-2xl text-center mx-auto font-bold mt-5">
      Track all your top candidates in one place
      </div>
      <p className="text-[#3B4147] lg:text-xl text-sm text-center mx-auto w-2/3">Tailor your candidate pool to the highest quality with access to over 5,000 students from top universities. Track the status of your favorites in your dashboard.</p>
      <div className="mt-10">
        <Image src="https://framerusercontent.com/images/lbin2T2O9g4uAjDv0ZwaU3xOVk.png" alt="list" width={1500} height={1500} className="mx-auto" />

      </div>
    </div>
  )
}

export default Step3recruiter

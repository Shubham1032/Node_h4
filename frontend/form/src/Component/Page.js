import React, { useContext } from 'react'
import Response from './Response'
import Rejected from './Rejected'
import { store } from './Login'

const Page = () => {
    const [detail] = useContext(store);
    console.log(detail)
    return (
    <div>
            { detail ? <Response /> : <Rejected/>}
    </div>
  )
}
export default Page
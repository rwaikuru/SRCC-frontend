import ContractsList from '@/components/modules/contracts/ContractsList'
import React from 'react'
import Header from '@/components/header'
import Contracts from '@/components/modules/contracts/Dashboard'

function page() {
  return (
    <div>
        <Header />
      
      <Contracts />
    </div>
  )
}

export default page

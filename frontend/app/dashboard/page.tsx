import React from 'react'
import AppShell from '@/components/layout/AppShell'
import WalletSummary from '@/components/dashboard/WalletSummary'
import MarketTable from '@/components/dashboard/MarketTable'
import ChartPreview from '@/components/dashboard/ChartPreview'

const Dashboard = () => {
  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <WalletSummary />
        <MarketTable />
        <ChartPreview />
      </div>
    </AppShell>
  )
}

export default Dashboard

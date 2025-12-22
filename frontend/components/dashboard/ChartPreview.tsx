import React from 'react'
import Card from '../ui/Card'

const ChartPreview = () => {
  return (
   <Card>
      <h3 className="mb-2 font-semibold">EUR/USD</h3>
      <div className="h-64 bg-ts-bg-main rounded-lg flex items-center justify-center text-ts-text-muted">
        TradingView Lightweight Chart Placeholder
      </div>
    </Card>
  )
}

export default ChartPreview

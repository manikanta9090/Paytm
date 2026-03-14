"use client"

import { useState, useEffect } from "react"
import { Card } from "@repo/ui/card"
import { FiTrendingUp, FiTrendingDown, FiRefreshCw } from "react-icons/fi"

interface MarketData {
  usdInr: number
  eurInr: number
  btcInr: number
  nifty: number
  sensex: number
  deltas: {
    usd: number
    eur: number
    btc: number
    nifty: number
    sensex: number
  }
}

const API_INTERVAL = 3000 // 3 seconds

export function MarketWidget() {
  const [data, setData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      // USD → INR
      const usdRes = await fetch("https://open.er-api.com/v6/latest/USD")
      const usdData = await usdRes.json()

      // EUR → INR
      const eurRes = await fetch("https://open.er-api.com/v6/latest/EUR")
      const eurData = await eurRes.json()

      // BTC → USD
      const btcRes = await fetch(
        "https://api.coinbase.com/v2/prices/BTC-USD/spot"
      )
      const btcData = await btcRes.json()

      const usdInr = usdData?.rates?.INR || 83.5
      const eurInr = eurData?.rates?.INR || 90.2

      const btcUsd = Number(btcData?.data?.amount || 65000)
      const btcInr = btcUsd * usdInr

      setData({
        usdInr,
        eurInr,
        btcInr,

        // Simulated market movement
        nifty: 24100 + Math.random() * 100,
        sensex: 79000 + Math.random() * 200,

        deltas: {
          usd: Number((Math.random() - 0.5).toFixed(2)),
          eur: Number((Math.random() - 0.5).toFixed(2)),
          btc: Number((Math.random() * 5).toFixed(2)),
          nifty: Number((Math.random() - 0.5).toFixed(2)),
          sensex: Number((Math.random() - 0.5).toFixed(2)),
        },
      })
    } catch (error) {
      console.error("Market data fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()

    const interval = setInterval(fetchData, API_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  if (loading || !data) {
    return (
      <Card title="Markets" className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center h-32">
          <FiRefreshCw className="w-8 h-8 animate-spin text-paytm-blue-600" />
        </div>
      </Card>
    )
  }

  const DeltaIcon = (delta: number) =>
    delta >= 0 ? (
      <FiTrendingUp className="w-4 h-4 text-green-600" />
    ) : (
      <FiTrendingDown className="w-4 h-4 text-red-600" />
    )

  return (
    <div className="max-w-4xl mx-auto">
      <Card
        title="Live Markets"
        className="backdrop-blur-xl bg-white/80 shadow-2xl border border-slate-200/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* USD-INR */}
          <div className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 hover:shadow-xl transition-all">
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
              USD → ₹
            </div>

            <div className="text-2xl font-black text-gray-900 mb-2">
              ₹{data.usdInr.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
            </div>

            <div className="flex items-center text-sm font-bold">
              {DeltaIcon(data.deltas.usd)} {Math.abs(data.deltas.usd)}%
            </div>
          </div>

          {/* EUR-INR */}
          <div className="group p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50 hover:shadow-xl transition-all">
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
              EUR → ₹
            </div>

            <div className="text-2xl font-black text-gray-900 mb-2">
              ₹{data.eurInr.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
            </div>

            <div className="flex items-center text-sm font-bold">
              {DeltaIcon(data.deltas.eur)} {Math.abs(data.deltas.eur)}%
            </div>
          </div>

          {/* BTC-INR */}
          <div className="group p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200/50 hover:shadow-xl transition-all">
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
              Bitcoin
            </div>

            <div className="text-2xl font-black text-gray-900 mb-2">
              ₹{data.btcInr.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </div>

            <div className="flex items-center text-sm font-bold">
              {DeltaIcon(data.deltas.btc)} {Math.abs(data.deltas.btc)}%
            </div>
          </div>

          {/* NIFTY */}
          <div className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 hover:shadow-xl transition-all">
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
              NIFTY 50
            </div>

            <div className="text-2xl font-black text-gray-900 mb-2">
              {data.nifty.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </div>

            <div className="flex items-center text-sm font-bold">
              {DeltaIcon(data.deltas.nifty)} {Math.abs(data.deltas.nifty)}%
            </div>
          </div>

          {/* SENSEX */}
          <div className="group p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200/50 hover:shadow-xl transition-all col-span-1 md:col-span-2">
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
              SENSEX
            </div>

            <div className="text-2xl font-black text-gray-900 mb-2">
              {data.sensex.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </div>

            <div className="flex items-center text-sm font-bold">
              {DeltaIcon(data.deltas.sensex)} {Math.abs(data.deltas.sensex)}%
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4 opacity-75">
          <FiRefreshCw className="w-4 h-4 animate-spin text-gray-500" />
          <span className="ml-1 text-sm text-gray-500">Refreshing every 3s</span>
        </div>
      </Card>
    </div>
  )
}
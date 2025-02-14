"use client"

import { useState, useEffect } from "react"

const TARGET_DATE = new Date("2025-07-14T00:00:00Z")

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function getTimeLeft() {
    const now = new Date()
    const difference = TARGET_DATE.getTime() - now.getTime()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">
            {formatTime(value)}
          </span>
          <span className="text-xs sm:text-sm text-gray-400">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default Countdown


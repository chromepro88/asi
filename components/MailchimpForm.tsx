"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MailchimpForm() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData()
    formData.append("EMAIL", email)
    formData.append("PHONE", phone)

    try {
      const response = await fetch(
        "https://asi.us3.list-manage.com/subscribe/post?u=7779a234270db19eb72e20615&id=550e6f9238&f_id=003ce7e3f0",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        },
      )

      // Since we're using no-cors, we can't actually check the response status
      // We'll assume success if no error is thrown
      setStatus("success")
    } catch (error) {
      setStatus("error")
      setErrorMessage("An error occurred. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Singapore Phone Number
        </label>
        <Input
          id="phone"
          placeholder="Enter your phone number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="^([0-9]{8})$"
          title="Please enter a valid phone number"
          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-green-500 text-white hover:bg-green-600"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Get Started"}
      </Button>
      {status === "success" && <p className="text-green-400">Thank you for subscribing to ASI!</p>}
      {status === "error" && <p className="text-red-400">{errorMessage}</p>}
    </form>
  )
}


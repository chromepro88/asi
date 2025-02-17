'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from './button'

const PADDLE_HEIGHT = 100
const PADDLE_WIDTH = 10
const BALL_SIZE = 10
const BALL_SPEED = 5
const PADDLE_SPEED = 8

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState({ player: 0, ai: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let playerY = canvas.height / 2 - PADDLE_HEIGHT / 2
    let aiY = canvas.height / 2 - PADDLE_HEIGHT / 2
    let ballX = canvas.width / 2
    let ballY = canvas.height / 2
    let ballSpeedX = BALL_SPEED
    let ballSpeedY = BALL_SPEED

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = '#111827' // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw paddles
      ctx.fillStyle = '#60A5FA' // Blue color
      ctx.fillRect(0, playerY, PADDLE_WIDTH, PADDLE_HEIGHT)
      ctx.fillRect(canvas.width - PADDLE_WIDTH, aiY, PADDLE_WIDTH, PADDLE_HEIGHT)

      // Draw ball
      ctx.beginPath()
      ctx.arc(ballX, ballY, BALL_SIZE / 2, 0, Math.PI * 2)
      ctx.fillStyle = '#FFFFFF'
      ctx.fill()
      ctx.closePath()

      // Draw center line
      ctx.setLineDash([5, 15])
      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, 0)
      ctx.lineTo(canvas.width / 2, canvas.height)
      ctx.strokeStyle = '#374151'
      ctx.stroke()

      // Draw score
      ctx.font = '32px Arial'
      ctx.fillStyle = '#FFFFFF'
      ctx.fillText(score.player.toString(), canvas.width / 4, 50)
      ctx.fillText(score.ai.toString(), (canvas.width / 4) * 3, 50)
    }

    const update = () => {
      if (!gameStarted) return

      // Move ball
      ballX += ballSpeedX
      ballY += ballSpeedY

      // Ball collision with top and bottom
      if (ballY < 0 || ballY > canvas.height) {
        ballSpeedY = -ballSpeedY
      }

      // Ball collision with paddles
      if (
        (ballX < PADDLE_WIDTH && ballY > playerY && ballY < playerY + PADDLE_HEIGHT) ||
        (ballX > canvas.width - PADDLE_WIDTH && ballY > aiY && ballY < aiY + PADDLE_HEIGHT)
      ) {
        ballSpeedX = -ballSpeedX
      }

      // Score points
      if (ballX < 0) {
        setScore(prev => ({ ...prev, ai: prev.ai + 1 }))
        resetBall()
      } else if (ballX > canvas.width) {
        setScore(prev => ({ ...prev, player: prev.player + 1 }))
        resetBall()
      }

      // AI movement
      const aiCenter = aiY + PADDLE_HEIGHT / 2
      if (aiCenter < ballY - 35) {
        aiY += PADDLE_SPEED
      } else if (aiCenter > ballY + 35) {
        aiY -= PADDLE_SPEED
      }
    }

    const resetBall = () => {
      ballX = canvas.width / 2
      ballY = canvas.height / 2
      ballSpeedX = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1)
      ballSpeedY = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseY = e.clientY - rect.top
      playerY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, mouseY - PADDLE_HEIGHT / 2))
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    const gameLoop = () => {
      update()
      draw()
      animationFrameId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [gameStarted, score])

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="border border-gray-700 rounded-lg cursor-none"
      />
      <Button
        onClick={() => setGameStarted(prev => !prev)}
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        {gameStarted ? 'Pause Game' : 'Start Game'}
      </Button>
    </div>
  )
} 
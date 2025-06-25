export default function PitchPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        src="/chatbot.pdf#zoom=fit&scrollbar=0&toolbar=0&navpanes=0"
        className="w-full h-full border-0"
        title="Chatbot Pitch"
        style={{ 
          width: '100vw', 
          height: '100vh',
          transform: 'scale(1)',
          transformOrigin: '0 0'
        }}
      />
    </div>
  );
}
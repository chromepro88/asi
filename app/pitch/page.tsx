export default function PitchPage() {
  return (
    <div className="w-screen h-screen">
      <iframe
        src="/chatbot.pdf#zoom=page-fit"
        className="w-full h-full border-0"
        title="Chatbot Pitch"
        style={{ 
          width: '100vw', 
          height: '100vh'
        }}
      />
    </div>
  );
}
export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-white px-5 py-8 flex flex-col 
      h-[clamp(700px,80vh,850px)]
      min-h-[700px]  
      max-h-[850px]  
      overflow-y-auto
    "
    >
      {children}
    </div>
  );
}

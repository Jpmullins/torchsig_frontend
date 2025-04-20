export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        className="px-6 py-3 rounded-lg shadow bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
      >
        {children}
      </button>
    );
  }
  
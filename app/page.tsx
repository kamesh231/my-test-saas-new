export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          🚀 Welcome to AutoSaaS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your SaaS app is live and ready to build!
        </p>
        <div className="bg-gray-100 p-6 rounded-lg max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">What's included:</h2>
          <ul className="text-left space-y-2">
            <li>✅ Next.js 14 with App Router</li>
            <li>✅ TypeScript</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ ESLint configured</li>
            <li>✅ Ready for deployment</li>
          </ul>
        </div>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Next steps:</strong> Run <code className="bg-blue-100 px-2 py-1 rounded">npm install</code> and <code className="bg-blue-100 px-2 py-1 rounded">npm run dev</code> to start developing
          </p>
        </div>
      </div>
    </main>
  )
}

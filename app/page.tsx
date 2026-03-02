import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">AI Chat Assistant</h1>
      <p className="mt-4 text-gray-500">AWS Amplify + Amazon Bedrock</p>
      <Link
        href="/chat"
        className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        チャットを始める
      </Link>
    </main>
  )
}

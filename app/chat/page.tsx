'use client';

import { generateClient } from 'aws-amplify/api';
import { useAIConversation } from '@aws-amplify/ui-react-ai';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

export default function ChatPage() {
  const [
    { messages, isLoading },
    sendMessage,
  ] = useAIConversation('chat', { client });

  return (
    <main className="flex flex-col h-screen max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chat Assistant</h1>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content.map((content, i) =>
                content.type === 'text' ? <p key={i}>{content.text}</p> : null
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-gray-500">
              考え中...
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.elements.namedItem('message') as HTMLInputElement;
          if (input.value.trim()) {
            sendMessage({ content: [{ type: 'text', text: input.value }] });
            input.value = '';
          }
        }}
        className="flex gap-2"
      >
        <input
          name="message"
          type="text"
          placeholder="メッセージを入力..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          送信
        </button>
      </form>
    </main>
  );
}

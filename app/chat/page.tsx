'use client';

import { generateClient } from 'aws-amplify/api';
import { AIConversation, createAIHooks } from '@aws-amplify/ui-react-ai';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();
const { useAIConversation } = createAIHooks(client);

export default function ChatPage() {
  const [{ data: { messages }, isLoading }, handleSendMessage] = useAIConversation('chat');

  return (
    <main className="flex flex-col h-screen max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chat Assistant</h1>
      <div className="flex-1 overflow-hidden">
        <AIConversation
          messages={messages}
          isLoading={isLoading}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </main>
  );
}

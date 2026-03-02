import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  chat: a
    .conversation({
      aiModel: a.ai.model('Claude 3 Haiku'),
      systemPrompt: 'You are a helpful assistant. Answer in the same language as the user.',
    })
    .authorization((allow) => allow.owner()),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

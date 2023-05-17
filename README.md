# My messy starter😅
Just for checking some libraries. It seems that some geo libraries are not working well with nextjs. Using React or svelte might be a better choice 😭
|||
|---|---|
|Node|v18.2.0|


- Pinecone numjs
- LangChain
- MapBox
- cesium
- DeckGL
- Stripe 
  - Session and Payment element example
-  NextAuth for authentication
- Storybook
- Tailwindcss
  - Dark mode
- 3S file uploader 
- Knex
- Postgres
- i18 Multi language
- Axios
- React Hook Form
- React Query


## Run server
```bash
npm run dev

```

## Knex
```
knex migrate:make <name>: Create a new migration file with the given name.
knex migrate:latest: Run all pending migrations.
knex migrate:rollback: Rollback the last batch of migrations.
knex migrate:up <name>: Run the specified migration.
knex migrate:down <name>: Rollback the specified migration.
knex migrate:status: Show the status of all migrations.
```

## langchainjs
https://github.com/hwchase17/langchainjs#readme
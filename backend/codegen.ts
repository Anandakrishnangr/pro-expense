import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/graphql/gen/schema.graphql',
  documents: ['./src/graphql/**/*.graphql'], // adjust path to your client query/mutation folder
  generates: {
    './src/generated/graphql/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo' // if you’re using React/React Native
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
}

export default config

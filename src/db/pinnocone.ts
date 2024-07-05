import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: '29c3e695-8990-40f4-92ff-bdfe9bf48fd2'
});
const index = pc.index('quickstart');

export default index;
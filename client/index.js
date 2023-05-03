const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const name = 'Name'
  const nameIndex = niceList.findIndex(n => n === name)
  const proof = new MerkleTree(niceList).getProof(nameIndex)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof,
    name
  });

  console.log({ gift });
}

main();
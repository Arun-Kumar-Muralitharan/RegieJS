const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

function loadEnv(envName) 
{
  const envPath = path.resolve(__dirname, `../.env.${envName}`);
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log(`✅ Loaded .env.${envName}`);
  } else {
    console.warn(`⚠️  Missing .env.${envName} file`);
  }
}

module.exports = { loadEnv };
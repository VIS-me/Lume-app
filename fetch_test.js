const SUPABASE_URL = "https://jpmhldqmogeiqkmxywdk.supabase.co";
const SUPABASE_KEY = "sb_secret_0SzaMvL1FFrZF56pCNr6sA_D_xHCW7h";

async function run() {
  const url = `${SUPABASE_URL}/rest/v1/finances?select=*&limit=1`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}
run();

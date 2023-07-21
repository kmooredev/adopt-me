const cache = {};
let key = process.env.CLIENT_ID;
let secret = process.env.CLIENT_SECRET;

// now working
const getAccessToken = async (apiUrl) => {
  if (cache[apiUrl]) {
    return cache[apiUrl];
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
  });
  console.log(response);
  const data = await response.json();
  const accessToken = data.access_token;
  cache[apiUrl] = accessToken;
  console.log(accessToken);
  return accessToken;
};

export default getAccessToken;

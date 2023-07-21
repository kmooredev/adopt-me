const cache = {};

const getAccessToken = async (apiUrl, clientId, clientSecret) => {
  if (cache[apiUrl]) {
    return cache[apiUrl];
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });
  console.log(response);
  const data = await response.json();
  const accessToken = data.access_token;
  cache[apiUrl] = accessToken;
  console.log(accessToken);
  return accessToken;
};

export default getAccessToken;

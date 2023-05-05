export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts};
  console.log("Fetch running")
  
  const res = await fetch(`https://soles-for-christ.herokuapp.com/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json', 
    }
  });
  console.log('fetchFromAPI', res.json())
  const data = await res.json();
  console.log('data', {data})
  return data;
}



export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts};

  const res = await fetch(`https://soles-for-christ.herokuapp.com/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.json()
}
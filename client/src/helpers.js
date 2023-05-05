export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts};
  console.log("Fetch running")
  const res = await fetch(`https://soles-for-christ.herokuapp.com/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    }
  });
  return res.json()
}

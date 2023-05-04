

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts};

  const res = await fetch(`https://soles-for-christ.herokuapp.com/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const clonedRes = res.clone();

  const data = await res.json();
  console.log('clonedRes', {clonedRes})
  console.log('data', {data})
  return { response: clonedRes, data }
  
}

(async () => {
  const rawResponse = await fetch('http://localhost:8000/api/storeLog', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({url:window.location.href.toString()})
  });
})();



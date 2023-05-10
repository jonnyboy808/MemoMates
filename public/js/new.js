const newFormHandler = async function(event) {
    event.preventDefault();
  
      // queryselector for input and textarea
    const title = document.querySelector('input[name="connection-title"]').value;
    const body = document.querySelector('textarea[name="connection-body"]').value;
  
    await fetch(`/api/note`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/new-connection');
  };
  
  document
    .querySelector('#new-connection-form')
    .addEventListener('submit', newFormHandler);
  
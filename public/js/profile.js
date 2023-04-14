  const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#collection-name').value.trim();
    const description = document.querySelector('#collection-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/product`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create product');
        // TODO create collection failure message instead of an alert
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/collections/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete product');
        // TODO delete collection failure message instead of an alert
      }
    }
  };
  
  document
    .querySelector('.new-collection-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.collection-list')
    .addEventListener('click', delButtonHandler);
  
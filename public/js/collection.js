const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#product-name').value.trim();
  const description = document.querySelector('#product-desc').value.trim();

  if (name && product_date && description && product_location) {
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({ name, product_date, description, product_location }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create product');
      //TODO create product failure message instead of an alert
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/products/${id}`, {
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
  .querySelector('.new-product-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.product-list')
  .addEventListener('click', delButtonHandler);

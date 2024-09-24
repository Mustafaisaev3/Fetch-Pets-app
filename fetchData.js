// Функция для выполнения GET-запроса
async function fetchPetsByStatus(status) {
  try {
    const response = await fetch(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Выводим данные в консоль данных в консоль
fetchPetsByStatus('available')
  .then(pets => {
    console.log('Pets:', pets);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
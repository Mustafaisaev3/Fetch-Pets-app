interface Pet {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: {
    id: number;
    name: string;
  }[];
  status: string;
}

// Функция для выполнения GET-запроса
async function fetchPetsByStatus(status: string): Promise<Pet[]> {
  try {
    const response = await fetch(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Pet[] = await response.json();
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
  
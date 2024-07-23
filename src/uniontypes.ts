function printId(id: string | number) {
  console.log(`ID: ${id}`);
}

printId(101); // válido
printId("202"); // válido
// printId(true);  // inválido, pois 'boolean' não está no union type


type Response = 'success' | 'error';

function handleResponse(response: Response) {
    if (response === 'success') {
        console.log('Operation was successful');
    } else {
        console.log('An error occurred');
    }
}

handleResponse('success'); // 'Operation was successful'
handleResponse('error');   // 'An error occurred'
// handleResponse('failure'); // inválido, pois 'failure' não está no union type

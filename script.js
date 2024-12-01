// Hämtar Todos från API
async function fetchTodos() {
    const response = await fetch(ca341d31-5f47-4159-9d1a-dc6e66509c2a);
    const todos = await response.json();
    renderTodos(todos);  // Rendera todos på sidan
}

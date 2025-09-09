import { SimpleHttpClient } from "./clases/SimpleHttpClient";
import { FetchAdapter } from "./clases/FetchAdapter";
import { AxiosAdapter } from "./clases/AxiosAdapter";

export async function runAdapter() {
  console.log("=== ADAPTER: Fetch ⇢ Axios ===");

  const httpClient = new SimpleHttpClient(new FetchAdapter());

  try {
    const todoWithFetch = await httpClient.get<any>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(
      `Con fetch: { userId: ${todoWithFetch.userId}, id: ${todoWithFetch.id}, title: '${todoWithFetch.title}', completed: ${todoWithFetch.completed} }`
    );

    httpClient.setAdapter(new AxiosAdapter());

    const todoWithAxios = await httpClient.get<any>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(
      `Con axios: { userId: ${todoWithAxios.userId}, id: ${todoWithAxios.id}, title: '${todoWithAxios.title}', completed: ${todoWithAxios.completed} }`
    );
  } catch (error) {
    console.error("Error en la consulta HTTP:", error);
  }

  console.log("");
}

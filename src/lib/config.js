const API_PORT = 5000;
const API_VERSION = 'v1';

const API_SERVER = `http://127.0.0.1:${API_PORT}`;
const API_URL = `${API_SERVER}/api/${API_VERSION}`;

const DEFAULT_SCOPE = 'TODOS/POST TODOS/GET TODOS/GET/{todo_id} TODOS/PUT/{todo_id} TODOS/DELETE/{todo_id}';

const HEALTH_CHECK_URL = `${API_URL}/health`;
const API_GET_TODOS_URL = `${API_URL}/todos`;
const API_GET_TODO_ID_URL = `${API_URL}/todos/:id`;
const API_POST_TODO_URL = `${API_URL}/todos`;
const API_PUT_TODO_ID_URL = `${API_URL}/todos/:id`;
const API_DELETE_TODO_ID_URL = `${API_URL}/todos/:id`;


export {
    API_URL,
    API_SERVER,
    HEALTH_CHECK_URL,
    DEFAULT_SCOPE,
    API_GET_TODOS_URL,
    API_GET_TODO_ID_URL,
    API_POST_TODO_URL,
    API_PUT_TODO_ID_URL,
    API_DELETE_TODO_ID_URL,
}




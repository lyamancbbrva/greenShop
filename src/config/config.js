const BASE_URL = import.meta.env.VITE_BASE_URL
const VITE_EDITOR_API_KEY = import.meta.env.VITE_EDITOR_API_KEY

const configObj = {
    base : BASE_URL,
    editorKey: VITE_EDITOR_API_KEY 
}

export default configObj
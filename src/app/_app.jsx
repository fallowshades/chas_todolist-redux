'use client'
import { Provider } from 'react-redux'
import store from '@/store/store.js' // Adjust the path according to your file structure
import todoList from '@/components/todoList'
const _app = () => {
  return (
    <Provider store={store}>
      <todoList />
    </Provider>
  )
}
export default _app

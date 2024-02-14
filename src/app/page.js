'use client'
import StoreProvider from './StoreProvider'
import TodoList from '@/components/TodoList'
export default function Home() {
  return (
    <StoreProvider>
      <TodoList />
    </StoreProvider>
  )
}

'use client'
import StoreProvider from './StoreProvider'
import TodoList from '@/components/TodoList'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <StoreProvider>
        <TodoList />
      </StoreProvider>
    </div>
  )
}

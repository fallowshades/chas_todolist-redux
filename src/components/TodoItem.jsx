import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
const TodoItem = ({ todo, toggleDone, deleteTodo }) => {
  return (
    <Card className="bg-muted">
      <Card className="bg-muted">
        <CardHeader>
          <p style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.title}
          </p>
        </CardHeader>
        <Separator />
        <CardContent>
          <div>{/* Add content here if needed */}</div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => toggleDone(!todo.done)}>Toggle Done</Button>
          <Button onClick={deleteTodo}>Delete</Button>
        </CardFooter>
      </Card>
    </Card>
  )
}

export default TodoItem

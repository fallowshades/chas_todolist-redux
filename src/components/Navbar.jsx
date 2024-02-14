import ThemeToggle from './ThemeToggle'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-muted">
      <p> todos next level app</p>
      <ThemeToggle />
    </nav>
  )
}
export default Navbar

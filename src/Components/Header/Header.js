import './header.scss'

const Header = ({ score, startGame }) => {
  return (
    <header>
      {/* <Button />
      <Button />
      <Button /> */}
      <button onClick={startGame}>Start</button>
      <div>Score: {score}</div>
    </header>
  )
}

export default Header

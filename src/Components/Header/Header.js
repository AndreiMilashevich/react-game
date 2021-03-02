import './header.scss'

const Header = ({ score, startGame, inGame }) => {
  return (
    <header>
      {/* <Button />
      <Button />
      <Button /> */}
      <div>Whack-a-mole! {score}</div>
      <div className="d-flex justify-content-center"><button className="button_fullscreen" onClick={() => document.documentElement.requestFullscreen()}>Full Screen</button></div>
      <button className="button_start" onClick={startGame}>{inGame ? 'Stop' : 'Start'}</button>
    </header>
  )
}

export default Header

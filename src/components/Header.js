import logo from '../assets/img/monograma.png';

function Header() {
  return (
    <header style={{ background: '#005C8B', margin: '0px' }}>
      <div class="container">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;

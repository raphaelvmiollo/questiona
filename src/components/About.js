import imgExemplo from '../assets/img/imgExemplo.png';

function Footer() {
  return (
    <div className="container">
      <section class="conteudo" style={{ marginTop: '80px' }}>
        <div className="searchResults" style={{ marginTop: '58px' }}>
          <div className="row">
            <div className="col-9">
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  color: '#f29559',
                  fontSize: '47px',
                }}
              >
                SOBRE
              </h1>
              <p style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
                Non magna massa phasellus pellentesque ac. Malesuada eget augue
                ultricies ornare eget eget urna. Dui, vehicula sed ac tortor
                libero platea penatibus. Consectetur risus eget aenean arcu.
                Felis, ipsum eu a id risus, metus. Velit velit, viverra mi, in
                blandit. Nunc, sit pharetra neque natoque eget. Massa cursus
                nullam posuere nulla non erat. Cursus amet, ut neque, urna id
                purus volutpat dui, sed. Curabitur turpis velit, cras vel tellus
                et gravida morbi odio. Et convallis ut volutpat non, mi egestas
                ut est facilisis. Facilisis non urna sollicitudin ut enim fames.
                Rhoncus, tellus libero libero, diam semper id habitasse ornare.
                Sem faucibus diam, viverra arcu, viverra platea. Sit velit,
                quisque adipiscing faucibus rutrum faucibus vulputate blandit
              </p>
            </div>
            <div className="col-3">
              <img src={imgExemplo} alt="imgExemplo" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={imgExemplo} alt="imgExemplo" />
            </div>
            <div className="col-9">
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  color: '#f29559',
                  fontSize: '47px',
                }}
              >
                COMO
                <br />
                USAR
              </h1>
              <p style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
                Non magna massa phasellus pellentesque ac. Malesuada eget augue
                ultricies ornare eget eget urna. Dui, vehicula sed ac tortor
                libero platea penatibus. Consectetur risus eget aenean arcu.
                Felis, ipsum eu a id risus, metus. Velit velit, viverra mi, in
                blandit. Nunc, sit pharetra neque natoque eget. Massa cursus
                nullam posuere nulla non erat. Cursus amet, ut neque, urna id
                purus volutpat dui, sed. Curabitur turpis velit, cras vel tellus
                et gravida morbi odio. Et convallis ut volutpat non, mi egestas
                ut est facilisis. Facilisis non urna sollicitudin ut enim fames.
                Rhoncus, tellus libero libero, diam semper id habitasse ornare.
                Sem faucibus diam, viverra arcu, viverra platea. Sit velit,
                quisque adipiscing faucibus rutrum faucibus vulputate blandit
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

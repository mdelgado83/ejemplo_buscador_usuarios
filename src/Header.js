
export default function Header(props) {

  return <div id="cabecera">
    <img className="logo" src={process.env.PUBLIC_URL+"/sun.webp"} alt="logo de la pagina"/>
    <h3 className="mensaje">Manuel Delgado Morte</h3>
  </div>
}
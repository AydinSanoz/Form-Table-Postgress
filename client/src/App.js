import PhoneBookForm from './components/PhoneBookForm'
import InformationTable from './components/InformationTable'
import style from './components/styles'
import code from './assets/codeAndcode.jpeg'



function App() {
  return (
    <section style = {style.section}>
      <img style = {style.cw} src = {code} alt = 'codeTeam.jpeg'/>
      <PhoneBookForm/>
      <InformationTable/>
    </section>
    
  );
}

export default App;

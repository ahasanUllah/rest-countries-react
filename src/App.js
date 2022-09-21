import './App.css';
import Countries from './components/Countries/Countries';

function App() {
   return (
      <div className="App">
         <Countries></Countries>
      </div>
   );
}

// function LoadCountries() {
//    const [countries, setCountries] = useState([]);
//    useEffect(() => {
//       fetch('https://restcountries.com/v2/all')
//          .then((res) => res.json())
//          .then((data) => setCountries(data));
//    }, []);
//    return (
//       <div>
//          <h2>Let's Travel</h2>
//          <h3>{countries.length}</h3>
//          {countries.map((country) => (
//             <DisplayCountries name={country.name} population={country.population}></DisplayCountries>
//          ))}
//       </div>
//    );
// }
// const DisplayCountries = (props) => {
//    return (
//       <div>
//          <h2>{props.name}</h2>
//          <p>Population: {props.population}</p>
//       </div>
//    );
// };
export default App;

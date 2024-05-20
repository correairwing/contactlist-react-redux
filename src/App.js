
import { Provider } from 'react-redux';
import { store } from './store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';



function App() {
  return (
    <Provider store={store}>
     <div className='container'>
        <h1>Lista de Contatos React</h1>
        <ContactForm />
        <ContactList />
     </div>
    </Provider>
  );
}

export default App;

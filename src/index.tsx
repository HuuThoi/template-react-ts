import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from 'my-redux/store';
import { ThemeProvider } from 'contexts/themes/ThemeProvider';
import { ErrorBoundaryClassComponent } from 'components/error-boundaries/ErrorBoundaryClassComponent';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  // credentials:'include'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundaryClassComponent>
          <App />
        </ErrorBoundaryClassComponent>
      </ThemeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

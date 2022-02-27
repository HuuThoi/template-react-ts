import { AppRouter } from 'routes/routes';
import { useTheme } from 'contexts/themes/hookTheme';
import { LanguageProvider } from 'contexts/languages/context-with-library/LanguageProvider';
import { LanguageProvider2 } from 'contexts/languages/context-only/LanguageProvider2';
import { setupInterceptorsTo } from 'services/http-service/interceptor';
import { useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';

const API_URL1 = "http://nois.newoceaninfosys.com:1239";
const API_URL = "https://plexusdashboardnewdev.azurewebsites.net/api";

function App() {
  // const dispatch = useDispatch();
  // let bankState = useSelector((state: AppState) => state.bankReducer);
  // const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  // function depositClick(data: number) {
  //   depositMoney({ amount: data, name:"" });
  // }

  // function withDrawMoneyClick(data: number): void {
  //   withdrawMoney({ amount: data , name:""});
  // }

  // function bankruptClick(): void {
  //   bankrupt();
  // }

  //int axios
  
  const intAxios =() =>{
    setupInterceptorsTo(axios);
    axios.defaults.baseURL = API_URL;
  }

  useEffect(() => {
    intAxios();
  });

  return (
    <main>
      {/* <LanguageProvider2> */}
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
      {/* </LanguageProvider2> */}
    </main>
  )
}

export default App;

import { AppRouter } from 'routes/routes';
import { useTheme } from 'contexts/themes/hookTheme';
import { LanguageProvider } from 'contexts/languages/context-with-library/LanguageProvider';
import { LanguageProvider2 } from 'contexts/languages/context-only/LanguageProvider2';

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
  // }ß

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

import { AppRouter } from 'routes/routes';
import ThemeButton from 'components/themes/ThemeButton';
import { useTheme } from 'contexts/themes/hookTheme';

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

  const { theme } = useTheme();
  return (
    <main>
      <AppRouter />
    </main>
  )
}

export default App;

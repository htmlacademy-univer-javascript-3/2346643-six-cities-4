import Main from '../pages/main';
import type { MainParams } from '../pages/main';


function App({ placesCount }: MainParams): JSX.Element {
  return (
    <Main placesCount={placesCount} />
  );
}

export default App;

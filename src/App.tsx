import { ClientProvider } from "./providers/ClientProvider";
import { RoutesMain } from "./routes";

const App = () => {
  return (
    <>
      <ClientProvider>
        <RoutesMain />
      </ClientProvider>
    </>
  );
};

export default App;

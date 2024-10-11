import { Results } from "./components/Results";
import { Summary } from "./components/Summary";

export const App = () => {
  return (
    <main className="font-haken w-full h-[100vh] flex justify-center sm:items-center">
      <div className="flex flex-col sm:flex-row sm:max-w-2xl shadow-2xl sm:rounded-[30px]">
        <Results />
        <Summary />
      </div>
    </main>
  );
};

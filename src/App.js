import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./scenes/dashboard";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacs";
// import Bar from "./scenes/bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path={'/'} element={<DashBoard />} />
              {/*<Route path={'/team'} element={<Team />} />*/}
              {/*<Route path={'/contacts'} element={<Contacts />} />*/}
              {/*<Route path={'/invoices'} element={<Invoices />} />*/}
              {/*<Route path={'/form'} element={<Form />} />*/}
              {/*<Route path={'/bar'} element={<Bar />} />*/}
              {/*<Route path={'/pie'} element={<Pie />} />*/}
              {/*<Route path={'/line'} element={<Line />} />*/}
              {/*<Route path={'/faq'} element={<FAQ />} />*/}
              {/*<Route path={'/geography'} element={<Geography />} />*/}
              {/*<Route path={'/calendar'} element={<Calendar />} />*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

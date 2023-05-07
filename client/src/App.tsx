import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import StockChart from './pages/stockPage';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Admin disableTelemetry>
        <Resource name="stockChart" />
        <CustomRoutes noLayout>
          <Route path="/stockChart" element={<StockChart />} />
        </CustomRoutes>
      </Admin>
    </>
  );
}

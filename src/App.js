import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar, Tabs, Tab, useTheme, Box } from '@material-ui/core';
import BoxQuestion from './view/components/BoxQuestion';
import BoxQuestion2 from './view/components/BoxQuestion2';
import AccountTab from './view/components/AccountTab';
import { maskTotal } from './util';
import SplashScreen from './SplashScreen';

function App() {
  const theme = useTheme();

  const [isFirstTime, setIsFirstTime] = useState(true);

  const [form1, setForm1] = useState({
    numOfProductsToManage: 1,
    isDone: false
  })

  const [form2, setForm2] = useState({
    products: [],
    isDone: false
  })

  const [tabIndex, setTabIndex] = useState(0);
  const [totalMoneyPay, setTotalMoneyPay] = useState({});

  const handleChange = (e, newIndex) => {
    setTabIndex(newIndex);
  }

  const updateTotalMoneyToPay = (value, total) => {
    setTotalMoneyPay({ ...totalMoneyPay, ["" + value]: total })
  }

  const onClickListerBackAccountTab = (e) => {
    setForm2({
      products: form2.products,
      isDone: false
    })

    setTotalMoneyPay([])
  }

  if (isFirstTime) {
    
    return <SplashScreen setIsFirstTime={setIsFirstTime}/>
  }


  return (
    <Box bgcolor={theme.palette.background.paper}>
      <AppBar position="static">
        <Toolbar>
          <Box mt={(form2.isDone && form1.isDone) ? 1 : 0}>
            <Typography variant="h6">
              <b>Birra Controll</b><br/>
            </Typography>

            {(form2.isDone && form1.isDone) &&
              <Typography variant="caption" color='secondary'>
                <b>{maskTotal(Object.values(totalMoneyPay).reduce((total, numero) => total + numero, 0))} AKZ</b>
              </Typography>
            }
          </Box>
        </Toolbar>
        {form2.isDone &&
          <Tabs value={tabIndex} onChange={handleChange} variant='scrollable' scrollButtons="auto">
            {form2.products.map((product, i) =>
              <Tab wrapped key={i} label={product.name} />
            )}
          </Tabs>
        }
      </AppBar>

      {!form1.isDone &&
        <BoxQuestion setForm1={setForm1} />
      }
      {(!form2.isDone && form1.isDone) &&
        <BoxQuestion2 numThingsManage={form1.numOfProductsToManage} setForm1={setForm1} setForm2={setForm2} products={form2.products} />
      }

      {(form2.isDone && form1.isDone) && form2.products.map((product, i) =>
        <AccountTab key={i} value={i} onClickListerBackAccountTab={onClickListerBackAccountTab} totalMoneyPay={totalMoneyPay} updateTotalMoneyToPay={updateTotalMoneyToPay} productSelected={product} isHidden={tabIndex !== i} />
      )}

    </Box>
  );
}

export default App;

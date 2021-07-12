import { TextField, Box, Typography, IconButton, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from 'react';
import { maskTotal } from '../../util';

function AccountTab(props) {

  const [product, setProduct] = useState({
    ...props.productSelected,
    price: 0,
    qtd: 1
  })

  const [showFieldPrice, setShowFieldPrice] = useState(true)

  const onChangeListenerPrice = (event) => {
    setProduct({ ...product, price: Number(event.target.value) })
    props.updateTotalMoneyToPay(props.value, Number(event.target.value) * product.qtd)
  }

  const onClickListenerPlusLess = (operador) => (e) => {
    let qtd;

    if (operador === "+")
      qtd = product.qtd + 1;
    else if (operador === "-" && product.qtd && product.qtd !== 1)
      qtd = product.qtd - 1;
    else
      qtd = product.qtd
    
      
    setProduct({ ...product, qtd})

    setShowFieldPrice(false)

    props.updateTotalMoneyToPay(props.value, product.price * qtd)
  }


  return (

    <Box p={2} pt={1.5} justifyContent='center' alignContent='center' hidden={props.isHidden}>

      {!props.isHidden &&
        (
          <>

            <Button onClick={props.onClickListerBackAccountTab} startIcon={<ArrowBackIcon />}>Voltar</Button>
            <br />
            <br />
            


            {showFieldPrice &&
              <form onSubmit={() => setShowFieldPrice(false)}>
                <br />
                <TextField
                  variant='outlined'
                  size='medium'
                  label={'Preço d(x) ' + product.name}
                  placeholder='Preço'
                  type={"number"}
                  value={product.price + ""}
                  onChange={onChangeListenerPrice}
                  fullWidth
                  required />
              </form>
            }

            {!showFieldPrice &&
              <Button onClick={() => setShowFieldPrice(true)} size='small' color='secondary' variant={'contained'} disableElevation>Alterar preço d {product.name} ({maskTotal(product.price)} AKZ)</Button>
            }
            <br />
            <br />
            <br />
            <br />
            <br />

            <Box display='flex' justifyContent='center'>

              <IconButton onClick={onClickListenerPlusLess("-")} style={{ marginRight: 8 }}>
                <RemoveIcon fontSize="large" />
              </IconButton>
              <Box display='flex' justifyContent='center' alignItems='center' mx={2.5} width='80px' height='80px' borderColor='secondary.main' borderRadius='50%' bgcolor='secondary.main'>
                <Typography variant='h4' align='center'>
                  {product.qtd}
                </Typography>

              </Box>
              <IconButton onClick={onClickListenerPlusLess("+")} style={{ marginRight: 8 }}>
                <AddIcon fontSize="large" />
              </IconButton>
            </Box>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Typography align='center' variant='h4'>
              <b>Total: {maskTotal('' + product.qtd * product.price)} kz</b>
            </Typography>

          </>
        )
      }

    </Box>

  );
}

export default AccountTab;
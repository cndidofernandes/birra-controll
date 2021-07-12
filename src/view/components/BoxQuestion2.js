import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField, Button, makeStyles, Divider } from '@material-ui/core';

const useStyle = makeStyles(theme => ({

    BoxQuestion: {
        width: '90vw',
        [theme.breakpoints.up('md')]: {
            width: '60vw'
        }
    }

}))

function BoxQuestion2(props) {
    const classes = useStyle();

    const numberOfFieldsToBuild = []

    const [namesOfProducts, setNamesOfProducts] = useState({})

    for (let i = 0; i < props.numThingsManage; i++) {
        numberOfFieldsToBuild.push(i + 1)
    }

    const nextStepOnClick = (e) => {
        let products = []

        for (let i = 0; i < props.numThingsManage; i++)
            products.push({ name: namesOfProducts['prod' + (i + 1)] })

        props.setForm2({
            products,
            isDone: true
        })
    }

    const onClickListernBack = (e) => {

        props.setForm1({
            numOfProductsToManage: 1,
            isDone: false
        })

    }

    return (
        <Box display='flex' justifyContent='center' alignContent='center' mt={10}>
            <Box className={classes.BoxQuestion} p={2} px={2.5} border={1} borderColor='#e8e8e8'>
                <form onSubmit={nextStepOnClick}>
                    <br />

                    <Typography variant='subtitle1'><b>Preencha os campos</b></Typography>

                    {
                        numberOfFieldsToBuild.map((v, i) =>
                            <TextField
                                key={i}
                                style={{ marginTop: 14 }}
                                variant='outlined'
                                size='small'
                                label={'Produto ' + v}
                                placeholder={`Digite o nome do ${v}º mambo`}
                                inputProps={{ type: 'text', maxLength: 15, minLength: 3 }}
                                autoFocus={(i === 0) ? true : false}
                                value={namesOfProducts['prod' + v] || ''}
                                onChange={(e) => { setNamesOfProducts({ ...namesOfProducts, ['prod' + v]: e.target.value }) }}
                                fullWidth
                                required />
                        )
                    }

                    <br /> <br />
                    <Button type='submit' fullWidth disableElevation size={'large'} variant='contained' color='secondary'>Bora gerir!</Button>
                    <br /><br />
                    <Divider />
                    <br />
                    <Button onClick={onClickListernBack} fullWidth disableElevation size={'small'} variant='contained' color='primary'>Voltar</Button>
                    <br />
                </form>
            </Box>
        </Box>
    );
}

export default BoxQuestion2;
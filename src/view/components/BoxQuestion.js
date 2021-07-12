import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({

    BoxQuestion: {
        width: '90vw',
        [theme.breakpoints.up('md')]: {
            width: '60vw'
        }
    }

}))

function BoxQuestion(props) {
    const classes = useStyle();

    const [numThingsManage, setNumThingsManage] = useState(1)

    const nextQuestionOnClick = (e) => {
        props.setForm1({
            numOfProductsToManage: numThingsManage,
            isDone: true
        });
    }

    return (
        <Box display='flex' justifyContent='center' alignContent='center' mt={10}>
            <Box className={classes.BoxQuestion} p={2} px={2.5} border={1} borderColor='#e8e8e8'>
                <form onSubmit={nextQuestionOnClick}>
                    <br />
                    <Typography variant='subtitle1'><b>Vai gerir quantos mambos?</b></Typography>
                    <br />
                    <TextField
                        variant='outlined'
                        size='small'
                        placeholder='Digite o número de produtos quer controlar'
                        inputProps={{ type: 'number', max: 5, min: 1 }}
                        value={numThingsManage}
                        onChange={(e) => setNumThingsManage(e.target.value)}
                        fullWidth
                        autoFocus
                        required />
                    <br />
                    <br />
                    <Button type='submit' disableElevation fullWidth size='large' variant='contained' color='secondary'>Prosseguir</Button>
                    <br />
                    <br />
                </form>
            </Box>
        </Box>
    );
}

export default BoxQuestion;
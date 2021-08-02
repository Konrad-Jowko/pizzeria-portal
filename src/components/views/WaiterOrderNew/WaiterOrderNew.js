import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const products = [
  {
    id:'cake',
    class:'small',
    name:'Zio Stefano\'s Doughnut',
    price:9,
  },
  {
    id:'breakfast',
    class:'small',
    name:'Zia Giulia\'s Breakfast',
    price:9,

    params:[
      {
        label:'Coffee type',
        type:'radios',
        options:[
          {
            label:'Latte',
            price:1,
            default:true,
          },
          {
            label:'Cappuccino',
            price:1,
          },
          {
            label:'Espresso',
            price:1,
          },
          {
            label:'Macchiato ',
            price:1,
          },
        ],
      },
    ],
  },
  {
    id:'salad',
    name:'Nonno Alberto\'s Salad',
    price:9,
    description:'A delicious salad made of fresh, home-grown products on a crispy lettuce base.',

    params:[
      {
        label:'Ingredients',
        type:'checkboxes',
        options:[
          {
            label:'Cucumber',
            price:1,
            default:true,
          },
          {
            label:'Tomatoes',
            price:1,
            default:true,
          },
          {
            label:'Olives',
            price:1,
            default:true,
          },
          {
            label:'Feta cheese',
            price:1,
          },
          {
            label:'Cheese',
            price:1,
          },
          {
            label:'Fresh herbs',
            price:1,
            default:true,
          },
          {
            label:'Black pepper',
            price:1,
          },
        ],
      },
    ],
  },
];

const dummyOrder = false;



const WaiterOrderNew = () => (
  <div className={styles.component}>
    <Paper >
      <Grid
        className={styles.grid}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing="1"
      >
        <h2 className={styles.h2}> New order:  </h2>
        <FormControl variant="outlined">
          <InputLabel className={styles.label} id="demo-simple-select-outlined-label">Table no.</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Table no."
            className={styles.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='6'>6</MenuItem>
          </Select>
        </FormControl>
        <div>
          <h3 className={styles.h3}> Order items: </h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Options</TableCell>
                <TableCell>Product Base Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Product Final Price</TableCell>
                <TableCell>Add to Order</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(product => (
                <TableRow key={product.id}>
                  <TableCell> <h3>{product.name}</h3></TableCell>
                  <TableCell>
                    {product.params ? product.params.map(param => (
                      <div key={param.label}>
                        <h4> {param.label}: </h4>
                        {param.options.map(option => (
                          <FormControlLabel
                            key = {option.label}
                            control={
                              <Checkbox
                                name={option.label}
                                color="primary"
                              />
                            }
                            label={option.label}
                          />
                        ))}
                      </div>
                    )) : 'None'}
                  </TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>  <TextField id="outlined-basic" type="number" label="Quantity" placeholder="0" variant="outlined" /></TableCell>
                  <TableCell>${product.price} </TableCell>
                  <TableCell><Button variant="contained" color="primary" type="submit">Add to Order</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <h2> Order summary: </h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Chosen Product</TableCell>
              <TableCell>Chosen Options</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Special Requests</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { dummyOrder ? dummyOrder.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell> {product.params ? product.params.map(param => (
                  <div key={param.label}>
                    <h4> {param.label}: </h4>
                    {param.options.map(option => (
                      option.label
                    ))}
                  </div>
                )) : 'None'}
                </TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>${product.price * product.quantity}</TableCell>
                <TableCell><TextField id="outlined-basic" type="textarea" label="Request" variant="outlined" /></TableCell>
              </TableRow>
            )) : <TableCell> Please, collect the order from the clients, before finalizing.</TableCell>}
            <TableRow>
              <TableCell> <h3>Final Price: ${0}</h3> </TableCell>
              <TableCell><Button variant="contained" color="primary" type="submit">Finalize Order</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Paper>
  </div>
);

export default WaiterOrderNew;

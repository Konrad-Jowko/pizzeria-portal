import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const dummyOrders = [
  {
    orderDailyNumber: 1,
    tdNumber: '3',
    status: 'Ready',
    orderDetails: [
      {
        id:'cake',
        class:'small',
        name:'Zio Stefano\'s Doughnut',
        price:9,
        quantity:3,
        request: '',
      },
      {
        id:'breakfast',
        class:'small',
        name:'Zia Giulia\'s Breakfast',
        price:9,
        quantity: 2,
        request: 'soy milk',

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
            ],
          },
        ],
      },
      {
        id:'breakfast',
        class:'small',
        name:'Zia Giulia\'s Breakfast',
        price:9,
        quantity: 1,
        request: 'brown sugar, no tomato',

        params:[
          {
            label:'Coffee type',
            type:'radios',
            options:[
              {
                label:'Macchiato ',
                price:1,
              },
            ],
          },
        ],
      },
    ]},
  {
    orderDailyNumber: 2,
    tdNumber: '6',
    status: 'In progress',
    orderDetails: [
      {
        id:'cake',
        class:'small',
        name:'Zio Stefano\'s Doughnut',
        price:9,
        quantity:1,
        request: '',
      },
      {
        id:'breakfast',
        class:'small',
        name:'Zia Giulia\'s Breakfast',
        price:9,
        quantity: 1,
        request: '2x sugar',

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
            ],
          },
        ],
      },
    ]},
  {
    orderDailyNumber: 3,
    status: 'In queue',
    tdNumber: '3349Z',
    orderDetails: [
      {
        id:'breakfast',
        class:'small',
        name:'Zia Giulia\'s Breakfast',
        price:9,
        quantity: 4,
        request: '',

        params:[
          {
            label:'Coffee type',
            type:'radios',
            options:[
              {
                label:'Macchiato',
                price:1,
                default:true,
              },
            ],
          },
        ],
      },
    ]},
];



const Kitchen = () => (
  <div className={styles.component}>
    <Paper >
      <h2 className={styles.h2}> Pending Orders:</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order No.</TableCell>
            <TableCell>Table/Delivery No.</TableCell>
            <TableCell>Order Items</TableCell>
            <TableCell>Change Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyOrders.map(order => (
            <TableRow key={order.orderDailyNumber}>
              <TableCell><h1>{order.orderDailyNumber}</h1></TableCell>
              <TableCell><h1>{order.tdNumber}</h1></TableCell>
              <TableCell>
                {order.orderDetails.map(element => (
                  <div className={styles.element} key={element.id}>
                    <h3>{element.name} x{element.quantity}</h3>
                    {element.params ? element.params.map(param => (
                      <div key={param.label}>
                        <h4>{param.label}:</h4>
                        {param.options.map(option =>
                          <h4 key={option.label}>{option.label}</h4>
                        )}
                      </div>
                    )) : <h5>No Params</h5>}
                    {element.request}
                  </div>
                ))}
              </TableCell>
              <TableCell>
                <Button className={styles.button} variant="contained" type="submit">In queue</Button>
                <br/>
                <Button className={styles.button} variant="contained" color="primary" type="submit">In progress</Button>
                <br/>
                <Button className={styles.button} variant="contained" color="secondary" type="submit">Ready</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;

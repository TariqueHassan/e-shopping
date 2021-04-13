import React from 'react';
//import data from './components/MOCK_DATA.json';
import { ShoppingCartIcon } from 'evergreen-ui';
import { Button,Icon, Label, Menu, Table } from 'semantic-ui-react'
const Product = ({ list }) => {
function addToCart(id,product,price){
    alert(product+":  $ "+price);


}
    return (
        <div>
            <h1>Products</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Product Price</Table.HeaderCell>
                        <Table.HeaderCell>Product Option</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                    {
                    list.map((d) =>
                        <Table.Row id={d.id}>
                        <Table.Cell>{d.product}</Table.Cell>
                        <Table.Cell>$ {d.price}</Table.Cell>
                        <Table.Cell><Button onClick={()=>addToCart(d.id,d.product,d.price)}><Icon name="shopping cart" color="green"/></Button></Table.Cell>
                    </Table.Row>)
                    }
                        
                </Table.Body>
            </Table>

        </div>
    );
}




export default Product;
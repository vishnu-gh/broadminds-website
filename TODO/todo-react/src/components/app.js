import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput:'',
            list:[]
        }
    }

    updateInput(value){
        this.setState({
            userInput:value
        });
    }

    addItem(){
        if(this.state.userInput !== ''){
            const userInput = {
                id: Math.random(),
                value:this.state.userInput
            }
            // https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a
            // spread operator
            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list,
                userInput:''
            });
        }
    }

    deleteItem(key){ 
        const list = [...this.state.list]; 
      
        // Filter values and leave value which we need to delete 
        const updateList = list.filter(item => item.id !== key); 
      
        // Update list in state 
        this.setState({ 
          list:updateList, 
        }); 
      
      } 

      render(){ 
        return(<Container> 
      
              <Row style={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center", 
                      fontSize: '3rem', 
                      fontWeight: 'bolder', 
                    }} 
                    >TODO LIST 
                </Row> 
      
               <hr/> 
              <Row> 
              <Col md={{ span: 5, offset: 4 }}> 
      
              <InputGroup className="mb-3"> 
              <FormControl 
                placeholder="add item . . . "
                size="lg"
                value = {this.state.userInput} 
                onChange = {item => this.updateInput(item.target.value)} 
                aria-label="add something"
                aria-describedby="basic-addon2"
              /> 
              <InputGroup.Append> 
                <Button 
                  variant="dark"
                  size="lg"
                  onClick = {()=>this.addItem()} 
                  > 
                  ADD 
                </Button> 
              </InputGroup.Append> 
            </InputGroup> 
      
         </Col> 
       </Row> 
       <Row> 
         <Col md={{ span: 5, offset: 4 }}> 
            <ListGroup> 
              {/* map over and print items */} 
             {this.state.list.map(item => {return( 
      
                <ListGroup.Item variant="dark" action  
                  onClick = { () => this.deleteItem(item.id) }> 
                  {item.value} 
                </ListGroup.Item> 
      
             )})} 
            </ListGroup> 
         </Col> 
       </Row> 
         </Container> 
        ); 
      } 

}

export default App; 
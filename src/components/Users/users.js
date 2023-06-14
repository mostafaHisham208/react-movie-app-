
import React from 'react';

export default class Users extends React.Component {


    constructor() {
        super()
        this.state = {
            users: [
                { name: "Ali", email: "ali@gmail.com" ,isActive: true},
                { name: "Salma", email: "Salma@gmail.com" ,isActive: true},
                { name: "Walaa", email: "Walaa@gmail.com",isActive: false },
                { name: "Ahmed", email: "Ahmed@gmail.com",isActive: true },
            ],
            isAuthenticated: true
        }
    }

    handleToggle=()=>{

        this.setState({isAuthenticated:(this.state.isAuthenticated)?false:true})
    }

    render() {


        return <>

            {/* {this.state.isAuthenticated ? <ul>
                {this.state.users.map((user, index) => {


                    return <li key={index}>{user.name}</li>

                })}
            </ul> : <p>You must Login First</p>} */}

            {this.state.isAuthenticated&&<ul>
                {this.state.users.map((user, index) => {
                    if(user.isActive){
                        return <li key={index}>{user.name}</li>
                    }

                    

                })}
            </ul> }

            <button onClick={()=>{this.handleToggle()}} className='btn btn-success'>Toggle</button>


        </>
    }


}

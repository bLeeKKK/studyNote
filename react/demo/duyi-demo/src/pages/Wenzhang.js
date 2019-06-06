import React from 'react';

class Wenzhang extends React.Component {
    render () {
        console.log(this.props.location,'location')
        // const { arouth,title,id } = this.props.location.state;
        return (<div>
                    <div>
                        {/* { arouth } */}
                    </div>  
                    <div>
                        {/* { title } */}
                    </div>  
                    <div>
                        {/* { id } */}
                    </div>  
                </div>)
    }
}

export default Wenzhang;
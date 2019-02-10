import React from 'react';
import { Link } from 'react-router-dom';

class Topics extends React.Component {
    state = {
        articleList: JSON.parse( localStorage.getItem('articleList') ) || []
    }
    render () {
        return (<ul>
                    { this.state.articleList.map( item => (<li key={ item.id }>
                                                                <div>{ item.arouth }</div>
                                                                <Link to={
                                                                    //  "/Wenzhang/" + item.id
                                                                   { 
                                                                       pathname: "/Wenzhang/" + item.id,
                                                                       state: item,
                                                                    }
                                                                }>{ item.title }</Link>
                                                            </li>) ) }
                </ul>)
    }
}

export default Topics;
import React from 'react';

class Home extends React.Component {
    arouthInput = React.createRef();
    titleInput = React.createRef();

    setData = (e)=>{
        e.preventDefault();
        const arouth = this.arouthInput.current.value;
        const title = this.titleInput.current.value;
        const id = Math.floor( Math.random() * 1000000000000000 )

        const article = {
            arouth,
            title,
            id,
        };

        const articleList = JSON.parse( localStorage.getItem('articleList') ) || [];
        articleList.push(article);
        localStorage.setItem('articleList',JSON.stringify(articleList))

        this.props.history.push('/topics')
    }

    render () {
        return (<div>
                    <form onSubmit = { this.setData }>
                        <div>
                            <label >
                                作者：
                            </label >
                            <input ref = { this.arouthInput }/>
                        </div>
                        <div>
                            <label >
                                标题：
                            </label >
                            <input ref = { this.titleInput }/>
                        </div>
                        <button>提交</button>
                    </form>
                </div>)
    }
}

export default Home;
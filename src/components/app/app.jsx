import React, { Component } from 'react'
import CommonAdd from '../common-add/common-add'
import CommonList from '../common-list/common-list'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments:[
                {username:'Tom',content:'React非常棒'},
                {username:'Jack',content:'React非常nice'},
            ]
        }
    }
     addComment = (comment) => {
         const {comments} = this.state
         comments.unshift(comment)
         this.setState({comments})
     }
     
     deleteComment = (index) =>{
      const {comments} = this.state
      comments.splice(index,1)
      this.setState({comments})
     }

    render() {
        const {comments} = this.state
        return (
            <div id="app">
            <div>
              <header className="site-header jumbotron">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12">
                      <h1>请发表对React的评论</h1>
                    </div>
                  </div>
                </div>
              </header>
              <div className="container">
                  <CommonAdd addComment={this.addComment} />
                  <CommonList comments={comments} deleteComment={this.deleteComment} />
              </div>
            </div>
          </div>
        )
    }
}


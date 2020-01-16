import React, { Component } from 'react'

import PropTypes from 'prop-types'
import './commonList.css'
import CommonItem from '../common-item/common-item'
export default class CommonList extends Component {
     // 给组件类指定属性
     static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired,
    }
    render() {
           const {comments,deleteComment} = this.props 
           const display = comments.length === 0 ? 'block' : 'none' 
        return (
         <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
        
         {
         comments.map((c,index) => <CommonItem comment={c} key={index} deleteComment={deleteComment} index={index} />)
         }
        </ul>
    </div>

        )
    }
}   







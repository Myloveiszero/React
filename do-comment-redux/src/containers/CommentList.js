// UI , 
// 部门， 向中央财务去申请， 我要用comments
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

class CommentListContainer extends Component {
  render() {
    console.log(this.props.comments)
    return (
     <CommentList 
        comments = {this.props.comments}
     />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

// const mapDispatchToProps = (commentIndex) => {
//     return {
//         onDeleteComment: (commentIndex) => {
//             dispatch(deleteComment(commentIndex))
//         }
//     }
// }

export default connect(
  mapStateToProps
)(CommentListContainer)



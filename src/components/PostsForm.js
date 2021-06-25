import React from 'react';
import { createPost, showAlert } from '../redux/actions';
import { connect } from 'react-redux'
import Alert from './Alert';

class PostsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = (event) => {
    event.preventDefault()

    const { title } = this.state

    if (!title.trim()) {
      return this.props.showAlert('Please add a title')
    }

    const newPost = { title, id: Date.now().toString()}

    this.props.createPost(newPost)
    this.setState({ title: '' })
  }
  
  changeInputHandler = (event) => {
    event.persist()
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Add Post</h2>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">Title Post</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputTitle" 
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler} />
        </div>
        <div className="mb-3">
          <button className="btn btn-success pt-1" type="submit">Add Post</button>
        </div>
      </form>
    )
  }
}

const dispatchToProps = {
  createPost, showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, dispatchToProps)(PostsForm)
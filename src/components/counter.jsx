import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.value
    // imageUrl: 'https://picsum.photos/200',
    // tags: ['tag1', 'tag2', 'tag3']
  };
  // constructor(){ //to bind event handlers we use constructor so 'this' will accesssible in that function
  //    super();
  //    this.handleIncrement= this.handleIncrement.bind(this) 
  //   //  return new instance 
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return "No tags found!"
    
  //   return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
  // }
  
  //Instead of making constructors we use arrow functions, In arrow functions 'this' is accessible. benificial for event handlers
  handleIncrement = (id) => {
    // this.state.count += 1 this will not update the count becaise react does not follow this rule
    this.setState({ count: this.state.count + 1}) //this basically sync the virtal DOm with the actual dom
  }

  render() {
    console.log('props',this.props);
    return (
      <div>
        {/* {this.state.tags.length ===0 && "Please create new tags"} always return the last expression */}


        <span className={this.dinamicallyClasses()}>{this.formatCount()}</span>

        <button
          // onClick={this.handleIncrement}
          onClick={() => this.handleIncrement(23)}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>


      </div>
    );
  }
  //<ul>{/* { this.renderTags()} with method */}{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}  {/* We use map to list the item is react */}</ul>

  dinamicallyClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state //object distructuring
    return count === 0 ? 'Zero' : count
  }
}

export default Counter;

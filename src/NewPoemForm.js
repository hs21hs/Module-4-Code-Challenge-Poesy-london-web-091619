import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form" onSubmit= {this.props.handleSubmit}>
        <input name = "title" placeholder="Title" />
        <input name = "author" placeholder="Author" />
        <textarea name = "content" placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

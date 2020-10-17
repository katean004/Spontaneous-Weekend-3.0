import React, { Component } from "react";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  // closeMenu(event) {
  //   if (!this.dropdownMenu.contains(event.target)) {
  //     this.setState({ showMenu: false }, () => {
  //       document.removeEventListener("click", this.closeMenu);
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Pick a Genre</button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <div className="container">
              <button className="genre_button"> {this.props.genresArr[0]} </button>
              <button className="genre_button"> {this.props.genresArr[1]} </button>
              <button className="genre_button"> {this.props.genresArr[2]} </button>
              <button className="genre_button"> {this.props.genresArr[3]} </button>
              <button className="genre_button"> {this.props.genresArr[4]} </button>
              <button className="genre_button"> {this.props.genresArr[5]} </button>
              <button className="genre_button"> {this.props.genresArr[6]} </button>
              <button className="genre_button"> {this.props.genresArr[7]} </button>
              <button className="genre_button"> {this.props.genresArr[8]} </button>
              <button className="genre_button"> {this.props.genresArr[9]} </button>
              <button className="genre_button"> {this.props.genresArr[10]} </button>
              <button className="genre_button"> {this.props.genresArr[11]} </button>
              <button className="genre_button"> {this.props.genresArr[12]} </button>
              <button className="genre_button"> {this.props.genresArr[13]} </button>
              <button className="genre_button"> {this.props.genresArr[14]} </button>
              <button className="genre_button"> {this.props.genresArr[15]} </button>
              <button className="genre_button"> {this.props.genresArr[16]} </button>
              <button className="genre_button"> {this.props.genresArr[17]} </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;

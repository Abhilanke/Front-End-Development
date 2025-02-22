// import React from "react";
// import { Component } from "react";

// class Lifecycle extends Component {
//   constructor() {
//     super();
//     this.state = { favouritecolor: "Green" };
//   }
//   static getDerivedStateFromProps(props, state) {
//     return { favouritecolor: props.fevcol };
//   }
//   render() {
//     return <h2>My favourite color is {this.state.favouritecolor}</h2>;
//   }
// }
// export default Lifecycle;

// import React from "react";
// import { Component } from "react";

// class Lifecycle extends Component {
//   constructor() {
//     super();
//     this.state = { favouritecolor: "Green" };
//   }

//   static getDerivedStateFromProps(props, state) {
//     return { favouritecolor: props.favcolor };
//   }
//   render() {
//     return <h2>My favourite color is {this.state.favouritecolor}</h2>;
//   }
// }
// export default Lifecycle;

// import React from "react";
// import { Component } from "react";
// class Lifecycle extends Component {
//   constructor() {
//     super();
//     this.state = { favcolor: "Blue" };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favcolor: "Green" });
//     }, 1000);
//   }

//   render() {
//     return <h2>Favourite color is {this.state.favcolor}</h2>;
//   }
// }
// export default Lifecycle;

// //not runnn this program outpute is not change action is done but state is not change
// import React from "react";
// import { Component } from "react";

// class Lifecycle extends Component {
//   constructor() {
//     super();
//     this.state = { favouritecolor: "Green" };
//   }

//   static getDerivedStateFromProps(props, state) {
//     return { favouritecolor: props.favcolor };
//   }

//   changeColor = () => {
//     this.setState({ favouritecolor: "black" });
//     console.log("button is clicked");
//   };

//   render() {
//     return (
//       <>
//         {" "}
//         <h2>My favourite color is {this.state.favouritecolor}</h2>
//         <button onClick={this.changeColor}>Change Color</button>
//       </>
//     );
//   }
// }
// export default Lifecycle;

//

// import React from "react";
// import { Component } from "react";

// class Lifecycle extends Component {
//   constructor() {
//     super();
//     this.state = { touristPlace: "Ooty" };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ touristPlace: "Manali" });
//     }, 5000);
//   }

//   componentDidUpdate() {
//     document.getElementById("mydiv").innerText = this.state.touristPlace;
//   }

//   render() {
//     return (
//       <>
//         <h2>My favourite tourist destination is {this.state.touristPlace}</h2>;
//         <div id="mydiv"></div>
//       </>
//     );
//   }
// }
// export default Lifecycle;

import React from "react";
import { Component } from "react";
class Myheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Myheader;

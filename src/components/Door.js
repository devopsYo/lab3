import { Component } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/* class Door extends Component {

  constructor(props) {
    super(props);
    //this.state = { isOpen: true } 
    this.state = { statusDoor: {isOpen: true }}
    this.door = false
  }

  laassotMachou = () => {
    this.setState({ ...this.state, statusDoor: {isOpen: !this.state.statusDoor.isOpen} });
    console.log(this.state);
  }

  render() {
    const coco = this.state.statusDoor.isOpen;
    //console.log(coco)
    return (
      <div className='door'>
        <button onClick={this.laassotMachou} className='button'>
          Click to {coco ? 'Close' : 'Open'}
        </button>
        <div className='status'>
          <FontAwesomeIcon icon={coco ? ['fas', 'door-open'] : ['fas', 'door-closed']} />
        </div>
      </div>
    )


  }
} */


const Door = () => {
    const [stateDoor, setStateDoor] = useState({isOpen : true})
    const [nameGroup, changeFirstName] = useState('mintaka')

    const laassotMachou = () => {
      setStateDoor({...stateDoor, isOpen: !stateDoor.isOpen})
      if(nameGroup == 'mintaka') changeFirstName('webschool')
      else changeFirstName('mintaka')
      console.log(stateDoor);
    }

    const coco = stateDoor.isOpen;
    //console.log(coco)
    return (
      <div className='door'>
        <button onClick={laassotMachou} className='button'>
          Click to {coco ? 'Close' : 'Open'}
        </button>
        <div className='status'>
          <FontAwesomeIcon icon={coco ? ['fas', 'door-open'] : ['fas', 'door-closed']} />
        </div>
        <div>
          Name Group: {nameGroup} 
        </div>
      </div>
    )  
}


export default Door;
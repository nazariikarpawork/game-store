import React, {Component} from 'react';

export class Item extends Component{
    render(){
        return(
           <div className='item'>
               <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
               <h2 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.title}</h2>
               <p onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.desc}</p>
               <br/>
               <br/>
               <b>{this.props.item.price}</b>
               <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)} >+</div>
           </div>
        )
    }
};

export default Item;
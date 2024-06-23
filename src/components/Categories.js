import React, {Component} from 'react';

export class Categories extends Component{
    constructor(props) {
        super(props);
        this.state ={
            categories: [
                {
                    key: 'all',
                    name: 'Всі пропозиції' ,
                },
                {
                    key: 'shooter',
                    name: 'Шутери' ,
                },
                {
                    key: 'battleroyale',
                    name: 'Батл-рояль'
                },
                {
                    key: 'survival',
                    name: 'Виживання'
                },
                {
                    key: 'strategy',
                    name: 'Стратегія'
                },
                {
                    key: 'Stealth-action',
                    name: 'Стелс-Екшн'
                }
            ]
        }
    }
    render(){
        return(
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                        {el.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default Categories;
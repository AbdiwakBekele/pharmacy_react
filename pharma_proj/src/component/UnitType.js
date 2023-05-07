import React from 'react';
import './style.css'
class UnitType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            unitList:[
                {   
                    ID:'1',
                    UnitName:'',
                    UnitDescription:'',
                    Action:<div className='trash-icon'></div>
                },
            ],
            show:false,
            text:'+ Add New unit',
        };
    }

    TableHeader=()=>{
        return(
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UnitName</th>
                    <th>UnitDescription</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
    TableBody=(props)=>{
        const rows=props.unitType.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{row.UnitName}</td>
                    <td>{row.UnitDescription}</td>
                    <td>{row.Action}</td>
                </tr>
                );
            })
        return <tbody>{rows}</tbody>
    }

    
    
    UnitForm(props){
        return(
            <div className='formPage'>
                <h3 class="button">Add new Unit Type</h3>
                <form>
                    <div>
                        <label>Unit Name</label>
                        <input type='text' name='UnitName' placeholder='Unit name' value={props.unitList.UnitName} 
                        ></input>
                    </div>
                    <div>
                        <label>Unit Description</label>
                        <input type='text' name='UnitDescription' placeholder='Unit description' value={props.unitList.UnitDescription} 
                        ></input>
                    </div>
                    <button>Add Unit</button>
                </form>
                
            </div>
        )
    }

    handleInputChange=(name,value)=>{
        this.setState({
            unitList:{
                ...this.state.unitList,
                [name]:value
            },
        });
    };

    showMore(){
        if(this.state.text=='+ Add New unit'){
            {this.setState({...this.state, show:true, text:'Back'})}
        }else{
            {this.setState({...this.state, show:false, text:'+ Add New unit'})}
        }
    }

    AddUnit=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <div className='body'>
                <h1 className='header'>Inventory System</h1>
                <div className='smallCard'>
                    <div className='Unit--left'>
                        <div className='countAmount'>
                            <h3>Number of Unit type</h3>
                            <p>{this.state.unitList.length}</p>
                        </div>
                        <div class="search">
                            <input placeholder='search...'></input>
                            <button>Search</button>   
                        </div>
                    </div>
                    <div>
                        <div>
                            {this.state.show && <div><this.UnitForm unitList={this.state.unitList}/></div>}
                            <button className='AddNew' onClick={()=>this.showMore()}>{this.state.text}</button>
                        </div>
                    </div>
                 </div>
                <div className='tablePlace'>
                    <h2>Unit Type Table</h2>
                        <table>
                            <this.TableHeader/>
                            <this.TableBody unitType={this.state.unitList}/>
                        </table>
                </div>
                
            </div>
        );
    }
}

export default UnitType;
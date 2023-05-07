import React from 'react';
import './style.css'
class Drug extends React.Component{
    constructor(props){
        super(props);
        this.state={
            drugList:[
                {   
                    ID:'1',
                    DrugType:'Painkiller',
                    BatchNumber:'',
                    ManufacturedDate:'',
                    ExpiryDate:'',
                    Amount:'',
                    Action:<div className='trash-icon'></div>
                },
            ],
            show:false,
            text:'+ Add New Drug',
        };
    }

    TableHeader=()=>{
        return(
            <thead>
                <tr>
                    <th>Drug Type</th>
                    <th>Batch Number</th>
                    <th>Manufactured Date</th>
                    <th>Expiry Date</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
    TableBody=(props)=>{
        const rows=props.DrugType.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{row.DrugType}</td>
                    <td>{row.BatchNumber}</td>
                    <td>{row.ManufacturedDate}</td>
                    <td>{row.ExpiryDate}</td>
                    <td>{row.Amount}</td>
                    <td>{row.Action}</td>
                </tr>
                );
            })
        return <tbody>{rows}</tbody>
    }
    
    DrugForm(props){
        return(
            <div className='formPage large'>
                <h3 class="">Add new Drug</h3>
                <form class='large'>
                    <div class='ll'>
                        <div>
                            <label>Drug Type</label>
                            <select>
                                <option value=''>..Choose..</option>
                                <option value='Type1'>Type1</option>
                                <option value='Type2'>Type2</option>
                                <option value='Type3'>Type3</option>
                            </select>
                        </div>
                        <div>
                            <label>Batch Number</label>
                            <input type='text' name='BatchNumber' placeholder='Batch number' value={props.drugList.BatchNumber} 
                            required></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Manufactured Date </label>
                            <input type='date' name='ManufacturedDate'  value={props.drugList.ManufacturedDate} 
                            required></input>
                        </div>
                        <div>
                            <label>Expiry Date</label>
                            <input type='date' name='ExpiryDate' value={props.drugList.ExpiryDate} 
                            required></input>
                        </div>
                        <div>
                            <label>Amount</label>
                            <input type='text' name='Amount' placeholder='Amount' value={props.drugList.Amount} 
                            required></input>
                        </div>
                        <button>Add Drug</button>
                    </div>
                </form>
                
            </div>
        )
    }
    handleInputChange=(name,value)=>{
        this.setState({
            drugList:{
                ...this.state.drugList,
                [name]:value
            },
        });
    };
    showMore(){
        if(this.state.text=='+ Add New Drug'){
            {this.setState({...this.state, show:true, text:'Back'})}
        }else{
            {this.setState({...this.state, show:false, text:'+ Add New Drug'})}
        }
    }
    AddDrug=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <div className='body'>
                <h1 className='header'>Inventory System</h1>
                <div className='smallCard'>
                    <div className='Drug--left'>
                        <div className='countAmount'>
                            <h3>Number of Drug</h3>
                            <p>{this.state.drugList.length}</p>
                        </div>
                        <div class="search">
                            <input placeholder='search...'></input>
                            <button>Search</button>   
                        </div>
                    </div>
                    <div>
                        <div>
                            {this.state.show && <div><this.DrugForm drugList={this.state.drugList}/></div>}
                            <button className='AddNew' onClick={()=>this.showMore()}>{this.state.text}</button>
                        </div>
                    </div>
                 </div>
                <div className='tablePlace'>
                    <h2>Drug Table</h2>
                        <table>
                            <this.TableHeader/>
                            <this.TableBody DrugType={this.state.drugList}/>
                        </table>
                </div>
                
            </div>
        );
    }
}

export default Drug;
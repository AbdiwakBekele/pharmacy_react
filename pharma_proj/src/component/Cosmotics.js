import React from 'react';
import './style.css';
class CosmoticsType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cosmoticsList:[
                {   
                    ID:'1',
                    CosmoticsName:'Antibiotics',
                    CosmoticsDescription:'bacteriocidal and bacteriostatic',
                    Action:<div className='trash-icon'></div>
                },
            ],
            show:false,
            text:'+ Add New Cosmotics Type',
        };
    }
    TableHeader=()=>{
        return(
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CosmoticsName</th>
                    <th>CosmoticsDescription</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
    TableBody=(props)=>{
        const rows=props.cosmoticsList.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{row.CosmoticsName}</td>
                    <td>{row.CosmoticsDescription}</td>
                    <td>{row.Action}</td>
                </tr>
                );
            })
        return <tbody>{rows}</tbody>
    }
    CosmoticsForm(props){
        return(
            <div className='formPage'>
                <h3 class="button">Add new cosmotics Type</h3>
                <form className='large'>
                    <div>
                        <div>
                            <label>Cosmotics Name</label>
                            <input type='text' name='CosmoticsName' placeholder='cosmotics name' value={props.cosmoticsList.CosmoticsName} 
                        ></input>
                        </div>
                        <div>
                            <label>Total Amount </label>
                            <input type='text' name='totalamount' placeholder='total amount' value={props.cosmoticsList.TotalAmount} 
                        ></input>
                        </div>
                        </div>
                    <div>
                        <div>
                            <label>Expiry Date  </label>
                            <input type='date' name='ExpiryDate' value={props.cosmoticsList.ExpiryDate} 
                        ></input>
                        </div>
                        <div>
                            <label>Prices   </label>
                            <input type='text' name='Prices' placeholder='Prices' value={props.cosmoticsList.Prices} 
                        ></input>
                        </div>
                        <button>Add Cosmotics</button>
                    </div>

                    
                </form>
                
            </div>
        )
    }
    handleInputChange=(name,value)=>{
        this.setState({
            cosmoticsList:{
                ...this.state.cosmoticsList,
                [name]:value
            },
        });
    };
    showMore(){
        if(this.state.text==='+ Add New Cosmotics Type'){
           
            // eslint-disable-next-line no-lone-blocks
            {this.setState({...this.state, show:true, text:'Back'})}
        }else{
        
            // eslint-disable-next-line no-lone-blocks
            {this.setState({...this.state, show:false, text:'+ Add New Cosmotics Type'})}
        }
    }
    AddCosmotics=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <div className='body'>
                <h1 className='header'>Inventory System</h1>
                <div className='smallCard'>
                    <div className='category--left'>
                        <div className='countAmount'>
                            <h3>Number of cosmotics </h3>
                            <p>{this.state.cosmoticsList.length}</p>
                        </div>
                        <div class="search">
                            <input placeholder='search...'></input>
                            <button>Search</button>   
                        </div>
                    </div>
                    <div>
                        <div>{this.state.show && <div><this.CosmoticsForm cosmoticsList={this.state.cosmoticsList}/></div>}
                            <button className='AddNew' onClick={()=>this.showMore()}>{this.state.text}</button>
                        </div>
                    </div>
                 </div>
                <div className='tablePlace'>
                    <h2>Cosmotics Table</h2>
                        <table>
                            <this.TableHeader/>
                            <this.TableBody cosmoticsList={this.state.cosmoticsList}/>
                        </table>
                </div>
                
            </div>
        );
    }
}

export default CosmoticsType;
import React from 'react';
import './style.css'
class DrugType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            drugTypeList:[
                {   
                    ID:'1',
                    CategoryName:'Antibiotics',
                    UnitName:'',
                    BrandName:'',
                    GenericName:'',
                    Dosage:'',
                    Price:'',
                    Action:<div className='trash-icon'></div>
                },
            ],
            show:false,
            text:'+ Add New Drug Type',
        };
    }

    TableHeader=()=>{
        return(
            <thead>
                <tr>
                    <th>Category Name</th>
                    <th>Unit Name</th>
                    <th>Brand Name</th>
                    <th>Generic name</th>
                    <th>Dosage(mg)</th>
                    <th>Price(ETB)</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
    TableBody=(props)=>{
        const rows=props.DrugType.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{row.CategoryName}</td>
                    <td>{row.UnitName}</td>
                    <td>{row.Brand}</td>
                    <td>{row.generic}</td>
                    <td>{row.Dosage}</td>
                    <td>{row.price}</td>
                    <td>{row.Action}</td>
                </tr>
                );
            })
        return <tbody>{rows}</tbody>
    }
    
    DrugForm(props){
        return(
            <div className='formPage'>
                <h3 class="">Add new Drug Type</h3>
                <form class='large'>
                    <div class='ll'>
                        <div>
                            <label>Category Name</label>
                            <select>
                                <option value=''>..Choose..</option>
                                <option value='Category1'>Category1</option>
                                <option value='Category2'>Category2</option>
                                <option value='Category3'>Category3</option>
                            </select>
                        </div>
                        <div>
                            <label>Unit Name    </label>
                                <select >
                                    <option value=''>..Choose.. </option>
                                    <option value='Unit1'>Unit1 </option>
                                    <option value='Unit2'>Unit2 </option>
                                    <option value='Unit3'>Unit3 </option>
                                </select>
                        </div>
                        <div>
                            <label>Brand Name</label>
                            <input type='text' name='BrandName' placeholder='Brand name' value={props.drugTypeList.BrandName} 
                            required></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Generic Name </label>
                            <input type='text' name='GenericName' placeholder='Generic name' value={props.drugTypeList.GenericName} 
                            required></input>
                        </div>
                        <div>
                            <label>Dosage (mg)  </label>
                            <input type='text' name='Dosage' placeholder='Dosage in mg' value={props.drugTypeList.Dosage} 
                            required></input>
                        </div>
                        <div>
                            <label>Generic Name </label>
                            <input type='text' name='Price' placeholder='Price' value={props.drugTypeList.Price} 
                            required></input>
                        </div>
                        <button>Add Drug type</button>
                    </div>
                </form>
                
            </div>
        )
    }
    handleInputChange=(name,value)=>{
        this.setState({
            drugTypeList:{
                ...this.state.drugTypeList,
                [name]:value
            },
        });
    };
    showMore(){
        if(this.state.text=='+ Add New Drug Type'){
            {this.setState({...this.state, show:true, text:'Back'})}
        }else{
            {this.setState({...this.state, show:false, text:'+ Add New Drug Type'})}
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
                            <h3>Number of Drug type</h3>
                            <p>{this.state.drugTypeList.length}</p>
                        </div>
                        <div class="search">
                            <input placeholder='search...'></input>
                            <button>Search</button>   
                        </div>
                    </div>
                    <div>
                        <div>
                            {this.state.show && <div><this.DrugForm drugTypeList={this.state.drugTypeList}/></div>}
                            <button className='AddNew' onClick={()=>this.showMore()}>{this.state.text}</button>
                        </div>
                    </div>
                 </div>
                <div className='tablePlace'>
                    <h2>Drug Type Table</h2>
                        <table>
                            <this.TableHeader/>
                            <this.TableBody DrugType={this.state.drugTypeList}/>
                        </table>
                </div>
                
            </div>
        );
    }
}

export default DrugType;
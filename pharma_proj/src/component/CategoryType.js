import React from 'react';
import './style.css'
class CategoryType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryList:[
                {   
                    ID:'1',
                    CategoryName:'Antibiotics',
                    CategoryDescription:'bacteriocidal and bacteriostatic',
                    Action:<div className='trash-icon'></div>
                },
            ],
            show:false,
            text:'+ Add New Category Type',
        };
    }

    TableHeader=()=>{
        return(
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CategoryName</th>
                    <th>CategoryDescription</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
    TableBody=(props)=>{
        const rows=props.CategoryType.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{row.CategoryName}</td>
                    <td>{row.CategoryDescription}</td>
                    <td>{row.Action}</td>
                </tr>
                );
            })
        return <tbody>{rows}</tbody>
    }
    
    CategoryForm(props){
        return(
            <div className='formPage'>
                <h3 class="button">Add new category Type</h3>
                <form>
                    <div>
                        <label>Category Name</label>
                        <input type='text' name='CategoryName' placeholder='category name' value={props.categoryList.CategoryName} 
                        ></input>
                    </div>
                    <div>
                        <label>Category Description</label>
                        <input type='text' name='CategoryDescription' placeholder='category description' value={props.categoryList.CategoryDescription} 
                        ></input>
                    </div>
                    <button>Add Category</button>
                </form>
                
            </div>
        )
    }
    handleInputChange=(name,value)=>{
        this.setState({
            categoryList:{
                ...this.state.categoryList,
                [name]:value
            },
        });
    };
    showMore(){
        if(this.state.text=='+ Add New Category Type'){
            {this.setState({...this.state, show:true, text:'Back'})}
        }else{
            {this.setState({...this.state, show:false, text:'+ Add New Category Type'})}
        }
    }
    AddCategory=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <div className='body'>
                <h1 className='header'>Inventory System</h1>
                <div className='smallCard'>
                    <div className='category--left'>
                        <div className='countAmount'>
                            <h3>Number of Category type</h3>
                            <p>{this.state.categoryList.length}</p>
                        </div>
                        <div class="search">
                            <input placeholder='search...'></input>
                            <button>Search</button>   
                        </div>
                    </div>
                    <div>
                        <div>
                            {this.state.show && <div><this.CategoryForm categoryList={this.state.categoryList}/></div>}
                            <button className='AddNew' onClick={()=>this.showMore()}>{this.state.text}</button>
                        </div>
                    </div>
                 </div>
                <div className='tablePlace'>
                    <h2>Category Type Table</h2>
                        <table>
                            <this.TableHeader/>
                            <this.TableBody CategoryType={this.state.categoryList}/>
                        </table>
                </div>
                
            </div>
        );
    }
}

export default CategoryType;
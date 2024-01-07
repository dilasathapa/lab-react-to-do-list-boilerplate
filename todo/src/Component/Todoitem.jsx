import React from "react";

class TodoItem extends React.Component{
    render(){
        let {e, index, updateItem, deleteItem} = this.props;
        return(
            <>
            <div className="items">
                <input type="text" value={e} onChange={(ele)=>{
                    updateItem(ele.target.value, index)
                }}/>
                <button onClick={()=>deleteItem(index)}>Delete</button>
            </div>
            </>
        )
    }
}

export default TodoItem;
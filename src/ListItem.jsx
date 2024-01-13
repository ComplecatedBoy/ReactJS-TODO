


function ListItem({onEdit,onDelete,children,id,onDone,isDone}){
    return (
        <div className="list-item">
            <li className={isDone?"done-task":"undone-task"}>{children}</li>
             <span className="icons"><i title="Mark as Done" className="fa-solid fa-check" onClick={()=>onDone(id,!isDone)}></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={()=>onDelete(id)}></i>&nbsp;&nbsp;<i className="fa-regular fa-pen-to-square" onClick={()=>onEdit(id)}></i></span>
        </div>
    )
}  
export default ListItem
type ListaTareas= {
  listaTareas: string[]
  borrarTarea: (index:number) => void
}

const ListaTareas = ({listaTareas, borrarTarea}: ListaTareas) => {
  return (
    <div className='taskList'>
      {listaTareas.map(task,index) => (

      )}
    </div>
  )
}

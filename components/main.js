import CreateForm from '../components/create-form'

export default function Main(props){
  return(
    <main className="">        
        <div className="bg-slate-100 ">
          <div className=" grid place-items-center h-2/5 flex">

            <CreateForm handler={ props.handleSubmit }/>

            <div className='text-center text-xs '>
              <h2 className='text-lg font-semibold pb-4'>{ props.latestStore() }</h2>
            </div>
          </div>                    
        </div>
      </main>
  )
}



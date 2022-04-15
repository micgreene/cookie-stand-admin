export default function CreateForm(props){
  return (
    <form onSubmit={ props.handler } className="w-8/12 my-5 bg-emerald-300 rounded">        
              <h3 className ="p-3 text-center font-semibold text-2.5xl ">Create Cookie Stand</h3>
              <label className="p-2.5 flex-auto font-semibold text-xs" htmlFor="forms-labelLeftInputCode">Location</label>
              <input name='location' className="flex-auto w-10/12 h-full mb-5 "></input>
          
              <div className="flex tab mb-1">
                <div className="bg-emerald-200  ml-2.5 my-2.5 grid place-items-center rounded">
                  <label className=" text-center">
                    <span className="block text-xs font-medium text-slate-700 font-bold truncate">
                      Minimum Customers per Hour 
                    </span>
                    <input name='min_cph' className="h-2/6 flex-auto mx-2 tab__item"></input>
                  </label>
                </div>

                <div className="bg-emerald-200 ml-1.5 my-2.5 grid place-items-center rounded">
                  <label className="p-2 text-center">
                    <span className="block text-xs font-medium text-slate-700 font-bold truncate">
                      Maximum Customers per Hour
                    </span>
                    <input name='max_cph' className="h-2/6 flex-auto pl-1 tab__item"></input>
                  </label>
                </div>

                <div className="bg-emerald-200 ml-1.5 my-2.5 grid place-items-center rounded">
                  <label className="p-2 text-center">
                    <span className="block text-xs font-medium text-slate-700 font-bold truncate">
                      Average Cookies per Sale
                    </span>
                    <input name='avg_sales' className="h-2/6 flex-auto pl-1 tab__item"></input>
                  </label>   
                </div>

                <button className="ml-1 mr-2.5 my-2.5 h-14 w-full flex-auto bg-emerald-500 font-bold text-black text-xs rounded tab__item">Create</button>
              </div>
      </form>
  )
}
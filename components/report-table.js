import { hours } from '../public/data'

export default function ReportTable(props){
  let grand_total = 0
  let total_hourly = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  return(
    <table className ="w-4/5 mx-auto my-4 table-auto">
      <thead>
        <tr className='bg-emerald-500 font-bold text-xs'>
          <th className="border-b-slate-500">Location</th>
          {hours.map(
            item => {
              return(
                <td className="px-2.5 border-b-slate-500">{item}</td>
              )                      
            }
          )}
          <td className="px-2.5 border-b-slate-500">Totals</td>
        </tr>
      </thead>
      
      <tbody>
        { props.storeInfo.map(
            item => {
              grand_total = 0
              let rows = [];
              let daily_total = 0;
              
              for (let i = 0; i < item.hourly_sales.length; i++){
                rows.push(item.hourly_sales[i]);
                daily_total += parseInt(item.hourly_sales[i]);
                total_hourly[i] += parseInt(item.hourly_sales[i])
                grand_total += total_hourly[i]
              }
              return(                
                <tr className=' odd:bg-emerald-400 even:bg-emerald-300 text-xs font-semibold truncate'>
                  <th className="pl-5 pr-20 text-left border border-gray-700">{item.location}</th>                  
                  {rows.map(
                    item => {
                      return(
                        <td className="border border-gray-700 px-2">{item}</td>
                      )                      
                    }
                  )}
                  <td className="border border-gray-700">{daily_total}</td>
                </tr>
              )
            }
          )
        }
      </tbody>

      <tfoot>        
        <tr className='bg-emerald-500 font-bold text-xs'>
          <th className="border border-gray-700">Totals</th>          
          {total_hourly.map(
            item => {
              return(
                <td className="border border-gray-700">{item}</td>
              )                      
            }
          )}
          <th className="border border-gray-700">{grand_total}</th>
        </tr>
      </tfoot>
    </table>
  )
}
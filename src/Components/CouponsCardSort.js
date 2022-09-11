import React,{useState} from "react";

export default function CouponsCard({couponsName, endPointvalue, endPointId}) {
    const [disabled, setDisabled] = useState(false)

    const optionsComponent = couponsName.map((e,i) => {
        return (
            <option key={i} value={e.id}>{e.name}</option>
        )
    })

    return (
        <div>
            <div className="sort-group">
                <div className="filter-default">
                    <select 
                    className="filter" 
                    id="filter-coupons" 
                    onChange={(e) => endPointId(e.target.value)}
                    >
                        <option value="all">Toate cupoanele</option>
                        { optionsComponent }
                    </select>
                </div>

                <div className="filter-default">
                    <select className="filter" id="sort-coupons" onChange={(e) => {endPointvalue(e);setDisabled(true)}}  >
                        <option value="" disabled={disabled} >Sorteaza</option>
                        <option value="">Populare</option>
                        <option value="&sortby=start_date&sortdir=desc">Cele mai noi</option>
                        <option value="&filters[expireSoon]=1&sortby=end_date&sortdir=asc">Expira in curand</option>
                        <option value="&sortby=discount_percent&sortdir=desc">Valuarea reducerii</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
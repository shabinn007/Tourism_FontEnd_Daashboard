import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import './FeaturedInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2045</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward className='featuredIconNegative'/>
                </span>
            </div>
            <span className="featuredSub">compared to Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5045</span>
                <span className="featuredMoneyRate">
                    +3.4 <ArrowUpward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">compared to Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$34045</span>
                <span className="featuredMoneyRate">
                    -1.4 <ArrowDownward className='featuredIconNegative'/>
                </span>
            </div>
            <span className="featuredSub">compared to Last month</span>
        </div>
    </div>
  )
}

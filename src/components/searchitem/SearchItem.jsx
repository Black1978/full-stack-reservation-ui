import './searchItem.css'

function SearchItem() {
    return (
        <div className='searchItem'>
            <img
                src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
                alt=''
                className='siImg'
            />
            <div className='siDesc'>
                <div className='siTitle'>Tower Street Apartments</div>
                <div className='siDistance'>500m from the center</div>
                <div className='siTaxiOp'>Free airoport taxi</div>
                <div className='siSubtitle'>Studio Apartment with Air conditioning</div>
                <div className='siFeatures'>Entire studio 1 bathroom 21² m 1 full bed</div>
                <div className='siCancelOp'>Free cancalation</div>
                <div className='siCancelOpSubtitle'>
                    You can cancel later, so lock in this great price today!
                </div>
            </div>
            <div className='siDetails'>
                <div className='siRating'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className='siDetailsText'>
                    <span>$112</span>
                    <span>Includes taxes and fees</span>
                    <button>See avaliability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem

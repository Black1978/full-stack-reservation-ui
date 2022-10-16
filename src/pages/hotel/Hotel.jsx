import './hotel.css'
import Footer from './../../components/footer/Footer'
import MailList from './../../components/mailList/MailList'
import Navbar from './../../components/navbar/Navbar'
import Header from './../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Hotel = () => {
    const photos = [
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
        },
    ]
    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className='hotelContainer'>
                <div className='hotelWrapper'>
                    <button className='bookNow'>Reserve or book now!</button>
                    <h1 className='hotelTitle'>Grand Hotel</h1>
                    <div className='hotelAddress'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className='hotelDistance'>Excellent location 500m from center</span>
                    <span className='hotelPriceHighlight'>
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className='hotelImages'>
                        {photos.map((item) => (
                            <div className='hotelImgWrapper'>
                                <img alt='' src={item.src} className='hotelImg' />
                            </div>
                        ))}
                    </div>
                    <div className='hotelDetails'>
                        <div className='hotelDetailsText'>
                            <h2>Stay in the heart of Krakow </h2>
                            <p className='hotelDesc'>Located a 5-minute walk from St. Florian's Gate Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti molestias dolores optio repellendus ad corporis architecto doloribus veniam quae illum ullam delectus culpa amet obcaecati at nostrum omnis exercitationem, voluptatem aut sit totam perspiciatis? Animi facere quas perferendis? Maxime, esse? Molestiae velit nihil facere excepturi debitis culpa! Sunt, aut?</p>
                        </div>
                        <div className='hotelDetailsPrice'>
                            <h2>Perfect for a 9-nights stay!</h2>
                            <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
                            <h2 className='hotelDetailsOffer'>$945 (9 nights)</h2>
                            <button>Reserve or book now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel

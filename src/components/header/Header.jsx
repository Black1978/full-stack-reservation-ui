import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPlane,
    faTaxi,
    faPerson,
} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

function Header() {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ])
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    const [showDate, setShowDate] = useState(false)
    const [showOption, setShowOption] = useState(false)
    const handleOption = (name, operation) => {
        setOption((prev) => ({
            ...prev,
            [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1,
        }))
    }

    return (
        <div className='header'>
            <div className='headerContainer'>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rental</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                <p className='headerDesc'>
                    Get rewarded for your travels unlock instant saving of 10% or more with a free
                    Booking account
                </p>
                <button className='headerBtn'>Sign in / Register</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input
                            type='text'
                            placeholder='where are you going?'
                            className='headerSearchInput'
                        />
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span onClick={() => setShowDate(!showDate)} className='headerSearchText'>
                            {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
                                date[0].endDate,
                                'dd/MM/yyyy'
                            )}`}
                        </span>
                        {showDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />
                        )}
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span
                            className='headerSearchText'
                            onClick={() => setShowOption(!showOption)}
                        >
                            {option.adult} adults {option.children} children {option.room} room
                        </span>
                        {showOption && (
                            <div className='options'>
                                <div className='optionItem'>
                                    <span className='optionText'>adult</span>
                                    <div className='optionCounter'>
                                        <button
                                            className='optionCounterButton'
                                            onClick={() => handleOption('adult', 'i')}
                                        >
                                            +
                                        </button>
                                        <span className='optionCounterNumber'>{option.adult}</span>
                                        <button
                                            disabled={option.adult <= 1}
                                            className='optionCounterButton'
                                            onClick={() => handleOption('adult', 'd')}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>children</span>
                                    <div className='optionCounter'>
                                        <button
                                            className='optionCounterButton'
                                            onClick={() => handleOption('children', 'i')}
                                        >
                                            +
                                        </button>
                                        <span className='optionCounterNumber'>
                                            {option.children}
                                        </span>
                                        <button
                                            disabled={option.children < 1}
                                            className='optionCounterButton'
                                            onClick={() => handleOption('children', 'd')}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>room</span>
                                    <div className='optionCounter'>
                                        <button
                                            className='optionCounterButton'
                                            onClick={() => handleOption('room', 'i')}
                                        >
                                            +
                                        </button>
                                        <span className='optionCounterNumber'>{option.room}</span>
                                        <button
                                            disabled={option.room <= 1}
                                            className='optionCounterButton'
                                            onClick={() => handleOption('room', 'd')}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='headerSearchItem'>
                        <button className='headerBtn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

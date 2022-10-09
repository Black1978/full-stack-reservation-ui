import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import './list.css'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import SearchItem from '../../components/searchitem/SearchItem.jsx'

function List() {
    const location = useLocation()
    const [distanation, setDestination] = useState(location.state.distanation)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpendate] = useState(false)
    const handleOptions = (e, type) => {
        switch (type) {
            case 'adult':
                setOptions({ ...options, adult: Number(e.target.value) })
                break
            case 'children':
                setOptions({ ...options, children: Number(e.target.value) })
                break
            case 'room':
                setOptions({ ...options, room: Number(e.target.value) })
                break
            default:
                break
        }
    }
    return (
        <div>
            <Navbar />
            <Header type={'list'} />
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'>Search</h1>
                        <div className='lsItem'>
                            <label>Destination</label>
                            <input type='text' placeholder={distanation} />
                        </div>
                        <div className='lsItem'>
                            <label>Check-in Date </label>
                            <span onClick={() => setOpendate(!openDate)}>{`${format(
                                date[0].startDate,
                                'dd/MM/yyyy'
                            )} to ${format(date[0].endDate, 'dd/MM/yyyy')} `}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className='lsItem'>
                            <label>Options</label>
                            <div className='lsOptions'>
                                <div className='lsOptionItem'>
                                    <div className='lsOptionText'>
                                        Min price <small>per night</small>
                                    </div>
                                    <input type='number' className='lsOptionInput' />
                                </div>
                                <div className='lsOptionItem'>
                                    <div className='lsOptionText'>
                                        Max price <small>per night</small>
                                    </div>
                                    <input type='number' className='lsOptionInput' />
                                </div>
                                <div className='lsOptionItem'>
                                    <div className='lsOptionText'>Adult</div>
                                    <input
                                        type='number'
                                        className='lsOptionInput'
                                        placeholder={options.adult}
                                        onChange={(e) => handleOptions(e, 'adult')}
                                        min={1}
                                    />
                                </div>
                                <div className='lsOptionItem'>
                                    <div className='lsOptionText'>Children</div>
                                    <input
                                        type='number'
                                        className='lsOptionInput'
                                        placeholder={options.children}
                                        onChange={(e) => handleOptions(e, 'children')}
                                        min={0}
                                    />
                                </div>
                                <div className='lsOptionItem'>
                                    <div className='lsOptionText'>Room</div>
                                    <input
                                        type='number'
                                        className='lsOptionInput'
                                        placeholder={options.room}
                                        onChange={(e) => handleOptions(e, 'room')}
                                        min={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className='listResult'>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List

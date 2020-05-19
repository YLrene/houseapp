import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'

import './search.scss'

export default class Search extends Component {
    state={
        info:['二手房','新房','租房','房价','写字楼','卖房','房产','房贷']
    }
    render() {
        return (
            <div className='search'>
                <div className='topSearch'>
                    <SearchBar placeholder="Search" maxLength={12} />
                </div>
                <div className='searchInfo'>
                    {
                        this.state.info.map(obj=>(
                            <span>{obj}</span>
                        ))
                    }
                </div>
            </div>
        )
    }
}

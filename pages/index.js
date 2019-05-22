import React from 'react'
import Link from 'next/link'


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

// import './main.scss'

class DemoApp extends React.Component {

    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
        calendarEvents: [ // initial event data
            { title: 'Event Now', start: new Date() }
        ]
    }

    render() {
        return (
            <div className='demo-app'>
                <div className='demo-app-calendar'>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                        ref={ this.calendarComponentRef }
                        weekends={ this.state.calendarWeekends }
                        events={ this.state.calendarEvents }
                        dateClick={ this.handleDateClick }
                    />
                </div>
            </div>
        )
    }

}

export default () => (
<div>
    <DemoApp/>
  <ul>
    <li>
      <Link href='/b' as='/a'>
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/b'>
        <a>b</a>
      </Link>
    </li>
  </ul>
</div>
)

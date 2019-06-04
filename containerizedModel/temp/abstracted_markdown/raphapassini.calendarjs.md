# calendarjs

A simple jquery events calendar plugin

## How to install

@abstr_number . Download the zip and extract it @abstr_number . Acess the index.html to see a demo @abstr_number . If you wanna run the tests suite run tests.html

## How to use it

Basic usage @abstr_code_section 

## How to translate

@abstr_code_section 

## Complete API

  * `set_date(dateObject)` \- set the calendar date

Ex:   
```$("calendar").calendarjs().set_date(new Date( @abstr_number , @abstr_number , @abstr_number )) @abstr_code_section evtList = [ { date: new Date(' @abstr_number ', ' @abstr_number ', ' @abstr_number '), object: {'title': 'My first event', 'desc': 'First event'}, }, { date: new Date(' @abstr_number ', ' @abstr_number ', ' @abstr_number '), object: {'title': 'Second event on day @abstr_number ', 'desc': 'Second event on day @abstr_number '}, }, { date: new Date(' @abstr_number ', ' @abstr_number ', ' @abstr_number '), object: {'title': 'Sencond Event', 'desc': 'Second event'}, }, ]

$cl = $('div.calendar').calendarjs()

$cl.set_events(evtList) ```

PS: Calendar will set the current display month to the month of the first event on list.




## Options

  * `width: @abstr_number` \- The with of the calendar, always in px
  * `height: @abstr_number` \- The height of the calendar, always in px 
  * `auto_render: true` \- Should render calendar automatically when you cal $.calendarjs()
  * `l @abstr_number n: dflt_l @abstr_number n` \- An object which have localized strings
  * `date: new Date()` \- The calendar start date
  * `short_weekdays: true` \- Which format of weekdays should calendar use
  * `next_link: '<a href="#"> >> </a>'` \- Link to the next month
  * `prev_link: '<a href="#" class="prev"> << </a>'` \- Link to the previous month
  * `day_click_cb: function(cl, date, evtList){}`

Callback function called when user click in a day, this function recieves:   
the calendar object, the date in format dd/mm/yyyy and the list of events   
or the Event object (if the clicked day have just @abstr_number event)

  * `month_change_cb: function(old, new){}`

Callback function called when month change, this function recieves:   
The old_date and the new_date




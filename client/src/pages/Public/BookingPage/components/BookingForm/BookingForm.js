import React from 'react';
import { Grid, Box, TextField, MenuItem, Typography } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export default function BookingForm(props) {
  const {
    cinemas,
    showtimes,
    selectedCinema,
    onChangeCinema,
    selectedDate,
    onChangeDate,
    times,
    selectedTime,
    onChangeTime
  } = props;

  // Find all showtimes for the selected cinema
  const cinemaShowtimes = showtimes.filter(
    showtime => showtime.cinemaId === selectedCinema
  );

  // Get the date range from all showtimes for this cinema
  const getDateRange = () => {
    if (!cinemaShowtimes.length) return { minDate: new Date(), maxDate: new Date() };
    
    const startDates = cinemaShowtimes.map(s => new Date(s.startDate));
    const endDates = cinemaShowtimes.map(s => new Date(s.endDate));
    
    return {
      minDate: new Date(Math.min(...startDates)),
      maxDate: new Date(Math.max(...endDates))
    };
  };

  const { minDate, maxDate } = getDateRange();

  if (!cinemas || !cinemas.length)
    return (
      <Box
        display="flex"
        width={1}
        height={1}
        alignItems="center"
        justifyContent="center">
        <Typography align="center" variant="h2" color="inherit">
          No Cinema Available.
        </Typography>
      </Box>
    );

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <TextField
          fullWidth
          select
          value={selectedCinema}
          label="Select Cinema"
          variant="outlined"
          onChange={onChangeCinema}>
          {cinemas.map(cinema => (
            <MenuItem key={cinema._id} value={cinema._id}>
              {cinema.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {selectedCinema && cinemaShowtimes.length > 0 && (
        <Grid item xs>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              inputVariant="outlined"
              margin="none"
              fullWidth
              id="start-date"
              label="Start Date"
              minDate={minDate}
              maxDate={maxDate}
              value={selectedDate}
              onChange={date => onChangeDate(date._d)}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      )}
      {selectedDate && times && times.length > 0 && (
        <Grid item xs>
          <TextField
            fullWidth
            select
            value={selectedTime}
            label="Select Time"
            variant="outlined"
            onChange={onChangeTime}>
            {times.map((time, index) => (
              <MenuItem key={time + '-' + index} value={time}>
                {time}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      )}
    </Grid>
  );
}

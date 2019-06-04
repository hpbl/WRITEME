# embedC-Challenge

The following problem is a (heavily simplified) version of a feature implemented in our vehicle telematics devices.

A vehicle telematics device needs to read a set of signals over a period of time and compile a "trip event summary". For an electric vehicle, this summary may include:

  * Trip Start Time [seconds since unix epoch]
  * Trip Duration [seconds]
  * Trip Distance Travelled [meters]
  * Trip Total Energy Consumed [Watt-hours]
  * Trip Starting Battery State-of-Charge (SOC) Value [%]
  * Trip Ending Battery State-of-Charge (SOC) Value [%]



Someone has already written the code to retrieve signals from the vehicle and make each one available as a `vehicle_signal_t`. This data structure contains the signal type, the time when the signal was received, and the signal value.

@abstr_code_section 

Your job is to write a small code library, in C, to receive each signal and maintain the following trip event summary:

@abstr_code_section 

# Specifically, you must:

@abstr_number ) Create a code library containing one or more functions that receive a `vehicle_signal_t` and update the appropriate fields of a `trip_event_summary_t`. * the start time is the time that the first signal of any type is received * the duration is the difference in time between the first signal (of any type) received and the last signal (of any type) received * the distance travelled is the numerical integration of the VEHICLE_SIGNAL_TYPE_VEHICLE_SPEED signal * the total energy consumed is the numerical integration of the product of VEHICLE_SIGNAL_TYPE_HV_BATTERY_VOLTAGE and VEHICLE_SIGNAL_TYPE_HV_BATTERY_CURRENT * the starting SOC is the first VEHICLE_SIGNAL_TYPE_HV_BATTERY_SOC signal received * the ending SOC is the last VEHICLE_SIGNAL_TYPE_HV_BATTERY_SOC signal received

@abstr_number ) Write (at least one) unit test that feeds your library a set of `vehicle_signal_t` and checks that the resulting `trip_event_summary_t` is correct. * The included CSV file contains data from one of our employee's vehicles. Use this data to generate a set of vehicle_signal_t for your unit test(s). * A good unit test asserts a result that was derived from an independent source. Document how you determined the "correct value" for each field in trip_event_summary_t. * Note that VEHICLE_SIGNAL_TYPE_HV_BATTERY_CURRENT is signed. An electric vehicle generally discharges the battery (positive current) when driving, but can also charge the battery via regenerative braking (negative current) during deceleration. The total energy to be computed is the NET POSITIVE energy drawn from the battery.

# What you'll find to get started:

  * Two (essentially empty) source files are found in the trip_calculator directory. Use them to use to implement your library.

  * A main.c exists for you to call your unit test(s). If you have a favourite C unit test library then by all means import it.

  * vehicle_signal_t.h can be included where knowledge of this data type is needed.

  * A CSV file with sample data should be used as the basis for your unit test(s).




# Things to keep in mind:

  * There isn't a lot of code to get you started. In fact, the included files are missing some important elements. Please demonstrate best practices when updating these files.

  * We don't care what integration method you choose to use.

  * Use comments to describe what your code does (and, more importantly, why).

  * Feel free to add more source files if you feel that they will benefit the project.

  * You may create new types and variables as needed to support your calculations. Try to keep your code library file(s) from containing any state, so that they are safe to use in a multi-threaded environment.

  * Although you will likely test your code in a desktop environment, it will ultimately execute in an embedded environment (a low-cost @abstr_number -bit micro-controller). Be aware of this when choosing the data types and mathematical operations for your calculations.




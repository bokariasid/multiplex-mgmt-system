## To run the project - 
* npm install
* npm start
## DB to be used 
* Mysql will be most preferred (gives join capabilities and sorting is made easy. Search capability also improves)
* For time constraint we can use mongodb for now.
## Assumptions

* The sorting strategy will be based on the number of seats in silver * price in silver
* The default prices and categories assumed are - 
  * Silver   - 150
  * Gold     - 200
  * Platinum - 250

* Seat assignment will be done at category level. User will only be able to select the category and number of seats.
* The number of shows that can be shown for a screen will be limited for now. (3 slots)
  * Slot1 = 10 am - 01 pm
  * Slot2 = 02 pm - 05 pm
  * Slot3 = 06 pm - 09 pm

* Movie schedule will need to be setup before a movie can be made available for search
* Conflicting schedules can't be created for a particular screen.
* Add a multiplex
```
curl --location --request POST 'localhost:3000/multiplex' \
--header 'Content-Type: application/json' \
--data-raw '{
    "screenCount":10,
    "city":"Mumbai"
}'
```
* Add a screen to a multiplex
```
curl --location --request POST 'localhost:3000/multiplex/add-screen' \
--header 'Content-Type: application/json' \
--data-raw '{
    "seatsConfig":[{"category":"GOLD", "count":10},{"category":"SILVER", "count":5},{"category":"PLATINUM", "count":2}],
    "multiplexId":"6379cea1f5415db50b01799d"
}'
```
* Add a schedule for a multiplex screen
```
curl --location --request POST 'localhost:3000/schedule' \
--header 'Content-Type: application/json' \
--data-raw '{
    "seatsConfig":[{"category":"GOLD", "price":10},{"category":"SILVER", "price":5},{"category":"PLATINUM", "price":2}],
    "multiplexId":"6379cea1f5415db50b01799d",
    "screenId":"6379d1d82e22067123e649c2",
    "from":"08-11-2022",
    "to":"28-11-2022",
}'
```
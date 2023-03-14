# Frontend :night_with_stars:

The frontend is build using latest version of create react app which uses webpack as builder.

## Available Scripts

In the project directory, you can run:
### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

## Points covered :heavy_check_mark:

1. The exchange rate form which can be used to save an exchange (Transaction).
2. Socket client is being connected with server and the updated rates are being captures using this.
3. On clicking save button, a post API is being called to save the transaction (Rate).
4. Table component is build using all native HTML elements with pagination.
5. On changing the pagination you will different data being loaded with an API call.
6. Filter Form is build to filter the Rates in the table with from date, to date and transaction type.
7. The screen is made responsive for desktop and mobile version.
8. `HTML5` and `SCSS` are used html and their stylings with mixin for responsiveness.
9. React Hooks are used to maintain the states as its not large scale application and alternatively we can use React Redux as well.


## Important Libraries used

1. axios
2. loadash
3. sockt.io (Client)

## Work in progress

Unit test cases to bring the coverage to atleast 90% :screwdriver::bar_chart:

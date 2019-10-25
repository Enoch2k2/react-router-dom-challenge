# Challenge

## Getting Started
Install the packages

- run `bundle install`
- run `rails db:migrate db:seed`
- cd into the `client` directory
- For npm users run `npm install`. For yarn users run `yarn install`.
- Add react-router-dom as a dependency, for npm users `npm install react-router-dom --save`, for yarn users `yarn add react-router-dom`


If you run into any webpacker issue, you can add `SKIP_PREFLIGHT_CHECK=true` to an .env file.

## Running the server

You can run both servers just by typing `rake start` from the root of your rails directory. This uses the procfile in order to run both servers in one terminal.

## The challenge (dum dum dummmmmm)

This challenge is all about routing. The rest of the work has been done for you with the exception of the bonus challenge.

- Read the comments in App.js as it will provide the challenge for setting up Routing for our components.
- Read the comments in components/Nav.js as it will provide the challenge for adding our Links correctly in our navigation. Make sure to test that you are navigating without a refresh
- Read the comments in containers/PetNew.js as it will challenge you to redirect after a pet has been created.


## The bonus challenge (extreme dum dum dummms!!! ))

This you may find a little challenge as we are going to be adding a Pet Show page from scratch. Take a breath, you got this.

Read the notes from the PetShow.js as it will give hints how to implement this component from scratch (remember to use componentDidMount when fetching to the rails api)

Also There is no Backend controller things you have to do with this, the backend is already done for you.

To be able to link to these show pages, read the notes from PetLi.js in the components directly.


## Last Tip

Be confident, have fun, you got this! May the code be with you. (totally didn't steal that from anything)
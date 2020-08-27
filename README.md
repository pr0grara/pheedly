# Pheedly
Pheedly is a web application that aggregates news articles from sources you wish to follow.

## Background and Overview

Users can sign up for a **Pheedly** account and then select sources from the media outlets like CNN or gizmodo they wish to follow. Each one of these sources is queried and provides **Pheedly** with current articles that are presented to the user. In this manner a user can obtain all the news she needs daily by visiting only one website.

## Technologies

 ### Ruby on Rails, Node.js, React, Redux PostgreSQL Stack
 
 - **Backend: PostgreSQL, Ruby on Rails**
 
**Backend Schema**
 ``` 
  create_table "feeds", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "source_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pheed_id"
    t.index ["user_id", "source_id"], name: "index_feeds_on_user_id_and_source_id", unique: true
  end

  create_table "pheeds", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "name"], name: "index_pheeds_on_user_id_and_name", unique: true
  end

  create_table "sources", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "code"
    t.index ["name"], name: "index_sources_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
  end
```

Because what we produce at Pheedly is the aggregation of other companies products, our backend is lightweight. We only keep track of our users, our registered sources and the connections between the two. The vast majority of our work is done on the frontend making API calls and rendering their results.
 
 -  **Frontend: React, Redux, Node.js**
 
 **Session Actions**
 ```  
export const login = user => dispatch => {
  if (Boolean(localStorage.articles) && Date.now() - JSON.parse(localStorage.articles).time > 1800000) {
    localStorage.removeItem('articles')
  }
  return (  
    APIUtil.login(user).then(user => {
      dispatch(receiveCurrentUser(user))
      dispatch(addSourcesToState(user))
      dispatch(addPheedsToState(user))
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  )
};
```
A key feature implemented above is adding all of the articles to state and localStorage at the soonest possible moment. Since news is an abundant resource, consumed and produced on a large scale, making all of the appropriate API calls can take a couple seconds. Therefore as soon as our user has logged in, the process of obtaining all relevant articles begins. It is then paramount that we cache these results so we do not need to repeatidly make the same calls. You may have noticed that if our localStorage.articles object exists && is timestamped outside of the last 30 min we will remove it from localStorage. This is done because further downstream there is logic to ensure we only make our time intensive API calls if localStorage.articles does not exist. In this way we minimize the number of API calls made and we keep our render times under 200ms. But we also ensure to balance these performance boosts with a good user experience of fresh news articles to read every 30 minutes.

 **Article Actions > Curry Articles**
 ```
 export const curryArticles = sources => dispatch => {
  let res = {};
  let curryLength = sources.length
  let source = {}
  while (sources.length > 0) {
    source = sources.pop()
    APIUtil.bing(source.code)
    .then(obj => {
      res[obj.value[0].provider[0].name] = obj;
      if (Object.keys(res).length === curryLength) {
        res.time = Date.now();
        dispatch(receiveArticles(res))
        localStorage.setItem("articles", JSON.stringify(res))
        window.location.reload();
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}
 ```
When addPheedsToState is called in our Session Actions this function is called and is the one responsible to make all appropriate API calls. As each AJAX call settles the results are accumulated in an object with each source name as a key. Once all sources are accounted for we timestamp our results object before dispatching it to state and caching it in local storage.

**Bing API**
  - The Bing News API is by far one of the best news APIs on the market. At a very competitive price they can search for articles filtered by domain name (absolutely 	critical for Pheedly), and not only are the results generated quickly they are reliable in providing image links and other metadata such as date published. Far superior to all earlier APIs I worked with.

## Walkthrough
![Image of Site](https://github.com/pr0grara/pheedly/blob/master/screen_shot_2020-07-10_at_11.09.58_am.png)
 1. User can Login or Signup on splash page.
 2. Once logged in, user will be directed to their home page.
 3. An existing user with sources will be directed to their homepage displaying all of their articles in chronological order.
 4. A new user will be directed to **Create Feed** to add sources to follow and group them under a Pheed.
 5. From any location a user may access the sidebar which has a convenient dropdown navbar to redirect a user to any Pheed they wish.
 
 ## Live Link
 Hosted on Heroku
 http://pheedly.herokuapp.com/


how to add to credentials.yml =>
  - run $ EDITOR="nano" bin/rails credentials:edit
  - add whatever key value pair you would like
  - 'ctr - x'
  - 'y' to save changes
  
  better method =>
  -run $EDITOR='vim' rails credentials:edit
  - 'a' key to begin inserting text
  - esc key to stop inserting text
  - :w to "write" changes
  - :qa to quit

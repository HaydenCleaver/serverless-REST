# Class 18

## serverless-api

### UML

![whiteboard](Lab18.png)

### Root URL

[https://npjzz35lsf.execute-api.us-west-2.amazonaws.com/Production](https://npjzz35lsf.execute-api.us-west-2.amazonaws.com/Production)

### Routes

- `/people`
- `/people/id`

### Route Inputs

- `/people`
  - Post: Requires name and id.
  - Get All: No input
<br>
<br>
- `/people/id/?id=<id>`
  - Delete: Requires id.
  - Put: Requires id.
  - Get One: Requires id.

- I'm going to go back later and figure out how to make this fit with normal query language.  I don't like the repition of 'id'.

### Route Outputs

- Post: returns entry created.
- Get All: returns all table entries.
- Delete: returns successful delete message.
- Put: returns altered entry.
- Get One: returns entry that was searched for.

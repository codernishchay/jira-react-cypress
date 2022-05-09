# Jira React Cypress

Data attributes are like data-\* , we can put anything after dash, to uniquely identify html elements like id.

```html
<!-- They don't need a value -->
<div data-tag></div>

<!-- ...but they can have a value -->
<div data-tag="large"></div>
<div data-tag="navbar"></div>
```

### Some attributes to be used for this assignment

| Component / Element      | data-tag            |
| ------------------------ | ------------------- |
| Top Nav Bar              | navbar              |
| Create Project Form             | project-form |  
| Project Form Description Input   | pf-description |
| Project From Lead Input   | pf-lead         |              
| Project Form Project Name Input      | pf-name   |   
| Project Form Submit Button       | pf-submit     |
| Header Component     | header      |  
| Create Issue Button     | create-issue      |                
| Create Issue Form  Div   |  form-container      |                
| Issue form Description Input  | if-description   |              
| Issue form Assigned To Input  | assigned_to         |                
| Issue form Summary Input    |  if-summary          |             
| Issue form Submit  Button   |  if-submit          |               
| Search Box | search-box | 
| Issue Card | card-container | 
| Expanded Issue Card | expanded-card | 
| Expanded Issue Card Drop-down | drop-down| 

### Test File : jira-react.spec.js

### To run tests :
         npx cypress open

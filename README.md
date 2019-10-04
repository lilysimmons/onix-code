# onix-code

CodeList is an array of objects

Each object contains 4 key value pairs

`````
CodeListNumber": "1",
"CodeListDescription": "Notification or update type code",
"IssueNumber": "0",
"Code": []
`````

The value of the "Code" key in the CodeList object is also an array of objects with 3 to 4 key value pairs (some include "CodeNotes", some don't). There are a varying number of objects in the "Code" array.

````
"CodeValue": "10",
"CodeDescription": "Multiple-item retail product",
"CodeNotes": "Multiple-item product retailed as a whole",
"IssueNumber": "9"

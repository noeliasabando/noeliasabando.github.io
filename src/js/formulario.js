function contactame(){
  const data = {
    "personalizations": [
      {
        "to": [
          {
            "email": "noeliasabandogon@gmail.com"
          }
        ],
        "subject": "Hola noelia! =)"
      }
    ],
    "from": {
      "email": "luis@laboratoria.la"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "Ves que si funciona!"
      }
    ]
  }
  
  fetch('https://api.sendgrid.com/v3/mail/send', {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(response => response.json())
}


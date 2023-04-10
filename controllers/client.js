import Mailgun from "mailgun-js";
export const getEmailApi = async (req, res) => {
  

  try {
    const mg = Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN});
    const {site='Portfolio', full_name='Null', email='email@email.com', message='No Message'} =req.body;
    console.log(site, full_name, email, message)
    const emailData = {
      from: "<admin@keanulrichgozon.tech>",
      to: "keanulrich.gozon@gmail.com",
      subject: "Hello",
      template: "portfoliov3",
      'h:X-Mailgun-Variables': JSON.stringify(
        {site: site, full_name: full_name, email:email, message:message}
      )
    };

    mg.messages().send(emailData, function (error, body) {
      if(!error==undefined){res.status(200).json({message: 'true'})}else{res.status(200).json({message:'false'})}
    });
  } catch(error){
    res.status(404).json({message: error.message})
  }
};
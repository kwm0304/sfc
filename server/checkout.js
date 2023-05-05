const stripeAPI = require("./stripe");
const stripe =require('stripe')(`${process.env.STRIPE_SECRET_KEY}`)

async function createCheckoutSession(req, res) {
  //doesnt get logged
  console.log("createCheckout");
  //the web app url will be the business url customers will be redirected to after checkout
  const { line_items, customer_email, amount } = req.body;
  function getCookies (){
    return (req.headers.cookie).split(' ').pop()
  }
  console.log('headers', getCookies())
  console.log("cookies", ((req.headers.cookie)).split(' ').pop());
  console.log("lineItems", { line_items });
  console.log("customer_email", { customer_email });
  //check req body has line items and email
  if (!line_items || !customer_email) {
    return res
      .status(400)
      .json({ error: "missing required session parameters" });
  }

  let session;
  //never logs these but returns 401 error not  400
  try {
    console.log("session", { session });
    console.log("try");
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email,
      //will be the url the deployed app will be linked to
      success_url: "https://soles-for-christ.herokuapp.com/",
      cancel_url: "https://soles-for-christ.herokuapp.com/",
      submit_type: "donate",
    });
    console.log("yo", { sessionId: `${session.id}` });
    res.status(200).json({ sessionId: getCookies() }) &&
      res.redirect(303, session.url);
  } catch (error) {
    console.log("error", error);
    res
      .status(401)
      .json({ error: "an error occured, unable to create session" });
  }
}
module.exports = createCheckoutSession;

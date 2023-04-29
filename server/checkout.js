const stripeAPI = require('./stripe');

async function createCheckoutSession(req, res) {
    //the web app url will be the business url customers will be redirected to after checkout
    
    const { line_items, customer_email, amount } = req.body;
    //check req body has line items and email
    if(!line_items || !customer_email) {
        return res.status(400).json({ error: 'missing required session parameters' })
    }

    let session;

    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            customer_email, 
            //will be the url the deployed app will be linked to
            success_url: 'http://127.0.0.1:5173/',
            cancel_url: 'http://127.0.0.1:5173/',
            submit_type: 'donate'
        });
        res.status(200).json({ sessionId: session.id, }) && res.redirect(303, session.url)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'an error occured, unable to create session'})
    }
}
module.exports =  createCheckoutSession 